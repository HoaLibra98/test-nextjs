
import axiosClient from "@configs/axios";
import { setAlertOpen } from "@slices/alert";
import { addThemeMenu, selectorMenu } from "@slices/menu";
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { v4 as uuidv4 } from 'uuid';

function* saveMenus( action ) {
    try {
        const payload = action.payload; // Lấy ra payload từ action
        if ( payload ) {
            const menutype = Object.keys( payload )[ 0 ];
            const menus = payload[ menutype ];

            const data = yield axiosClient.post( '@/menus/update', { menutype, menus } );
            if ( data.success === true ) {
                yield put( setAlertOpen( { severity: 'success', message: `Menu has deleted.` } ) );
                return;
            }
        }
    } catch ( error ) {
        console.error( error );
    }

    yield put( setAlertOpen( { severity: 'error', message: 'Menu delete error.' } ) );
}

function* addMenus( action ) {
    try {
        const payload = action.payload;
        if ( payload ) {
            const { menutype } = yield select( selectorMenu );
            // Add menu custom Link
            if ( payload.type === 'custom' ) {
                if ( !payload.data.title ) {
                    yield put( setAlertOpen( { severity: 'error', message: 'Title isn\'t empty' } ) );
                    return;
                };

                const addMenu = yield axiosClient.post( '@/menus/add', {
                    type: payload.type,
                    menutype: menutype,
                    menu: {
                        id: uuidv4(),
                        text: payload.data.title,
                        url: !payload.data.url ? '' : payload.data.url,
                        parent: 0,
                        droppable: true,
                        name: payload.data.title,
                    }
                } );
                if ( addMenu.success === true ) yield put( addThemeMenu( { menutype, menu: addMenu.data } ) );

                yield put( setAlertOpen( { severity: 'success', message: `Menu "${ payload.data.title }" added.` } ) );
                return;
            }

            // Add Menu Content Type
            if ( payload.type === 'contenttype' || payload.type === 'taxonomy' ) {
                const addMenuContent = yield axiosClient.post( '@/menus/add', {
                    type: payload.type,
                    menutype: menutype,
                    ...payload.data
                } );

                if ( addMenuContent.success === true ) yield put( addThemeMenu( { menutype, menu: addMenuContent.data } ) );

                yield put( setAlertOpen( { severity: 'success', message: `Menu added.` } ) );
                return;
            }
        }
    } catch ( error ) {
        // console.error( error );
        yield put( setAlertOpen( { severity: 'error', message: 'Add Menu error.' } ) );
    }
}

// watcher saga
export function* setMenusWatcher() {
    yield takeLatest( 'menu/updateThemeMenu', saveMenus );
    yield takeLatest( 'menu/addMenu', addMenus );
}

export default function* menuSaga() {
    yield all( [ call( setMenusWatcher ) ] );
}