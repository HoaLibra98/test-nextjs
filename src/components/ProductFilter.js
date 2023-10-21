import DrawerFilter from '@elements/DrawerFilter';
import { Box, Button, ButtonGroup, Popper, Stack, Typography } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import { ChevronDown, ChevronUp } from 'feather-icons-react/build/IconComponents';
import { useState } from 'react';
import ShopingCartIcon from './ShopingCartIcon';

const ProductFilter = () => {
    const [ sort, setSort ] = useState( null );

    const handleClickFilter = ( e ) => {
        setFilter( filter ? null : e.currentTarget );
    };

    const handleClickSort = ( e ) => {
        setSort( sort ? null : e.currentTarget );
    };

    const opensort = Boolean( sort );

    const id = open ? 'simple-popper' : undefined;

    const [ openFilter, setopenFilter ] = useState( false );
    const toggleFilter = event => {
        setopenFilter( !openFilter );
    };

    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between" className='product-filter' >
            <Box>
                <Button variant='btn-filter-style1' startIcon={ <ShopingCartIcon icon="filter" strokeWidth="1px" /> } onClick={ toggleFilter }>
                    <Typography variant='body3'>FILTER BY</Typography>
                </Button>
                <DrawerFilter open={ openFilter } toggleFilter={ toggleFilter } />
            </Box>
            <Box>
                <Button onClick={ handleClickSort }
                    endIcon={ opensort ? <ChevronUp color={ ColorStyles.Foundation.baseColor.black } />
                        : <ChevronDown color={ ColorStyles.Foundation.baseColor.black } /> }>
                    <Typography variant='body3'>SORT BY</Typography>
                </Button>
                <Popper
                    id={ id }
                    open={ opensort }
                    anchorEl={ sort }
                >
                    <Box sx={ { border: 1, p: 1, bgcolor: 'background.paper' } }>
                        <Stack direction="column" spacing={ 1 } alignItems="center">
                            <ButtonGroup
                                orientation="vertical"

                            >
                                <Button>
                                    <Typography variant='body5'>price from low to high</Typography>
                                </Button>
                                <Button>
                                    <Typography variant='body5'>price from high to low</Typography>
                                </Button>
                            </ButtonGroup>
                        </Stack>
                    </Box>
                </Popper>
            </Box>
        </Stack>

    );
};

export default ProductFilter;