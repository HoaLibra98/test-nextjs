import { Box, FormControl, Input, InputAdornment } from '@mui/material';
import { ChevronRight } from 'feather-icons-react/build/IconComponents';

const KeepInTouch = ( { handleSubmit } ) => {
    return (
        <Box component="form" noValidate my="32px" onBlur={ handleSubmit }>
            <FormControl>   
                <Input
                    id="email"
                    type='email'
                    placeholder="EMAIL ADDRESS"
                    endAdornment={ <InputAdornment position="end"><ChevronRight /></InputAdornment> }
                    aria-describedby="standard-weight-helper-text"
                    inputProps={ {
                        "aria-label": "email",
                    } }
                />
            </FormControl>
        </Box>
    );
};

export default KeepInTouch;