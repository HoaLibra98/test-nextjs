import axiosClient from '@configs/axios';
import { Box, IconButton, Popover, Stack } from '@mui/material';
import { setAlertOpen } from '@slices/alert';
import { imageFolder } from '@slices/media';
import { setClose, setOpen } from '@slices/popup';
import { ColorStyles } from '@theme/Designs';
import { Edit, Maximize2, Settings, Trash2 } from 'feather-icons-react/build/IconComponents';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Setting = ( { item, path } ) => {

    const [ anchorEl, setAnchorEl ] = useState( null );

    const handleClick = ( event ) => {
        setAnchorEl( event.currentTarget );
    };

    const handleClose = () => {
        setAnchorEl( null );
    };

    const open = Boolean( anchorEl );

    // popup image medias
    const dispatch = useDispatch();
    const handleEdit = ( src ) => {
        dispatch( imageFolder( path + src ) );
        dispatch( setOpen( {
            title: 'Edit Image',
            contents: 'CartInput/CartinputUpload/EditImage',
            props: {
                fullWidth: true,
                maxWidth: 'lg'
            },
            buttons: {
                close: false,
            }
        } ) );
    };

    const handleView = ( src ) => {
        dispatch( imageFolder( path + src ) );
        dispatch( setOpen( {
            title: 'View Image',
            contents: 'CartInput/CartinputUpload/ViewImage',
            props: {
                fullWidth: true,
                maxWidth: 'lg'
            },
            buttons: {
                close: false,
            }
        } ) );
    };

    const isImage = /\.(gif|jpe?g|png|svg)$/i.test( item.url );


    const handleDelete = async ( id ) => {
        dispatch( setOpen( {
            title: 'Alert',
            inputs: 'Do you want delete this Images?',
            contents: '',
            buttons: {
                close: {
                    label: 'Cancel',
                    type: 'button',
                    variant: 'btn-style-1',
                    onClick: () => dispatch( setClose() )
                },
                submit: {
                    label: 'OK',
                    variant: 'btn-style-2',
                    onClick: async () => {
                        const deleteId = await axiosClient.post( '@/media/delete', { id: id } );
                        if ( deleteId.success === true ) {
                            dispatch( setAlertOpen( { severity: 'success', message: 'Images delete success.' } ) );
                            window.location.reload( true );
                        } else {
                            dispatch( setAlertOpen( { severity: 'error', message: 'Images delete failed.' } ) );
                        }
                    },
                }
            }
        } ) );
    };


    return (
        <Box className="setting">
            <IconButton onClick={ handleClick }>
                <Settings size={ 18 } color={ ColorStyles.Foundation.Success[ 900 ] } />
            </IconButton>
            <Popover
                open={ open }
                anchorEl={ anchorEl }
                onClose={ handleClose }
                anchorOrigin={ { vertical: 'top', horizontal: 'center' } }
                transformOrigin={ { vertical: 'bottom', horizontal: 'center' } }
            >
                <Stack direction="row" spacing={ 2 } sx={ { backgroundColor: ColorStyles.Foundation.brown[ 200 ] } }>
                    { isImage && <IconButton onClick={ () => handleEdit( item.url ) }><Edit size={ 20 } /></IconButton > }
                    <IconButton onClick={ () => handleDelete( item.id ) }><Trash2 size={ 20 } /></IconButton>
                    <IconButton onClick={ () => handleView( item.url ) }><Maximize2 size={ 20 } /></IconButton>
                </Stack>
            </Popover>
        </Box>
    );
};

export default Setting;