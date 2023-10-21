import { createSlice } from '@reduxjs/toolkit';
import { setLocalStorageItem } from '@utils/cookies';
import _ from 'lodash';

const cartSlice = createSlice( {
    name: 'cart',
    initialState: {
    },
    reducers: {
        updateProductsInCart: ( state, action ) => {
            const products = _.uniqBy( [ action.payload || {}, ...( state?.productsInCart || [] ) ], 'id' );
            setLocalStorageItem( 'productsInCart', products );
            return {
                ...state,
                productsInCart: _.uniqBy( [ action.payload || {}, ...( state?.productsInCart || [] ) ], 'id' )
            };
        },
        removeCartItem: ( state, action ) => {
            const products = ( state?.productsInCart || [] ).find( item => item?.id !== action.payload );
            setLocalStorageItem( 'productsInCart', products );
            return {
                ...state,
                productsInCart: products
            };
        },
        updateNote: ( state, action ) => {
            setLocalStorageItem( 'noteCart', action.payload );
            return {
                ...state,
                noteCart: action.payload,
            };
        },
    },
} );
//export actions
export const { updateProductsInCart, removeCartItem, updateNote } = cartSlice.actions;
//export selectors
export const selectorProductsInCart = ( state ) => state.cart && _.isArray( state.cart?.productsInCart ) ? state.cart.productsInCart : [];
export const selectorNoteCart = ( state ) => state.cart ? state.cart.noteCart : '';
//export reducer
const cartReducer = cartSlice.reducer;
export default cartReducer;