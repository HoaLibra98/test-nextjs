

// function* watchCheckAuth() {

//     while ( true ) {
//         // Get Session
//         const session = yield call( getSession );

//         if ( session && session !== null ) {
//             // Kiểm tra token
//             // const isValidToken = yield call( VerifyToken, session.token );

//             // if ( !isValidToken ) {
//             //     // Nếu token không hợp lệ, set logout state
//             //     yield put( { type: 'auth/setLogout' } );
//             // }
//         } else {
//             // Nếu token không hợp lệ, set logout state
//             yield put( { type: 'auth/setLogout' } );
//         }

//         // Chờ 1 phút trước khi kiểm tra lại
//         yield delay( 1 * 60 * 1000 );
//     }
// }

// export default function* authSaga() {
//     yield watchCheckAuth();
// }