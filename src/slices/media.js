import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const mediaSlide = createSlice( {
    name: 'media',
    initialState: {
        listFolder: [],
        informationFolder: '',
        imageUrl: '',
        //lưu ảnh feature media
        imageFeature: [],
        images: [],
        selected: '',
        selectedImages: [],
    },
    reducers: {
        setListFolder: ( state, action ) => {
            return {
                ...state,
                listFolder: action.payload
            };
        },
        addFolder: () => { },
        updateFolder: () => { },
        addListFolder: ( state, action ) => {
            return {
                ...state,
                listFolder: [
                    ...state.listFolder,
                    action.payload
                ],
            };
        },
        // updateListFolder: ( state, action ) => {
        //     return {
        //         ...state,
        //         listFolder: [
        //             ...state.listFolder,
        //             action.payload
        //         ],
        //     };
        // },
        deleteListFolder: () => { },
        saveFolder: ( state, action ) => {
            return {
                ...state,
                informationFolder: action.payload,
            };
        },
        imageFolder: ( state, action ) => {
            return {
                ...state,
                imageUrl: action.payload,
            };
        },
        setImageFeature: ( state, action ) => {
            const index = state.imageFeature.findIndex( item => item.id === action.payload.id );
            if ( index !== -1 ) {
                const updatedImageFeature = [ ...state.imageFeature ];
                updatedImageFeature[ index ] = action.payload;
                return {
                    ...state,
                    imageFeature: updatedImageFeature,
                };
            } else {
                return {
                    ...state,
                    imageFeature: [ ...state.imageFeature, action.payload ],
                };
            }
        },
        setImages: ( state, action ) => {
            return {
                ...state,
                images: action.payload,
            };
        },
        setSelected: ( state, action ) => {
            return {
                ...state,
                selected: action.payload,
            };
        },
        setSelectedImages: ( state, action ) => {
            return {
                ...state,
                selectedImages: action.payload,
            };
        },
    },
    extraReducers: {
        [ HYDRATE ]: ( state, action ) => {
            return {
                ...state,
                listFolder: action.payload.media.listFolder ? action.payload.media.listFolder : state.listFolder,
                informationFolder: action.payload.media.informationFolder ? action.payload.media.informationFolder : state.informationFolder,
                imageUrl: action.payload.media.imageUrl ? action.payload.media.imageUrl : state.imageUrl,
                imageFeature: action.payload.media.imageFeature ? action.payload.media.imageFeature : state.imageFeature,
                images: action.payload.media.images ? action.payload.media.images : state.images,
                selected: action.payload.media.selected ? action.payload.media.selected : state.selected,
                selectedImages: action.payload.media.selectedImages ? action.payload.media.selectedImages : state.selectedImages,
            };
        },
    },
} );
//export actions
export const { setListFolder, addFolder, updateFolder, addListFolder, updateListFolder, deleteListFolder, saveFolder, imageFolder, setImageFeature, setImages, setSelected, setSelectedImages } = mediaSlide.actions;
//export selectors
export const selectorListFolder = ( state ) => state.media ? state.media.listFolder : [];
export const selectorParentIdFolder = ( state ) => state.media ? state.media : [];
export const selectorMediasImage = ( state ) => state.media ? state.media.imageUrl : [];
export const selectorImageFeature = ( state ) => state.media ? state.media.imageFeature : [];
export const selectorSelected = ( state ) => state.media ? state.media.selected : [];
export const selectorImages = ( state ) => state.media ? state.media.images : [];
export const selectorSelectedImages = ( state ) => state.media ? state.media.selectedImages : [];

//export reducer
const mediaReducer = mediaSlide.reducer;
export default mediaReducer;