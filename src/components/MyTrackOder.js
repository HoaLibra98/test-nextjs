import useForm from "@hooks/useForm";
import { Box, Button, Drawer, FormControl, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { CarInput } from "./CartInput/CartInput";

const MyTrackOder = ( { open, close } ) => {

    const { formRef, form, handleChange, hanldeBlur } = useForm( { number: "" }, { number: "" } );

    const router = useRouter();
    return (
        <>
            <Drawer
                anchor="right"
                open={ open }
                onClose={ () => close( false ) }
                className='drawer-slide-mytrack-order'
            >
                <Box component="form" noValidate ref={ formRef } className="my-track-order">
                    <Typography variant="h3">TRACK MY ORDER</Typography>
                    <FormControl fullWidth required={ true } className="custom-form-checkout-aguest">
                        <CarInput
                            placeholder="Your order number*"
                            name="number"
                            value={ form.number }
                            onChange={ handleChange }
                            onBlur={ hanldeBlur }
                        />
                    </FormControl>
                    <Stack direction="column" spacing={ 4 } mt={ 4 }>
                        <Button variant='btn-shopcart-1' onClick={ () => router.push( "/tracking-order" ) }>SUBMIT</Button>
                        <Typography variant="description7">For any other inquiries, <Link href="/faq">Click here</Link></Typography>
                    </Stack>
                </Box>
            </Drawer>
        </>
    );
};

export default MyTrackOder;