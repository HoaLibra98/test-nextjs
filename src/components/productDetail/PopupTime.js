import ShopingCartIcon from '@components/ShopingCartIcon';
import Popup from '@elements/Popup';
import { Checkbox } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const PopupTime = ( { open, handleClose, handleOpen, isMobilePopup } ) => {
    const [ month, setMonth ] = useState( "" );
    const handleChangeMonth = ( event ) => {
        setMonth( event.target.value );
    };

    const [ date, setDate ] = useState( "" );
    const handleChangeDate = ( event ) => {
        setDate( event.target.value );
    };

    const [ year, setYear ] = useState( "" );
    const handleChangeYear = ( event ) => {
        setYear( event.target.value );
    };
    return (
        <>
            {/* popup time modal */ }
            <Popup open={ open } handleClose={ handleClose } className="Dialog-popup">
                <Box className='popup-time'>
                    { !isMobilePopup && <Typography variant="h2" className='popup-title'> Select Your Time And Date </Typography> }
                    { isMobilePopup && <Typography variant="h2" className='popup-title'> Select Your Time Slot  </Typography> }
                    {/* time */ }
                    <Box className="popup-checked-time">
                        <Box className='popup-checked-time-item'>
                            <Checkbox defaultChecked checkedIcon={ <ShopingCartIcon icon="check-icon" /> } icon={ <ShopingCartIcon icon="check" /> } />
                            <Typography variant='lable5' >9 AM TO 1 PM</Typography>
                        </Box>
                        <Box className='popup-checked-time-item'>
                            <Checkbox defaultChecked checkedIcon={ <ShopingCartIcon icon="check-icon" /> } icon={ <ShopingCartIcon icon="check" /> } />
                            <Typography variant='lable5' >1 AM TO 4 PM</Typography>
                        </Box>
                        <Box className='popup-checked-time-item'>
                            <Checkbox defaultChecked checkedIcon={ <ShopingCartIcon icon="check-icon" /> } icon={ <ShopingCartIcon icon="check" /> } />
                            <Typography variant='lable5'>4 AM TO 9 PM</Typography>
                        </Box>
                    </Box>
                    {/* month, date, year */ }
                    { isMobilePopup && <Typography variant="h2" className='popup-title-date-select'> Select Your Time Slot  </Typography> }
                    <Box className='popup-select-date-time'>
                        <FormControl>
                            <Select value={ month } onChange={ handleChangeMonth } displayEmpty >
                                <MenuItem value=""><Typography variant="lable5">Month</Typography></MenuItem>
                                <MenuItem value={ 10 }><Typography variant="lable5">January</Typography></MenuItem>
                                <MenuItem value={ 20 }><Typography variant="lable5">February</Typography></MenuItem>
                                <MenuItem value={ 30 }><Typography variant="lable5">March</Typography></MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <Select value={ date } onChange={ handleChangeDate } displayEmpty>
                                <MenuItem value=""><Typography variant="lable5">Date</Typography></MenuItem>
                                <MenuItem value={ 10 }><Typography variant="lable5">date 1</Typography></MenuItem>
                                <MenuItem value={ 20 }><Typography variant="lable5">date 2</Typography></MenuItem>
                                <MenuItem value={ 30 }><Typography variant="lable5">date 3</Typography></MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <Select value={ year } onChange={ handleChangeYear } displayEmpty>
                                <MenuItem value=""><Typography variant="lable5">year</Typography></MenuItem>
                                <MenuItem value={ 10 }><Typography variant="lable5">1 year</Typography></MenuItem>
                                <MenuItem value={ 20 }><Typography variant="lable5">2 year</Typography></MenuItem>
                                <MenuItem value={ 30 }><Typography variant="lable5">3 year</Typography></MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    {/* submit */ }
                    <Button variant="btn_black" ><Typography variant="lable6">SUBMIT</Typography></Button>
                </Box>
            </Popup>
        </>
    );
};

export default PopupTime;