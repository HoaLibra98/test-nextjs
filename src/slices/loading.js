import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice( {
    name: 'loading',
    initialState: {
        open: true,
        first: true
    },
    reducers: {
        setOpenLoading: ( state, action ) => {
            return {
                ...state,
                open: true
            };
        },
        setCloseLoading: ( state ) => {
            return {
                ...state,
                open: false,
                first: false
            };
        }
    },
} );
//export actions
export const { setOpenLoading, setCloseLoading } = loadingSlice.actions;
//export selectors
export const selectorLoading = ( state ) => state.loading;
//export reducer
const loadingReducer = loadingSlice.reducer;
export default loadingReducer;