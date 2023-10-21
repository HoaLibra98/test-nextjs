import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { useState } from 'react';

const CarInputCheckRadio = ( { name, label, options, defaultValue, onChange, ...props } ) => {

    const [ value, setValue ] = useState( defaultValue || '' );

    const handleRadioChange = ( event ) => {
        setValue( event.target.value );
        if ( onChange ) {
            onChange( event );
        }
    };

    return (
        <FormControl>
            <FormLabel id={ `${ name }-label` }>
                <Typography variant="body8">{ label }</Typography>
            </FormLabel>
            <RadioGroup name={ name } value={ value } onChange={ handleRadioChange } { ...props }>
                { options.map( ( option, index ) => <FormControlLabel key={ `${ name }-${ index }` } value={ option.value } control={ <Radio /> } label={ option.label } /> ) }
            </RadioGroup>
        </FormControl>
    );
};

export default CarInputCheckRadio;