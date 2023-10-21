import { Box, Button, Divider, FormControl, IconButton, OutlinedInput, Stack, TableCell, Typography, useMediaQuery } from "@mui/material";
import { removeCartItem, updateProductsInCart } from "@slices/cart";
import { ColorStyles } from "@theme/Designs";
import { XCircle } from "feather-icons-react/build/IconComponents";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AddcountCart from "./AddcountCart";
import SvgIcon from "./SvgIcon";

const CartShopingItem = ( { cartShoppingItem, handleDeleteItem, handleDeleteMessage, key: keyItem } ) => {
    const dispatch = useDispatch();
    const [ newCount, setNewCount ] = useState( cartShoppingItem?.productCart?.quantity || 1 );
    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );
    const onChangeMesssage = ( e ) => {
        dispatch( updateProductsInCart( { ...cartShoppingItem?.productCart, message: e.target.value } ) );
    };

    const updateCountCartItem = ( count ) => {
        dispatch( updateProductsInCart( { ...cartShoppingItem?.productCart, quantity: count } ) );

    };

    useEffect( () => {
        if ( newCount === 0 ) {
            dispatch( removeCartItem( cartShoppingItem?.id ) );
        }
    }, [ newCount ] );

    if ( mdDown ) {
        return (
            <Box className="cart-shopping-mobile" key={ keyItem }>
                {
                    cartShoppingItem.image === "" ? "" :
                        <Image src={ cartShoppingItem.image } alt={ cartShoppingItem.name } width={ 128 } height={ 112 } />
                }
                <Box className="cart-shopping-info">
                    <Box sx={ { marginBottom: '8px' } }>
                        <Box className="cart-shopping-info-item" sx={ { marginBottom: '8px' } }>
                            <Typography variant='title4'>{ cartShoppingItem.name }</Typography>
                        </Box>
                        <Box>
                            {
                                ( cartShoppingItem.variations || [] ).map( ( e, iD ) => {
                                    const key = Object.keys( e )[ 0 ];
                                    const value = e[ key ];
                                    return (
                                        <Box key={ `variations-cart-${ iD }` }>
                                            <Typography variant='blog-date'>{ iD !== 0 && ", " } { key }: { " " }</Typography>
                                            <Typography variant='blog-date' fontWeight={ 700 } color={ "#26231E" }>{ value }</Typography>
                                        </Box>
                                    );
                                } )
                            }
                        </Box>
                    </Box>
                    <Box sx={ { display: 'flex' } }>
                        <FormControl variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                sx={ { width: '100%', height: '32px', padding: 0 } }
                                endAdornment={ <IconButton sx={ { width: '32px', height: '32px' } }><SvgIcon icon="pencilSimpleLine" /></IconButton> }
                                value={ cartShoppingItem.note || '' }
                                placeholder="Put your message"
                                onChange={ onChangeMesssage }
                                disabled={ cartShoppingItem.disableMessage }
                            />
                        </FormControl>
                        <IconButton sx={ { marginLeft: '8px', width: '32px', height: '32px' } } onClick={ () => handleDeleteMessage( cartShoppingItem ) }><SvgIcon icon="trash" /></IconButton>
                    </Box>
                </Box>
                <Box className="divider"><Divider /></Box>
                <Typography variant='body' className="price-cart">Price: ${ cartShoppingItem.price }</Typography>
                <Box className="divider2"><Divider /></Box>
                <Typography variant='h5' className="price-cart">Total: ${ cartShoppingItem.price * newCount }</Typography>
                <Box className="count-item-cart-mobile">
                    <Stack direction="row" justifyContent="space-between" alignItems="center" className="setting-count-shopping" >
                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={ 2 } className="setting-count-shopping-extra">
                            <AddcountCart className="count-item-cart" minCount={ 0 } onCountChange={ ( newCount ) => { updateCountCartItem( newCount ); setNewCount( newCount ); } } />
                        </Stack>
                    </Stack>
                    <Button onClick={ () => handleDeleteItem( cartShoppingItem ) }>Remove</Button>
                </Box>
            </Box>
        );
    }
    return (
        <>
            <TableCell sx={ { display: 'flex' } }>
                {
                    !cartShoppingItem.image ? "" :
                        <Image src={ cartShoppingItem.image } alt={ cartShoppingItem.name } width={ 128 } height={ 112 } />
                }
                <Box className="cart-shopping-info">
                    <Box>
                        <Box className="cart-shopping-info-item" sx={ { marginBottom: '8px' } }>
                            <Typography variant='title4'>{ cartShoppingItem.name }</Typography>
                        </Box>
                        <Box>
                            {
                                ( cartShoppingItem.variations || [] ).map( ( e, iD ) => {
                                    const key = Object.keys( e )[ 0 ];
                                    const value = e[ key ];
                                    return (
                                        <Box key={ `variations-cart-${ iD }` }>
                                            <Typography variant='blog-date'>{ iD !== 0 && ", " } { key }: { " " }</Typography>
                                            <Typography variant='blog-date' fontWeight={ 700 } color={ "#26231E" }>{ value }</Typography>
                                        </Box>
                                    );
                                } )
                            }
                        </Box>
                    </Box>
                    <Box sx={ { display: 'flex' } }>
                        <FormControl variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                sx={ { width: '100%', height: '32px', padding: 0 } }
                                endAdornment={ <IconButton sx={ { width: '32px', height: '32px' } }><SvgIcon icon="pencilSimpleLine" /></IconButton> }
                                value={ cartShoppingItem.note }
                                placeholder="Put your message"
                                onChange={ onChangeMesssage }
                                disabled={ cartShoppingItem.disableMessage }
                            />
                        </FormControl>
                        <IconButton sx={ { marginLeft: '8px', width: '32px', height: '32px' } } onClick={ () => handleDeleteMessage( cartShoppingItem ) }><SvgIcon icon="trash" /></IconButton>
                    </Box>
                </Box>
            </TableCell>
            <TableCell><Typography variant='h5' className="price-cart">${ cartShoppingItem?.price || 0 }</Typography></TableCell>
            <TableCell>
                <Stack direction="row" justifyContent="space-between" alignItems="center" className="setting-count-shopping" >
                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={ 2 } className="setting-count-shopping-extra">
                        <AddcountCart className="count-item-cart" minCount={ 0 } onCountChange={ ( newCount ) => { updateCountCartItem( newCount ); setNewCount( newCount ); } } />
                    </Stack>
                </Stack>
            </TableCell>
            <TableCell><Typography variant='h5' className="price-cart">${ ( cartShoppingItem.price || 0 ) * newCount }</Typography></TableCell>
            <TableCell><IconButton onClick={ () => handleDeleteItem( cartShoppingItem ) }>
                <XCircle size={ 25 } color={ ColorStyles.Foundation.Black[ 700 ] } />
            </IconButton></TableCell>
        </>
    );
};

export default CartShopingItem;