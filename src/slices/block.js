import { createSlice } from '@reduxjs/toolkit';
import { isArray } from 'lodash';
import { HYDRATE } from 'next-redux-wrapper';

const blockSlice = createSlice( {
    name: 'block',
    initialState: {
        modules: [],
        blocks: [],
        forms: {},
        front: []
    },
    reducers: {
        setModules: ( state, action ) => {
            return {
                ...state,
                modules: action.payload
            };
        },
        setBlocks: ( state, action ) => {
            return {
                ...state,
                blocks: action.payload
            };
        },
        setForm: ( state, action ) => {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    ...action.payload
                }
            };
        },
        saveModuleInBlock: ( state, action ) => {
            return {
                ...state
            };
        },
        setBlock: ( state, action ) => {
            return {
                ...state,
                blocks: !isArray( action.payload ) ?
                    state.blocks.map( block => ( block.id === action.payload.id ? action.payload : block ) ) :
                    state.blocks.map( block => ( action.payload.find( b => block.id === b.id ) || block ) )
            };
        },
        setStatusEditForm: ( state, action ) => {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    [ action.payload.module ]: {
                        ...state.forms[ action.payload.module ],
                        edit: action.payload.edit
                    }
                }
            };
        },
        setFrontBlocks: ( state, action ) => {
            return {
                ...state,
                front: action.payload
            };
        },
    },
    extraReducers: {
        [ HYDRATE ]: ( state, action ) => {
            return {
                ...state,
                modules: action.payload.block.modules.length > 0 ? action.payload.block.modules : state.modules,
                blocks: action.payload.block.blocks.length > 0 ? action.payload.block.blocks : state.blocks,
                forms: action.payload.block.forms || state.forms,
                front: action.payload.block.front.length > 0 ? action.payload.block.front : state.front
            };
        },
    },
} );
//export actions
export const { setModules, setBlocks, setForm, setStatusEditForm, setBlock, saveModuleInBlock, setFrontBlocks } = blockSlice.actions;
//export selectors
export const selectorBlock = ( state ) => state.block;
export const selectorModule = ( state ) => state.block ? state.block.modules : [];
export const selectorBlockList = ( state ) => state.block ? state.block.blocks : [];
export const selectorFormModule = ( state ) => state.block ? state.block.forms : {};
export const selectorBlockFront = ( state ) => state.block ? state.block.front : [];
//export reducer
const blockReducer = blockSlice.reducer;
export default blockReducer;