import BlockTitle from '@components/BlockTitle';
import ProductItem from '@components/ProductItem';
import SliderSlick from '@components/SlickSlider';
import { product } from '@data/homePage';
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material';
import breakpoints from '@theme/Breakpoints';
import { useState } from 'react';
// import PropTypes from 'prop-types';

const AlsoLike = ( { module, options } ) => {
    const isMobile = useMediaQuery( ( theme ) => theme.breakpoints.down( 'md' ) );
    const [ loadMore, setLoadMore ] = useState( 4 );
    const handleLoadMore = () => {
        setLoadMore( product.length );
    };

    const settings = {
        className: "slick-product-item",
        slidesToShow: 4,
        dots: false,
        responsive: [
            {
                breakpoint: breakpoints.values.md,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: breakpoints.values.sm,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <Box className='block-item' sx={ { backgroundColor: '#F6F0E5', paddingTop: 6 } }>
            <BlockTitle text="YOU MAY ALSO LIKE" className="title-customer" />
            {/* <SlickProductsFavourites product={ product } /> */ }
            {
                !isMobile ? (
                    <SliderSlick settings={ settings } slickSlider="slick-product" className="arows-items-default">
                        {
                            product.map( ( item, index ) => (
                                <ProductItem product={ item } key={ `slick-product-${ index }` } />
                            ) )
                        }
                    </SliderSlick>
                ) : (
                    <Stack direction='column' alignItems='center' pb={ 6 } spacing={ 3 } className='block-module'>
                        {
                            product.slice( 0, loadMore ).map( ( item, index ) => (
                                <ProductItem product={ item } key={ `slick-product-${ index }` } />
                            ) )
                        }
                        {
                            loadMore < product.length && (
                                <Button variant="default" onClick={ handleLoadMore }>
                                    <Typography variant='body19'>Load More</Typography>
                                </Button>
                            )
                        }
                    </Stack>
                )
            }
        </Box>
    );
};

export default AlsoLike;