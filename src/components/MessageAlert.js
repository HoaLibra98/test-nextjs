
import { Snackbar, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { forwardRef, useEffect } from 'react';
import ShopingCartIcon from './ShopingCartIcon';


const Alert = forwardRef( function Alert( props, ref ) {
    return <MuiAlert elevation={ 6 } ref={ ref } variant="filled" { ...props } />;
} );

const MessageAlert = ( { open, setOpen } ) => {

    useEffect( () => {
        setTimeout( () => {
            setOpen( false );
        }, 5000 );
    }, [ open, setOpen ] );

    return (
        <Snackbar
            anchorOrigin={ {
                vertical: 'top',
                horizontal: 'right',
            } }
            open={ open } >
            <Alert severity="success" sx={ { width: '100%' } }
                iconMapping={ {
                    success: <ShopingCartIcon icon="check-icon" />,
                } }
            >
                <Typography variant="lable8">Add to cart successfully</Typography>
            </Alert>
        </Snackbar>
    );
};

export default MessageAlert;