import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const ProductItem = ( { product, ...props } ) => {
    return (
        // <Grid container className='product-item'>
        //     <Grid className='product-item-image' item xs={ 12 } md={ 12 } lg={ 12 }   >
        //         <Box>
        //             {
        //                 /* Show Image */
        //                 product.image === '' ? '' :
        //                     <Link href={ `/products/${ product.title }` }><Image src={ product.image } alt={ product.title } width={ 240 } height={ 155 } /></Link>
        //             }
        //         </Box>
        //     </Grid>
        //     <Grid className='product-item-infos' item xs={ 12 } md={ 12 } lg={ 12 }>
        //         <ProductItemInfo className='product-item-info' product={ product } />
        //     </Grid>
        // </Grid>
        <Box className='product-item'>
            <Link href={ `/products/${ product.title }` }>
                <Stack direction='column' className='product-item-image'>
                    <Image src={ product.image } alt={ product.title } width={ 240 } height={ 155 } />
                    <Box className='product-item-infos'>
                        {/* <ProductItemInfo className='product-item-info' product={ product } /> */ }
                        <Box className='product-item-info'>
                            <Typography variant='label21'>{ product.title }</Typography>
                            <Stack direction='row' alignItems='center' spacing={ 0.5 }>
                                <Typography variant="label19" paragraph>$20.50</Typography>
                                <span>-</span>
                                <Typography variant="label19" paragraph>$35.50</Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Stack>
            </Link>

        </Box>
    );
};

export default ProductItem;