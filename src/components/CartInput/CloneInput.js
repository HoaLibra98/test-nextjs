import { Box, IconButton, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { ColorStyles, TextStyles } from '@theme/Designs';
import { Trash2 } from 'feather-icons-react/build/IconComponents';
import { useEffect, useState } from 'react';

const CloneInput = ( { label, clone = true, children } ) => {
    const [ options, setOptions ] = useState( [] );
    const [ count, setCount ] = useState( 0 );

    useEffect( () => {
        const storedOptions = localStorage.getItem( 'options' );
        if ( storedOptions ) {
            setOptions( JSON.parse( storedOptions ) );
        }
    }, [] );

    useEffect( () => {
        localStorage.setItem( 'options', JSON.stringify( options ) );
    }, [ options ] );

    const addOption = () => {
        const updatedOptions = [ ...options, { key: '', value: '' } ];
        setOptions( updatedOptions );
        setCount( count + 1 );
    };

    const removeOption = ( index ) => {
        const updatedOptions = [ ...options ];
        updatedOptions.splice( index, 1 );
        setOptions( updatedOptions );
    };

    const handleOptionChange = ( index, field, value ) => {
        const updatedOptions = [ ...options ];
        updatedOptions[ index ][ field ] = value;
        setOptions( updatedOptions );
    };

    return (
        <Box className="custom-input-options">
            <Typography fontSize={ TextStyles.textSm.medium } color={ ColorStyles.Foundation.brown[ 700 ] }>
                { label }
            </Typography>
            { options.map( ( option, index ) => (
                <Stack direction="row" key={ index }>
                    { clone ? (
                        <children.type
                            { ...children.props }
                            name={ `${ children.props.name }[${ index }]` }
                            value={ option.value }
                            onChange={ ( e ) => {
                                if ( e && e.target && e.target.value ) {
                                    handleOptionChange( index, 'value', e.target.value );
                                }
                            } }
                        />
                    ) : (
                        children
                    ) }
                    { clone && options.length > 1 && (
                        <IconButton aria-label="Delete" onClick={ () => removeOption( index ) }>
                            <Trash2 size={ 18 } />
                        </IconButton>
                    ) }
                </Stack>
            ) ) }
            <Button variant="contained" onClick={ addOption }>
                + Add Option
            </Button>
        </Box>
    );
};

export default CloneInput;
