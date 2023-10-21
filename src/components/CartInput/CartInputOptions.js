import { Box, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ColorStyles, TextStyles } from '@theme/Designs';
import { Trash2 } from 'feather-icons-react/build/IconComponents';
import { useEffect, useState } from 'react';
import { CarInput } from './CartInput';

const CartInputOptions = ( { label, clone } ) => {
    const [ options, setOptions ] = useState( [] );

    useEffect( () => {
        const storedOptions = localStorage.getItem( 'options' );
        if ( storedOptions ) {
            setOptions( JSON.parse( storedOptions ) );
        }
    }, [] );

    const saveOptionsToLocalStorage = ( updatedOptions ) => {
        localStorage.setItem( 'options', JSON.stringify( updatedOptions ) );
    };

    const addOption = () => {
        const updatedOptions = [ ...options, { key: '', value: '' } ];
        setOptions( updatedOptions );
        saveOptionsToLocalStorage( updatedOptions );
    };

    const removeOption = ( index ) => {
        const updatedOptions = [ ...options ];
        updatedOptions.splice( index, 1 );
        setOptions( updatedOptions );
        saveOptionsToLocalStorage( updatedOptions );
    };

    const handleOptionChange = ( index, field, value ) => {
        const updatedOptions = [ ...options ];
        updatedOptions[ index ][ field ] = value;
        setOptions( updatedOptions );
        saveOptionsToLocalStorage( updatedOptions );
    };

    return (
        <Box className="custom-input-options">
            <Typography fontSize={ TextStyles.textSm.medium } color={ ColorStyles.Foundation.brown[ 700 ] }>
                { label }
            </Typography>
            { options.map( ( option, index ) => (
                <Box key={ index } style={ { display: 'flex', alignItems: 'center' } }>
                    <CarInput
                        placeholder="Key"
                        name={ `options[${ index }][key]` }
                        value={ option.key }
                        onChange={ ( e ) => handleOptionChange( index, 'key', e.target.value ) }
                    />
                    <Stack>=</Stack>
                    <CarInput
                        placeholder="Value"
                        name={ `options[${ index }][value]` }
                        value={ option.value }
                        onChange={ ( e ) => handleOptionChange( index, 'value', e.target.value ) }
                    />
                    { clone ? (
                        options.length > 1 && (
                            <IconButton aria-label="Delete" onClick={ () => removeOption( index ) }>
                                <Trash2 size={ 18 } />
                            </IconButton>
                        )
                    ) : (
                        <IconButton aria-label="Delete" onClick={ () => removeOption( index ) }>
                            <Trash2 size={ 18 } />
                        </IconButton>
                    ) }
                </Box>
            ) ) }
            <Button variant="contained" onClick={ addOption }>
                + Add Option
            </Button>
        </Box>
    );
};

export default CartInputOptions;
