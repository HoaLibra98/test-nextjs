import { decode } from "next-auth/jwt";
const jwt = require( "jsonwebtoken" );

const USE_SSL = process.env.DOMAIN.startsWith( "https://" );
const COOKIE_SESSION_KEY = `${ USE_SSL ? "__Secure-" : "" }next-auth.session-token`;

export const verifySession = async ( req ) => {

    if ( !req.cookies[ COOKIE_SESSION_KEY ] ) return { success: false, message: 'Invalid session.' };

    try {
        const session = await decode( { token: req.cookies[ COOKIE_SESSION_KEY ], secret: process.env.SECRET_KEY } );
        const token = jwt.verify( session.token, process.env.SECRET_KEY );
        return { success: true, data: session, token: session.token };
    } catch ( err ) {
        // console.log( err );
        if ( err instanceof jwt.TokenExpiredError ) {
            return { success: false, message: 'Token expired' };
        } else {
            return { success: false, message: 'Invalid session.' };
        }
    }
};