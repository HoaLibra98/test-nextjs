import { Button } from "@mui/material";
import { PlusCircle } from "feather-icons-react/build/IconComponents";
import { useState } from "react";
import PopupMessege from "./productDetail/PopupMessege";

const ExtralSpeacial = () => {
    const [ openMessage, setOpenMessage ] = useState( false );
    const handleOpenMessage = () => {
        setOpenMessage( true );
    };
    const handleCloseMessage = ( event, reason ) => {
        if ( reason !== 'backdropClick' ) {
            setOpenMessage( false );
        }
    };
    return (
        <>
            <Button variant="btn-shop-2" startIcon={ <PlusCircle /> } onClick={ handleOpenMessage }>Made it Extra special</Button>
            <PopupMessege open={ openMessage } handleClose={ handleCloseMessage } handleOpen={ handleOpenMessage } />
        </>
    );
};

export default ExtralSpeacial;