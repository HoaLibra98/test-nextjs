import Popup from "@elements/Popup";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import CarIcon from "./CarIcon";
import SvgIcon from "./SvgIcon";

const PopupAddCart = ( { openAddCart, setOpenAddCart, ...props } ) => {
    const isMobile = useMediaQuery( ( theme ) => theme.breakpoints.down( 'md' ) );
    // const [ openAddCart, setOpenAddCart ] = useState( false );

    const handleOpenAddCart = () => {
        setOpenAddCart( true );
    };

    const handleCloseAddCart = ( event, reason ) => {
        if ( reason !== 'backdropClick' ) {
            setOpenAddCart( false );
        }
    };

    return (
        <>
            <Button { ...props } type="submit"
            // onClick={ handleOpenAddCart }
            >
                <CarIcon name='shopping-cart' size='20' />
                <Typography variant="body19">Add to cart</Typography>
            </Button>
            <Popup open={ openAddCart } handleClose={ handleCloseAddCart } className="Dialog-popup popup-cart">
                <Stack direction='column' spacing={ 4 } className="popup-add-cart">
                    <Box className="add-cart-succsess">
                        <Stack direction={ isMobile ? 'column' : "row" } spacing={ 2 }>
                            <SvgIcon icon="check-icon" />
                            <Box>
                                <Typography variant="lable8" paragraph mb={ 0 }>Successfully added to cart</Typography>
                                <Typography variant="label20">You have successfully added 1 SweetCake - #HN0123 - Chocolate Drip Cake</Typography>
                            </Box>
                        </Stack>
                    </Box>
                    <Stack direction={ isMobile ? 'column' : "row" } spacing={ 3 } justifyContent='end' className="popup-btn">
                        <Button variant="btn-shopcart-1" className="btn-continue" onClick={ handleCloseAddCart }>
                            <Typography variant="body19">Continue Shopping</Typography>
                        </Button>
                        <Link href="/checkout">
                            <Button variant="btn-shopcart-1" className="btn-checkout-product" >
                                <Typography variant="lable4">Check Out</Typography>
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Popup>
        </>
    );
};

export default PopupAddCart;