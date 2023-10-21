import blockSaga from "@saga/blockSaga";
import mediaSaga from "@saga/mediaSaga";
import menuSaga from "@saga/menuSaga";
import { all } from "redux-saga/effects";

// Combine sagas
export function* rootSaga() {
    yield all( [
        menuSaga(),
        blockSaga(),
        mediaSaga(),
        // authSaga(),
        // settingSaga(),
    ] );
}