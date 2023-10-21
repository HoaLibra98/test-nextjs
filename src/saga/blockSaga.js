
import axiosClient from "@configs/axios";
import { setAlertOpen } from "@slices/alert";
import { setBlock } from "@slices/block";
import { all, call, put, takeLatest } from "redux-saga/effects";

function* saveModuleInBlock( action ) {
    try {
        const payload = action.payload;
        if ( payload ) {
            const data = yield axiosClient.post( '@/blocks/updateModule', { block: payload } );
            if ( data.success === true ) {
                yield put( setBlock( payload ) );
                yield put( setAlertOpen( { severity: 'success', message: `Module has updated.` } ) );
                return;
            }
        }
    } catch ( error ) {
        console.error( error );
    }

    yield put( setAlertOpen( { severity: 'error', message: 'Module update error.' } ) );
}

// function* addMenus( action ) {
//     try {
//         const payload = action.payload;
//         if ( payload ) {
//             const { menutype } = yield select( selectorMenu );
//             // Add menu custom Link
//             if ( payload.type === 'custom' ) {
//                 if ( !payload.data.title ) {
//                     yield put( setAlertOpen( { severity: 'error', message: 'Title isn\'t empty' } ) );
//                     return;
//                 };

//                 const addMenu = yield axiosClient.post( '@/menus/add', {
//                     type: payload.type,
//                     menutype: menutype,
//                     menu: {
//                         id: uuidv4(),
//                         text: payload.data.title,
//                         url: !payload.data.url ? '' : payload.data.url,
//                         parent: 0,
//                         droppable: true,
//                         name: payload.data.title,
//                     }
//                 } );
//                 if ( addMenu.success === true ) yield put( addThemeMenu( { menutype, menu: addMenu.data } ) );

//                 yield put( setAlertOpen( { severity: 'success', message: `Menu "${ payload.data.title }" added.` } ) );
//                 return;
//             }

//             // Add Menu Content Type
//             if ( payload.type === 'contenttype' || payload.type === 'taxonomy' ) {
//                 const addMenuContent = yield axiosClient.post( '@/menus/add', {
//                     type: payload.type,
//                     menutype: menutype,
//                     ...payload.data
//                 } );

//                 if ( addMenuContent.success === true ) yield put( addThemeMenu( { menutype, menu: addMenuContent.data } ) );

//                 yield put( setAlertOpen( { severity: 'success', message: `Menu added.` } ) );
//                 return;
//             }
//         }
//     } catch ( error ) {
//         // console.error( error );
//         yield put( setAlertOpen( { severity: 'error', message: 'Add Menu error.' } ) );
//     }
// }

// watcher saga
export function* setBlocksWatcher() {
    yield takeLatest( 'block/saveModuleInBlock', saveModuleInBlock );
    // yield takeLatest( 'menu/addMenu', addMenus );
}

export default function* blockSaga() {
    yield all( [ call( setBlocksWatcher ) ] );
}