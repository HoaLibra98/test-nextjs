import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const menuSlice = createSlice( {
    name: 'menu',
    initialState: {
        menutype: false,
        menutypes: [],
        admin: {},
        frontend: [],
        theme: {},
        form: [],
    },
    reducers: {
        setMenutype: ( state, action ) => {
            return {
                ...state,
                menutype: action.payload
            };
        },
        setThemeMenu: ( state, action ) => {
            return {
                ...state,
                theme: { ...action.payload }
            };
        },
        setFormMenu: ( state, action ) => {
            return {
                ...state,
                form: action.payload
            };
        },
        setMenutypes: ( state, action ) => {
            return {
                ...state,
                menutype: action.payload.length > 0 ? action.payload[ 0 ].value : state.menutype,
                menutypes: action.payload
            };
        },
        addMenu: () => {

        },
        addThemeMenu: ( state, action ) => {

            const menus = Array.isArray( action.payload.menu ) ? action.payload.menu : [ action.payload.menu ];
            const themeMenutype = state.theme[ action.payload.menutype ] ? state.theme[ action.payload.menutype ] : [];

            return {
                ...state,
                theme: {
                    ...state.theme,
                    [ action.payload.menutype ]: [
                        ...themeMenutype,
                        ...menus
                    ]
                }
            };
        },
        updateThemeMenu: ( state, action ) => {
            return {
                ...state,
                theme: { ...action.payload }
            };
        },
        setThemeFrontend: ( state, action ) => {
            return {
                ...state,
                frontend: [ ...action.payload ]
            };
        }
    },
    extraReducers: {
        [ HYDRATE ]: ( state, action ) => {
            return {
                ...state,
                menutype: action.payload.menu.menutype ? action.payload.menu.menutype : state.menutype,
                menutypes: action.payload.menu.menutypes.length > 0 ? action.payload.menu.menutypes : state.menutypes,
                admin: action.payload.menu.admin || state.admin,
                frontend: action.payload.menu.frontend.length > 0 ? action.payload.menu.frontend : state.frontend,
                theme: action.payload.menu.theme || state.theme,
                form: action.payload.menu.form.length > 0 ? action.payload.menu.form : state.form
            };
        },
    },
} );
//export actions
export const {
    setMenutype, addMenu,
    setThemeMenu, addThemeMenu, updateThemeMenu,
    setThemeFrontend, setFormMenu, setMenutypes
} = menuSlice.actions;
//export selectors
export const selectorMenu = ( state ) => state.menu;
export const selectorMenuTheme = ( state ) => state.menu ? state.menu.theme : {};
export const selectorMenuFrontend = ( state ) => state.menu ? state.menu.frontend : [];
export const selectorMenuAdmin = ( state ) => state.menu ? state.menu.admin : {};
export const selectorMenuForm = ( state ) => state.menu ? state.menu.form : [];
export const selectorMenutypes = ( state ) => state.menu ? state.menu.menutypes : [];
export const selectorMenutype = ( state ) => state.menu ? state.menu.menutype : false;
//export reducer
const menuReducer = menuSlice.reducer;
export default menuReducer;