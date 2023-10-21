import { API_ADMIN_URL } from "@configs/constants";
import { Box, Button, Drawer, Fab, Stack, Typography } from "@mui/material";
import { removeCartItem, selectorProductsInCart } from "@slices/cart";
import { setClose, setOpen } from "@slices/popup";
import { ColorStyles } from "@theme/Designs";
import { Trash2, X } from "feather-icons-react/build/IconComponents";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MiniCartPopup = ( { setOpenMiniCart, openMiniCart, setOpenLogin, openLogin } ) => {
    const router = useRouter();
    const productsInCart = useSelector( selectorProductsInCart );
    const modalConfirmRef = useRef();
    const dispatch = useDispatch();

    const { data: session, status } = useSession();
    const [ products, setProducts ] = useState( [] );
    let totalPrice = 0;

    const checkoutPage = () => {
        if ( status === 'unauthenticated' ) {
            setOpenLogin( true );
        } else {
            router.push( '/checkout' );
        }
    };

    useEffect( () => {
        if ( productsInCart ) {
            getProducts();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ productsInCart ] );

    const getProducts = async () => {
        const apiURL = `${ API_ADMIN_URL }/api/v1/products`;
        const fetchAPI = await fetch( apiURL );
        const response = await fetchAPI.json();
        console.log( 'response', response );
        const list = ( response?.data || [] )
            .map( ( item ) => {
                const productCart = ( productsInCart || [] )?.find( ( e ) => e.id === item.id );
                if ( !productCart ) {
                    return null;
                }
                totalPrice += Number( productCart?.price?.split( ' ' )[ 0 ] );

                return {
                    ...item,
                    variations: productCart?.variations || [],
                    image: `${ API_ADMIN_URL }${ item?.thumbnail }`,
                    note: productCart?.messages,
                    price: productCart?.price,
                    productCart,
                };
            } )
            .filter( ( item ) => item );
        setProducts( list );
    };

    const handleActionDelete = async ( shoppingCartItem ) => {
        // modalConfirmRef.current.setText( { title: 'Are you sure to remove this product?', cancel: 'No, Keep It', confirm: 'Yes, Remove It' } );
        // modalConfirmRef.current.open( () => {
        //     dispatch( removeCartItem( shoppingCartItem?.id ) );
        // } );
        dispatch( setOpen( {
            title: 'Alert',
            inputs: 'Are you sure to remove this product?',
            icon: 'x-circle',
            buttons: {
                close: {
                    label: 'Remove this cake',
                    type: 'button',
                    variant: 'btn-shop-2',
                    onClick: async () => {
                        dispatch( removeCartItem( shoppingCartItem?.id ) );
                        dispatch( setClose() );
                    }
                },
                submit: {
                    label: 'Keep this cake',
                    type: 'button',
                    variant: 'btn-shopcart-2',
                    onClick: () => dispatch( setClose() )
                }
            }
        } ) );
    };

    return (
        <>
            <Drawer
                anchor="right"
                open={ openMiniCart }
                onClose={ () => setOpenMiniCart( false ) }
                className='drawer-slide-mini-cart'
            >
                <Box className="content-mini-cart">
                    <Box className="Notification-header">
                        <Typography variant="title5">{ `Shopping Cart (${ productsInCart?.length || 0 })` }</Typography>
                        <X color={ ColorStyles.Foundation.baseColor.white } size={ 48 } strokeWidth="2px" onClick={ () => setOpenMiniCart( false ) } />
                    </Box>
                    <Box className="mini-cart-list">
                        { products.map( ( item, index ) => (
                            <Box className="mini-cart-list-item" key={ `list-order-mini-cart-${ index }` }>
                                <Stack direction="row" alignItems="center" spacing={ 2.5 }>
                                    <Box className="image-cart">
                                        <Image src={ item.image } alt={ item.name } width={ 138 } height={ 100 } />
                                    </Box>
                                    <Box className="cart-detail">
                                        <Box className="cart-detail-text">
                                            <Typography variant='title4'>{ item.name }</Typography>
                                            <Box>
                                                {
                                                    ( item.variations || [] ).map( ( e, iD ) => {
                                                        const key = Object.keys( e )[ 0 ];
                                                        const value = e[ key ];
                                                        return (
                                                            <Box key={ `variations-cart-${ iD }` } style={ { display: 'inline-block' } }>
                                                                <Typography variant='blog-date'>{ iD !== 0 && ", " } { key }: { " " }</Typography>
                                                                <Typography variant='blog-date' fontWeight={ 700 } color={ "#26231E" }>{ value }</Typography>
                                                            </Box>
                                                        );
                                                    } )
                                                }
                                            </Box>
                                        </Box>
                                        <Box className="cart-detail-total">
                                            <Typography variant='h5' className="price-cart">{ item.price }</Typography>
                                            <Fab className='social-action' onClick={ () => handleActionDelete() }>
                                                <Trash2 color={ ColorStyles.Foundation.baseColor.black } size={ 20 } />
                                            </Fab>
                                        </Box>
                                    </Box>
                                </Stack>
                            </Box>
                        ) ) }
                    </Box>
                    <Box className="checkout">
                        <Box className='total-price'>
                            <Box className='total-price-item'>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant='body10'>Total:</Typography>
                                    <Typography variant='body11'>{ productsInCart?.length ? ( productsInCart[ 0 ].price || '' )?.replace( Number( productsInCart[ 0 ].price ), totalPrice ) : 0 }</Typography>
                                </Stack>
                            </Box>
                        </Box>
                        <Stack direction="column" gap={ 2 } alignItems="center">
                            <Button variant='btn-shopcart-1' onClick={ checkoutPage }>PROCEED TO CHECKOUT</Button>
                            <Link href="/cart">
                                <Button variant='btn-shop-2'><Typography variant='title-button'>VIEW CART</Typography></Button>
                            </Link>
                        </Stack>
                    </Box>
                </Box>
            </Drawer>
        </>

    );
};

export default MiniCartPopup;