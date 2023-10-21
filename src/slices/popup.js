import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice( {
    name: 'popup',
    initialState: {
        open: false,
        type: 'Dialog',
        icon: 'alert-circle',
        title: '',
        contents: '',
        inputs: [],
        buttons: {},
        props: {}
    },
    reducers: {
        setOpen: ( state, action ) => {
            return {
                ...state,
                ...action.payload,
                open: true
            };
        },
        setClose: ( state ) => {
            return {
                ...state,
                title: '',
                contents: '',
                inputs: [],
                buttons: {},
                props: {},
                open: false
            };
        }
    },
} );
//export actions
export const { setOpen, setClose } = popupSlice.actions;
//export selectors
export const selectorPopup = ( state ) => state.popup;
//export reducer
const popupReducer = popupSlice.reducer;
export default popupReducer;