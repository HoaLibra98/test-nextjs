import { IconButton, Stack, Typography } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import { Minus, Plus } from 'feather-icons-react/build/IconComponents';
import { forwardRef, useImperativeHandle, useState } from 'react';

const AddcountCart = forwardRef( ( { onCountChange, minCount, ...props }, ref ) => {
    const [ count, setCount ] = useState( 1 );

    const handleDecrease = () => {
        const newCount = Math.max( count - 1, minCount === 0 ? minCount : 1 );
        setCount( newCount );
        onCountChange && onCountChange( newCount );
    };

    const handleIncrease = () => {
        const newCount = count + 1;
        setCount( newCount );
        onCountChange && onCountChange( newCount );
    };

    const getCount = () => count;

    useImperativeHandle( ref, () => {
        return { getCount: getCount };
    } );

    return (
        <Stack direction="row" alignItems="center" spacing={ 1 } justifyContent="space-between" { ...props }>
            <IconButton variant="default" onClick={ handleDecrease }>
                <Minus color={ ColorStyles.Foundation.baseColor.black } size='16px' />
            </IconButton>
            <Typography variant="body19">{ count }</Typography>
            <IconButton variant="default" onClick={ handleIncrease }>
                <Plus color={ ColorStyles.Foundation.baseColor.black } size='16px' />
            </IconButton>
        </Stack>
    );
} );
export default AddcountCart;