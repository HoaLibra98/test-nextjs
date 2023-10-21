import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { HYDRATE } from 'next-redux-wrapper';

const attributeSlice = createSlice( {
    name: 'attribute',
    initialState: {
        optionAttribute: {
            options: [
                {
                    value: "",
                    label: 'Add existing',
                    disabled: true
                },
            ],
            defaultValue: "",
        },
        selected: [],
        formAttribute: [],
        variations: [],
        tab: 0,
        selectedVariations: [],
    },
    reducers: {
        setTabAttr: ( state, action ) => {
            return {
                ...state,
                tab: action.payload
            };
        },
        setAttributes: ( state, action ) => {
            const options = _.isArray( action.payload ) ? action.payload : [ action.payload ];
            return {
                ...state,
                optionAttribute: {
                    ...state.optionAttribute,
                    options: [
                        ...state.optionAttribute.options,
                        ...options
                    ],
                }
            };
        },
        setListVariations: ( state, action ) => {
            return {
                ...state,
                variations: action.payload
            };
        },
        setSelected: ( state, action ) => {
            const indexOption = state.optionAttribute.options.findIndex( option => option.value === action.payload.id );

            return {
                ...state,
                optionAttribute: indexOption === -1 ? state.optionAttribute : {
                    ...state.optionAttribute,
                    options: [
                        ...state.optionAttribute.options.slice( 0, indexOption ),
                        {
                            ...state.optionAttribute.options[ indexOption ],
                            disabled: true
                        },
                        ...state.optionAttribute.options.slice( indexOption + 1 ),
                    ]
                },
                selected: [
                    ...state.selected,
                    action.payload
                ]
            };
        },
        changeSelected: ( state, action ) => {
            return {
                ...state,
                selected: action.payload
            };
        },
        deleteSelected: ( state, action ) => {
            const index = state.selected.findIndex( attr => attr.id === action.payload );
            if ( index === -1 ) return state;

            const indexOption = state.optionAttribute.options.findIndex( option => option.value === action.payload );

            return {
                ...state,
                optionAttribute: indexOption === -1 ? state.optionAttribute : {
                    ...state.optionAttribute,
                    options: [
                        ...state.optionAttribute.options.slice( 0, indexOption ),
                        {
                            ...state.optionAttribute.options[ indexOption ],
                            disabled: false
                        },
                        ...state.optionAttribute.options.slice( indexOption + 1 ),
                    ]
                },
                selected: [
                    ...state.selected.slice( 0, index ),
                    ...state.selected.slice( index + 1 ),
                ]
            };
        },
        setOptionsSelected: ( state, action ) => {
            const index = state.selected.findIndex( attr => attr.id === action.payload.id );
            if ( index === -1 ) return state;

            return {
                ...state,
                selected: [
                    ...state.selected.slice( 0, index ),
                    {
                        ...state.selected[ index ],
                        defaultValue: action.payload.value
                    },
                    ...state.selected.slice( index + 1 ),
                ]
            };
        },
        setVariations: ( state, action ) => {
            const index = state.selected.findIndex( attr => attr.id === action.payload.id );
            if ( index === -1 ) return state;

            return {
                ...state,
                selected: [
                    ...state.selected.slice( 0, index ),
                    {
                        ...state.selected[ index ],
                        useVariations: {
                            ...state.selected[ index ].useVariations,
                            defaultValue: action.payload.value
                        }
                    },
                    ...state.selected.slice( index + 1 ),
                ]
            };
        },
        setLabelAttribute: ( state, action ) => {
            const index = state.selected.findIndex( attr => attr.id === action.payload.id );
            if ( index === -1 ) return state;

            return {
                ...state,
                selected: [
                    ...state.selected.slice( 0, index ),
                    {
                        ...state.selected[ index ],
                        label: action.payload.value,
                        text: action.payload.value,
                    },
                    ...state.selected.slice( index + 1 ),
                ]
            };
        },
        setNewOptionsAttribute: ( state, action ) => {
            const index = state.selected.findIndex( attr => attr.id === action.payload.id );
            if ( index === -1 ) return state;

            return {
                ...state,
                selected: [
                    ...state.selected.slice( 0, index ),
                    {
                        ...state.selected[ index ],
                        options: action.payload.options,
                        defaultValue: action.payload.defaultValue,
                    },
                    ...state.selected.slice( index + 1 ),
                ]
            };
        },
        setOptionAttribute: ( state, action ) => {
            return {
                ...state,
                optionAttribute: action.payload
            };
        },
        setFormAttribute: ( state, action ) => {
            return {
                ...state,
                formAttribute: action.payload
            };
        },
        setTab: ( state, action ) => {
            return {
                ...state,
                tab: action.payload
            };
        },
        setSelectedVariations: ( state, action ) => {
            return {
                ...state,
                selectedVariations: action.payload
            };
        },
    },
    extraReducers: {
        [ HYDRATE ]: ( state, action ) => {
            return {
                ...state,
                optionAttribute: {
                    ...action.payload.attribute.optionAttribute,
                    options: [
                        ...action.payload.attribute.optionAttribute.options
                    ]
                },
            };
        },
    },
} );
export const { setTabAttr, setSelected, deleteSelected, changeSelected, setOptionsSelected, setVariations, setLabelAttribute, setNewOptionsAttribute, setAttributes, setOptionAttribute, setFormAttribute, setListVariations, setSelectedVariations } = attributeSlice.actions;
//export selectors
export const getTabAttr = ( state ) => state.attribute ? state.attribute.tab : 0;
export const selectorOptionAttribute = ( state ) => state.attribute ? state.attribute.optionAttribute : {};
export const selectorFormAttribute = ( state ) => state.attribute ? state.attribute.formAttribute : [];
export const selectorSelectedAttrs = ( state ) => state.attribute ? state.attribute.selected : [];
export const selectorTab = ( state ) => state.attribute ? state.attribute.tab : '';
export const selectorSelectedVariations = ( state ) => state.attribute ? state.attribute.selectedVariations : [];
//export reducer
const attributeReducer = attributeSlice.reducer;
export default attributeReducer;