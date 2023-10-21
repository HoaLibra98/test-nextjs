import axiosClient from "@configs/axios";
import { setAlertOpen } from "@slices/alert";
import { addListFolder } from "@slices/media";
import { all, call, put, takeLatest } from "redux-saga/effects";

function* deleteMedias( action ) {
    try {
        const payload = action.payload;
        if ( payload ) {
            const deleteFolder = yield axiosClient.post( '@/medias/delete', payload );
            if ( deleteFolder.success === true ) {
                yield put( setAlertOpen( { severity: 'success', message: 'Folder delete success' } ) );
                window.location.reload( true );
            }
        }
    } catch ( error ) {
        yield put( setAlertOpen( { severity: 'error', message: 'Folder delete not success' } ) );
    }
}

function* saveMedias( action ) {
    try {
        const payload = action.payload;
        if ( payload ) {
            const editFolder = yield axiosClient.post( '@/medias/save', payload );
            if ( editFolder.success === true ) {
                yield put( setAlertOpen( { severity: 'success', message: 'Folder update success' } ) );
                window.location.reload( true );
            }
        }
    } catch ( error ) {
        yield put( setAlertOpen( { severity: 'error', message: 'Folder update not success' } ) );
    }
}

function* addMedias( action ) {
    try {
        const payload = action.payload;
        if ( payload ) {
            const addFolder = yield axiosClient.post( '@/medias/save', payload );
            if ( addFolder.success === true ) {
                yield put( addListFolder( addFolder.data ) );
                yield put( setAlertOpen( { severity: 'success', message: 'Folder add success' } ) );
                window.location.reload( true );
            }
        }
    } catch ( error ) {
        yield put( setAlertOpen( { severity: 'error', message: 'Folder add not success' } ) );
    }
}

// watcher saga
export function* setMediasWatcher() {
    yield takeLatest( 'media/addFolder', addMedias );
    yield takeLatest( 'media/updateFolder', saveMedias );
    yield takeLatest( 'media/deleteListFolder', deleteMedias );
}

export default function* mediaSaga() {
    yield all( [ call( setMediasWatcher ) ] );
}