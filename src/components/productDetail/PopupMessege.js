import ShopingCartIcon from "@components/ShopingCartIcon";
import Popup from "@elements/Popup";
import { Box, Button, Checkbox, FormControl, OutlinedInput, Stack, Typography } from "@mui/material";
import { ColorStyles } from "@theme/Designs";

const PopupMessege = ( { open, handleClose, handleOpen } ) => {
    return (
        <>
            <Popup open={ open } handleClose={ handleClose } className="Dialog-popup">
                <Box className="popup-message">
                    <Box className="popup-message-item">
                        <Typography variant="h2" className='popup-title'> Write Yout Message</Typography>
                        {/* radio Write */ }
                        <Box className="popup-content-message">
                            <Box className="popup-content-message-checkbox">
                                <Box className="popup-content-message-checkbox-item">
                                    <Checkbox defaultChecked checkedIcon={ <ShopingCartIcon icon="check-icon" /> } icon={ <ShopingCartIcon icon="check" /> } />
                                    <Stack direction="column" alignItems="start" className="checkbox-item-text">
                                        <Typography variant='lable5' >Write On The Top The Cake</Typography>
                                        <Typography variant='h3' >$20</Typography>
                                    </Stack>
                                </Box>
                                <Box className="popup-content-message-checkbox-item" >
                                    <Checkbox defaultChecked checkedIcon={ <ShopingCartIcon icon="check-icon" /> } icon={ <ShopingCartIcon icon="check" /> } />
                                    <Stack direction="column" alignItems="start" className="checkbox-item-text">
                                        <Typography variant='lable5' >Write The Message On The Paper</Typography>
                                        <Typography variant='h3' color={ ColorStyles.Foundation.Success[ 500 ] }>Free</Typography>
                                    </Stack>
                                </Box>
                            </Box>
                            <FormControl><OutlinedInput multiline={ true } minRows={ 6 } placeholder="Write Your Message (0/30 word)" /></FormControl>
                        </Box>
                        <Button variant="btn_black" ><Typography variant="lable6">SUBMIT</Typography></Button>
                    </Box>
                </Box>
            </Popup>
        </>
    );
};

export default PopupMessege;