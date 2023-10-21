import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import alertReducer from '@slices/alert';
import attributeReducer from '@slices/attribute';
import authReducer from '@slices/auth';
import blockReducer from '@slices/block';
import cartReducer from '@slices/cart';
import customizerReducer from '@slices/customizer';
import loadingReducer from '@slices/loading';
import mediaReducer from '@slices/media';
import menuReducer from '@slices/menu';
import popupReducer from '@slices/popup';
import productReducer from '@slices/product';
import settingReducer from '@slices/setting';
import { getLocalStorageItem } from '@utils/cookies';
import { createWrapper } from 'next-redux-wrapper';
import { combineReducers } from "redux";
import { rootSaga } from './saga';

const rootReducer = combineReducers( {
    loading: loadingReducer,
    customizer: customizerReducer,
    setting: settingReducer,
    auth: authReducer,
    block: blockReducer,
    popup: popupReducer,
    alert: alertReducer,
    menu: menuReducer,
    media: mediaReducer,
    product: productReducer,
    attribute: attributeReducer,
    cart: cartReducer,
} );

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a makeStore function
const makeStore = ( initialState, options ) => {
    const store = configureStore( {
        reducer: rootReducer,
        middleware: [ sagaMiddleware ],
        devTools: true,
        preloadedState: {
            cart: loadFromLocalStorage(),
        },
    } );

    // Run the root saga after the middleware is attached to the store
    sagaMiddleware.run( rootSaga );

    return store;
};

const loadFromLocalStorage = () => {
    try {
        const productsInCart = getLocalStorageItem( 'productsInCart' ) || [];
        const noteCart = getLocalStorageItem( 'noteCart' ) || '';
        console.log( 'productsInCart', productsInCart );
        console.log( 'noteCart', noteCart );
        return {
            productsInCart: productsInCart.filter( item => item?.id ),
            noteCart,
        };
    } catch ( e ) { }
};
// export an assembled wrapper
export const wrapper = createWrapper( makeStore, { debug: false } );
