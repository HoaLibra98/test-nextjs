import AddcountCart from "@components/AddcountCart";
import CarIcon from "@components/CarIcon";
import CarInputCheckbox from "@components/CartInput/CarInputCheckbox";
import PopupAddCart from "@components/PopupAddCart";
import ProductItemServices from "@components/ProductItemServices";
import ProductSelect from "@components/productDetail/ProductSelect";
import { Box, FormControl, Grid, Stack, TextareaAutosize, Typography, useMediaQuery } from "@mui/material";
import { updateProductsInCart } from "@slices/cart";
import { selectorEmptyField, setEmptyField } from "@slices/product";
import { getFormData } from "@utils/forms";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import ReactHtmlParser from 'react-html-parser';
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ProductDetail = ( { productDetail } ) => {
    const router = useRouter();
    console.log( 'productDetail: ', productDetail );

    const isMobile = useMediaQuery( ( theme ) => theme.breakpoints.down( 'sm' ) );
    const formRef = useRef( null );
    const addCountCart = useRef( null );
    const dispatch = useDispatch();

    const [ message, setMessage ] = useState( '' );
    const handleChangeMess = ( event ) => {
        if ( event.target.value.length <= 30 ) {
            setMessage( event.target.value );
        }
    };

    const [ isCheckbox, setIsCheckbox ] = useState( false );
    const handleCheckbox = ( event ) => {
        setIsCheckbox( !isCheckbox );
        setMessage( '' );
    };

    const charactersLimit = 30;

    const [ productPrice, setProductPrice ] = useState( productDetail.price );

    const [ openAddCart, setOpenAddCart ] = useState( false );
    const valueField = useSelector( selectorEmptyField );
    // const isNotValue = Object.values( valueField ).some( value => value !== '' );

    const variations = JSON.parse( productDetail.variations ?? '[]' );
    const attributes = JSON.parse( productDetail.attributes ?? '[]' );
    const prices = variations.length > 0 ? variations.map( variation => variation.regular_price || 0 ).filter( price => price !== 0 ) : [];


    const handleSubmit = ( event ) => {
        event.preventDefault();
        const data = getFormData( event.currentTarget );
        const emptyField = Object.values( data ).every( value => value !== '' );
        if ( emptyField ) {
            setOpenAddCart( true );
            dispatch( setEmptyField( data ) );
            const variations = convertVariations( attributes, data );
            const quantity = addCountCart.current && addCountCart?.current?.getCount();
            dispatch( updateProductsInCart( { variations, message: data?.Messages, disableMessage: !!data?.Checkbox, quantity, id: productDetail.id, price: productPrice } ) );
        } else {
            dispatch( setEmptyField( data ) );
        }
    };

    const convertVariations = ( attributes, form ) => {
        const variations = attributes.reduce( ( arr, cur ) => {
            const options = cur.value || [];
            const value = options[ Number( form[ cur.name ] ) ];
            return ( [ ...arr, {
                [ `${ cur.name?.toLowerCase() }` ]: value
            } ] );
        }, [] );
        return variations;
    };


    return (
        <Grid container spacing={ 3 } mb={ 8 } className="product-detail">
            <Grid item xs={ 12 } sm={ 7 } className="product-detail-title">
                <Stack direction="column" spacing={ 0.5 } mb={ 2 }>
                    <Typography variant="title8">{ productDetail.name }</Typography>
                    <Typography variant="description12">{ ReactHtmlParser( productDetail.description ) }</Typography>
                    <Box className="product-detail-badges">
                        {
                            productDetail.categories.length > 0 && productDetail.categories.map( ( item, index ) => {
                                return (
                                    <Stack direction='row' alignItems='center' spacing={ 0.5 } key={ `product-detail-badges-${ index }` }>
                                        <Typography variant="lable15">{ item.name }</Typography>
                                    </Stack>
                                );
                            } )
                        }
                    </Box>
                </Stack>

                <Typography variant="lable16" paragraph mb={ 2 }>{ productDetail.sharp }</Typography>

                <Box className="price">
                    <Typography variant="lable17" paragraph>{ productPrice }</Typography>
                </Box>

                <ProductItemServices productDetail={ productDetail } className="list-item-service-detail" />

                <Box ref={ formRef } onSubmit={ handleSubmit } component='form' noValidate>
                    {/* ====ProductSelect ====== */ }
                    <ProductSelect productDetail={ productDetail } setProductPrice={ setProductPrice } />

                    {/* messages */ }
                    <Box my={ 3 } className="product-detail-message">
                        <Typography variant="label19" paragraph mb={ 0.5 }>Messages</Typography>
                        <FormControl fullWidth required={ true }>
                            <TextareaAutosize
                                name='Messages'
                                placeholder="This message will be written on your cake"
                                minRows={ 2 }
                                value={ message }
                                onChange={ handleChangeMess }
                                className={ `message-textarea message-textarea-${ message.length > 0 ? 'bordered' : ( valueField[ 'Messages' ] === '' && !isCheckbox ) ? 'error' : '' }` }
                                disabled={ isCheckbox }
                            />
                            <Typography variant="label20">{ message.length }/{ charactersLimit }</Typography>
                        </FormControl>
                        <CarInputCheckbox
                            name="Checkbox"
                            options={ '' }
                            defaultValue=''
                            onChange={ handleCheckbox }
                        />
                    </Box>

                    {/* ===Notice=== */ }
                    <Box className="product-detail-notice">
                        <Typography variant="label19">Allergen Notice:</Typography>
                        <Stack direction='row' spacing={ 2 }>
                            {
                                productDetail.allergen.map( ( item, index ) => (
                                    <Box key={ `notice-${ index }` }>
                                        <Typography variant="label19">{ item }</Typography>
                                        {/* <SvgIcon icon={ item.icon } /> */ }
                                        <CarIcon name='Nut' size={ 24 } />
                                    </Box>
                                ) )
                            }
                        </Stack>
                    </Box>

                    {/* ====Add To Cart ====== */ }
                    <Stack direction="row" alignItems="center" spacing={ 3 } pt={ 4 } className="add-to-cart">
                        <AddcountCart className="count-item-cart" ref={ addCountCart } />
                        <PopupAddCart variant="btn-shopcart-1" className="btn-shop-cart" openAddCart={ openAddCart } setOpenAddCart={ setOpenAddCart } />
                    </Stack>
                </Box>
            </Grid>
        </Grid>
    );
};
export default ProductDetail;