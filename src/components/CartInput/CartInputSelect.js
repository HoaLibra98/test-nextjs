import { Box, FormControl, MenuItem, Select, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const CartInputSelect = ( { label, name, options, defaultValue = '', onChange, ...props } ) => {

    const [ value, setValue ] = useState( defaultValue );

    const handleChange = ( event ) => {
        setValue( event.target.value );
        if ( onChange && typeof onChange === 'function' ) onChange( event.target.value, setValue );
    };

    return (
        <Box className="show-select-admin" { ...props }>
            <Stack direction="column" spacing={ 1 }>
                { label && <Typography variant="lable1">{ label }</Typography> }
                <FormControl sx={ { width: "100% !important" } }>
                    <Select displayEmpty className="show-oder-select" name={ name } value={ value } onChange={ handleChange }>
                        { options.map( ( option, index ) => (
                            <MenuItem className="list-item-select-1" key={ `select-${ option.label }-${ index }` } value={ option.value } disabled={ option.disabled }>
                                { option.label }
                            </MenuItem>
                        ) ) }
                    </Select>
                </FormControl>
            </Stack>
        </Box>
    );
};

export default CartInputSelect;