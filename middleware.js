import { decode } from "next-auth/jwt";
import { NextResponse } from "next/server";

const AUTH_PAGES = [ "/login", "/signup" ];

const isAuthPages = ( url ) => AUTH_PAGES.some( ( page ) => page.startsWith( url ) );
const USE_SSL = process.env.DOMAIN.startsWith( "https://" );
const COOKIE_CSRF_KEY = `${ USE_SSL ? "__Host-" : "" }next-auth.csrf-token`;
const COOKIE_SESSION_KEY = `${ USE_SSL ? "__Secure-" : "" }next-auth.session-token`;

export async function middleware( request ) {
    const { url, nextUrl, cookies } = request;
    const { value: token } = cookies.get( COOKIE_SESSION_KEY ) ?? { value: null };

    const hasVerifiedToken = token && ( await decode( { token: token, secret: process.env.SECRET_KEY } ) );
    const isAuthPageRequested = isAuthPages( nextUrl.pathname );

    if ( isAuthPageRequested ) {
        if ( !hasVerifiedToken ) {
            const response = NextResponse.next();
            response.cookies.delete( COOKIE_CSRF_KEY );
            response.cookies.delete( COOKIE_SESSION_KEY );

            return response;
        }


        if ( nextUrl.searchParams.get( 'next' ) ) {
            return NextResponse.redirect( new URL( nextUrl.searchParams.get( 'next' ), url ) );
        }

        if ( hasVerifiedToken.user && hasVerifiedToken.user.redirect ) {
            return NextResponse.redirect( new URL( hasVerifiedToken.user.redirect, url ) );
        }

        return NextResponse.redirect( new URL( '/', url ) );
    }

    if ( !hasVerifiedToken ) {
        const searchParams = new URLSearchParams( nextUrl.searchParams );
        searchParams.set( "next", nextUrl.pathname );

        const response = NextResponse.redirect(
            new URL( `/login?${ searchParams }`, url )
        );
        response.cookies.delete( COOKIE_CSRF_KEY );
        response.cookies.delete( COOKIE_SESSION_KEY );

        return response;
    }

    const response = NextResponse.next();

    return response;
}

export const config = { matcher: [ "/login", "/admin/:path*" ] };