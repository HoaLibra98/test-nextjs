import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice( {
    name: 'alert',
    initialState: {
        open: false,
        type: 'Snackbar',
        severity: 'success',
        position: { vertical: 'top', horizontal: 'right' },
        title: '',
        message: ''
    },
    reducers: {
        setAlertOpen: ( state, action ) => {
            return {
                ...state,
                ...action.payload,
                open: true
            };
        },
        setAlertClose: ( state ) => {
            return {
                ...state,
                open: false
            };
        }
    },
} );
//export actions
export const { setAlertOpen, setAlertClose } = alertSlice.actions;
//export selectors
export const selectorAlert = ( state ) => state.alert;
//export reducer
const alertReducer = alertSlice.reducer;
export default alertReducer;