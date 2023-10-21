import { API_ADMIN_URL } from "@configs/constants";
import { wrapper } from "@configs/store";
import ProductDetail from "@elements/ProductDetail";
import { Box, Container } from "@mui/material";
import PropTypes from 'prop-types';

export const getServerSideProps = wrapper.getServerSideProps( store => async ( context ) => {
    const slug = context.query[ 'slug' ];
    const apiURL = `${ API_ADMIN_URL }/api/v1/product/${ slug }`;
    const fetchAPI = await fetch( apiURL );
    const response = await fetchAPI.json();
    // If data: null ==> Page Not Found
    if ( response.status === false || response.data === null || Object.keys( response.data ).length === 0 ) return { notFound: true };

    return {
        props: {
            content: response.data,
        }
    };
} );

function ProductPage( { content, ...props } ) {
    return (
        <Box>
            <Container maxWidth="lg" className={ `content-page-${ content.slug }` } sx={ { my: 16, padding: 0 } }>
                <Box className='block-item'>
                    <ProductDetail productDetail={ content } />
                </Box>
            </Container>
        </Box>
    );
};

ProductPage.propTypes = {
    content: PropTypes.object
};

ProductPage.layout = "Front";
export default ProductPage;