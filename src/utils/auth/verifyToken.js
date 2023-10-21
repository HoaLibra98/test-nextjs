const jwt = require( "jsonwebtoken" );

export const verifyToken = ( token ) => {

    if ( !token ) return { success: false, message: 'Invalid token.' };

    try {
        return { success: true, data: jwt.verify( token, process.env.SECRET_KEY ) };
    } catch ( err ) {
        console.log( err );
        if ( err instanceof jwt.TokenExpiredError ) {
            return { success: false, message: 'Token expired' };
        } else {
            return { success: false, message: 'Invalid token' };
        }
    }
};