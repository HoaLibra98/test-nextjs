import { verifyToken } from "@utils/auth/verifyToken";
import { getLocalStorageItem } from "@utils/cookies";
import { getProviders, getSession, signIn, signOut } from "next-auth/react";

export const checkAuth = async ( url ) => {
    // const session = await getSession();
    const session = getLocalStorageItem( 'token' );

    if ( session && session.token ) {
        const decode = verifyToken( session.token );
        // Token expired
        if ( decode.success === false ) return logout();
    }
};

export const login = async ( data = {}, provider = 'credentials' ) => {
    const providers = await getProviders();

    return signIn( providers[ provider ].id, {
        redirect: false,
        ...data
    } ).then( async ( res ) => {
        if ( res.ok && res.ok === true ) {
            const session = await getSession();
            const decode = verifyToken( session.token );
            return { success: true, res: res, session: session, token: decode };
        }
        return { success: false, res: res };
    } );
};

export const logout = async ( url = '/login', redirect = true ) => {
    signOut( {
        callbackUrl: url,
        redirect
    } ).then( ( res ) => {
        // if ( redirect ) Router.push( url );
    } );
};