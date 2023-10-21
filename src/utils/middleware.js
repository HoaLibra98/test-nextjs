// import _ from "lodash";
// import multiparty from "multiparty";
// import nextConnect from "next-connect";

// const middleware = nextConnect();

// middleware.use( async ( req, res, next ) => {
//     const form = new multiparty.Form();
//     const rebuildData = ( data ) => {
//         if ( _.isEmpty( data ) ) {
//             return data;
//         }

//         const newData = _.reduce(
//             data,
//             ( result, value, key ) => {
//                 if ( _.isArray( value ) && value.length === 1 ) {
//                     result[ key ] = value[ 0 ];
//                 }
//                 return result;
//             },
//             {}
//         );

//         return newData;
//     };

//     await form.parse( req, function ( err, fields, files ) {
//         req.body = rebuildData( fields );
//         req.files = rebuildData( files );
//         next();
//     } );
// } );

// export default middleware;
