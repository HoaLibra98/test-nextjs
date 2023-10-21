import { Box, Dialog } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import { X } from "feather-icons-react/build/IconComponents";

const Popup = ( { open, handleClose, children, ...props } ) => {
    return (
        <Dialog disableEscapeKeyDown open={ open } onClose={ handleClose } { ...props }>
            <Box className="popup">
                <Box className='circle' onClick={ handleClose }><X color={ ColorStyles.Foundation.baseColor.black } /></Box>
                <Box className='popup-content'>
                    { children }
                </Box>
            </Box>
        </Dialog>
    );
};

export default Popup;