import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { selectorPopup, setClose } from '@slices/popup';
import { ColorStyles } from '@theme/Designs';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const DisplayPopup = ( { options = {} } ) => {
    const formRef = useRef();

    const dispatch = useDispatch();
    const popup = useSelector( selectorPopup );

    const Contents = popup.contents && dynamic( () => import( `@components/${ popup.contents }` ).then( ( mod ) => mod.default ), { ssr: false } ) ||
        Array.isArray( popup.inputs ) && popup.inputs.length > 0 && dynamic( () => import( '@components/Popup' ).then( ( mod ) => mod.PopupForm ), { ssr: false } ) ||
        typeof popup.inputs === 'string' && popup.inputs !== '' && dynamic( () => import( '@components/Popup' ).then( ( mod ) => mod.PopupContent ), { ssr: false } ) ||
        false;

    const handleClose = ( event ) => {
        dispatch( setClose() );
    };

    const ListButtons = {
        close: {
            label: 'Close',
            type: 'button',
            variant: 'btn-style-3',
            onClick: handleClose
        },
        ...popup.buttons
    };

    const Buttons = Object.keys( ListButtons ).map( ( key ) => {
        const oldOnClick = ListButtons[ key ].onClick;
        if ( !oldOnClick ) return;

        return {
            ...ListButtons[ key ],
            key,
            onClick: ( e ) => {
                e.preventDefault();
                if ( oldOnClick ) oldOnClick( formRef );
            },
        };
    } );

    return (
        <Dialog open={ popup.open } { ...popup.props } onClose={ handleClose } scroll={ 'paper' }>
            <DialogTitle id="scroll-dialog-title">
                <Typography display='flex' alignItems='center' variant="title2">
                    { popup.icon && <FeatherIcon icon={ popup.icon } size={ 20 } color={ ColorStyles.Foundation.brown[ 500 ] } /> } &nbsp;
                    { popup.title }
                </Typography>
            </DialogTitle>
            <DialogContent dividers={ true } className="content-form">
                <Box ref={ formRef } component='form' noValidate>
                    { Contents && <Contents inputs={ popup.inputs } /> }
                </Box>
            </DialogContent>
            <DialogActions sx={ { alignItems: 'end' } }>
                { Buttons && Buttons.map( button => button && <Button key={ button.key } { ...button }>{ button.label || button.key }</Button> ) }
            </DialogActions>
        </Dialog>
    );
};

DisplayPopup.propTypes = {
    options: PropTypes.object
};