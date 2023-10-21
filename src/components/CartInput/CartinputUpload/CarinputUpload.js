import { Box } from '@mui/material';
import { selectorImageFeature, selectorSelectedImages, setSelected, setSelectedImages } from '@slices/media';
import { setClose, setOpen } from "@slices/popup";
import { UploadCloud, XCircle } from 'feather-icons-react/build/IconComponents';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import S from 'string';
import { v4 as uuidv4 } from 'uuid';
import { ImageOrFileIcon } from './CheckFileOrImage';

const CarinputUpload = ( { ...props } ) => {

    props = {
        className: "upload-file",
        ...props
    };

    const [ generatedId, setGeneratedId ] = useState( uuidv4() );
    const pathServer = S( process.env.APISERVER ).replaceAll( `/${ process.env.VERSION }`, '' );
    const dispatch = useDispatch();
    const [ checkImg, setCheckImg ] = useState( props.defaultValue ? true : false );
    const [ dispatched, setDispatched ] = useState( false );
    const selectImg = useSelector( selectorSelectedImages );
    const imgMediaFeature = useSelector( selectorImageFeature );

    useEffect( () => {
        const imgMultipleDefault = () => {
            if ( props.defaultValue ) {
                const imageUrls = props.defaultValue.split( ',' );
                const imagesToDispatch = imageUrls.map( ( url ) => ( { id: generatedId, url: url.trim() } ) );
                dispatch( setSelectedImages( imagesToDispatch ) );
                setDispatched( true );
            }
        };

        if ( !dispatched && props.defaultValue ) {
            if ( props.defaultValue.includes( ',' ) ) {
                imgMultipleDefault();
            }
        }
    }, [ dispatched, generatedId, dispatch, props.defaultValue ] );

    const matchingImage = imgMediaFeature.length === 1 ? imgMediaFeature[ 0 ] : imgMediaFeature.find( image => image.id === generatedId );
    const imageUrl = matchingImage && generatedId === matchingImage.id ? matchingImage.url : props.defaultValue;
    const imgMultiple = selectImg.filter( img => img.id === generatedId ).map( img => img.url );

    const handleOpen = () => {
        dispatch( setSelected( { generatedId } ) );
        dispatch( setOpen( {
            title: 'Medias',
            contents: 'CartInput/CartinputUpload/UploadImages',
            inputs: { id: generatedId },
            props: {
                fullWidth: true,
                maxWidth: 'lg'
            },
            buttons: {
                close: false,
                submit: false
            }
        } ) );
    };

    const handleOpenMultiple = () => {
        dispatch( setSelected( { generatedId } ) );
        dispatch( setOpen( {
            title: 'Medias',
            contents: 'CartInput/CartinputUpload/UploadImages',
            inputs: { id: generatedId, multiple: props.multiple },
            props: {
                fullWidth: true,
                maxWidth: 'lg'
            },
            buttons: {
                close: false,
                submit: {
                    label: 'Insert',
                    variant: 'btn-style-2',
                    onClick: () => {
                        setCheckImg( true );
                        dispatch( setClose() );
                    },
                }
            }
        } ) );
    };

    const handleDeleteImage = ( value ) => {
        const deleteImage = selectImg.filter( img => img.url !== value );
        dispatch( setSelectedImages( deleteImage ) );
    };

    return (
        <Box>
            {
                props.multiple ? (
                    imgMultiple || props.defaultValue ? (
                        <>
                            <Box id={ generatedId } onClick={ () => { handleOpenMultiple(); } } { ...props }>
                                <UploadCloud size={ 60 } />
                            </Box>
                            <Box style={ { display: 'flex', gap: 10, flexWrap: 'wrap' } }>
                                { checkImg &&
                                    imgMultiple.map( ( value, index ) => (
                                        <Box key={ index } className="image-multiple">
                                            <ImageOrFileIcon src={ `${ pathServer }${ value }` } alt="media image" />
                                            <XCircle onClick={ () => handleDeleteImage( value ) } />
                                        </Box>
                                    ) ) }
                                <input name={ props.name } type="hidden" defaultValue={ imgMultiple } />
                            </Box>
                        </>
                    ) : (
                        <Box id={ generatedId } onClick={ () => { handleOpenMultiple(); } } { ...props }>
                            <UploadCloud size={ 60 } />
                        </Box>
                    )
                ) : (
                    imageUrl || props.defaultValue ? <Box onClick={ handleOpen } style={ { position: "relative", width: "100%", height: "100%", overflow: "hidden" } } >
                        <ImageOrFileIcon src={ `${ pathServer }${ imageUrl }` || '' } alt="media image" />
                        <input name={ props.name } type="hidden" defaultValue={ imageUrl || props.defaultValue } />
                    </Box>
                        : <Box id={ generatedId } onClick={ () => { handleOpen(); } } { ...props } >
                            <UploadCloud size={ 60 } />
                        </Box>
                )
            }
        </Box >
    );
};
export default CarinputUpload;