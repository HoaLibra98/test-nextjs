import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice( {
    name: 'auth',
    initialState: {
        user: {},
        token: null,
        loading: true,
        error: null,
    },
    reducers: {
        setUser: ( state, action ) => {
            if ( action.payload === null ) {
                return {
                    user: {},
                    token: null,
                    loading: true,
                    error: null,
                };
            }

            return {
                ...state,
                user: action.payload.user,
                token: {
                    ...state.token,
                    ...action.payload.token
                },
                loading: false,
                error: null
            };
        },
        setLoading: ( state, action ) => {
            return {
                ...state,
                loading: action.payload
            };
        },
        setError: ( state, action ) => {
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        },
        setLogout: ( state ) => {
            return {
                ...state,
                user: {},
                token: null,
                error: null
            };
        },
    },
} );
//export actions
export const { setUser, setLoading, setError, setLogout } = authSlice.actions;
//export selectors
export const selectorAuth = ( state ) => state.auth;
export const selectorAuthUser = ( state ) => state.auth && state.auth.user;
export const userToken = ( state ) => state.auth && state.auth.token && Object.values( state.auth.token ).join( '' );
//export reducer
const authReducer = authSlice.reducer;
export default authReducer;