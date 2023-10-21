import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const productSlice = createSlice( {
    name: 'product',
    initialState: {
        formProduct: {},
        type: '',
        emptyField: {},
    },
    reducers: {
        setFormProduct: ( state, action ) => {
            return {
                ...state,
                formProduct: action.payload.formProduct,
                type: action.payload.type
            };
        },
        setEmptyField: ( state, action ) => {
            return {
                ...state,
                emptyField: action.payload
            };
        }
    },
    extraReducers: {
        [ HYDRATE ]: ( state, action ) => {
            return {
                ...state,
                formProduct: action.payload.product.formProduct,
                type: action.payload.product.type
            };
        },
    },
} );
//export actions
export const { setFormProduct, setEmptyField } = productSlice.actions;
//export selectors
export const selectorFormProduct = ( state ) => state.product;
export const selectorEmptyField = ( state ) => state.product ? state.product.emptyField : {};
//export reducer
const productReducer = productSlice.reducer;
export default productReducer;