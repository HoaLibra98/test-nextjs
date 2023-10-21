import { CarInput } from '@components/CartInput/CartInput';
import { CarInputMask } from '@components/CartInput/CartInputMask';
import useForm from '@hooks/useForm';
import { Box, Container, FormControl, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import PropTypes from 'prop-types';

function Contact( { module, options } ) {

    const { formRef, form, valid, handleChange, hanldeBlur } = useForm(
        { firstname: "", lastname: "", email: "", phone: "", message: "" },
        { firstname: true, lastname: true, email: true, phone: true, message: true }
    );

    const mdDown = useMediaQuery( ( theme ) => theme.breakpoints.down( 'md' ) );

    return (
        <Container>
            <Grid container spacing={ 3 } py={ 8 } className="contact">
                <Grid className="gridItemContact" item justifyContent="center" xs={ 12 } lg={ 6 } >
                    <Typography variant="title6">
                        { module.data.title }
                    </Typography>
                    <Box component='form' noValidate py={ 4 }>
                        <Box display="flex" sx={ { flexDirection: { xs: "column", lg: "row" }, gap: { xs: 0, lg: "24px" } } } >
                            <FormControl fullWidth required={ true } sx={ { mb: 2 } } >
                                <CarInput
                                    name="firstname"
                                    placeholder='firstname'
                                    label="Firs name"
                                    value={ form.firstname }
                                    onChange={ handleChange }
                                    onBlur={ hanldeBlur }
                                    size='small'
                                />
                            </FormControl>
                            <FormControl fullWidth required={ true } sx={ { mb: 2 } }>
                                <CarInput
                                    name="lastname"
                                    label="Last name"
                                    placeholder='lastname'
                                    value={ form.lastname }
                                    onChange={ handleChange }
                                    onBlur={ hanldeBlur }
                                    size='small'
                                />
                            </FormControl>
                        </Box>
                        <FormControl fullWidth sx={ { mb: 3 } } required={ true }>
                            <CarInput
                                label="Email"
                                placeholder="Enter your email"
                                name="email"
                                rules={ {
                                    empty: "Your email not empty.",
                                    email: "Your email not valid.",
                                } }
                                value={ form.email }
                                onChange={ handleChange }
                                onBlur={ hanldeBlur }
                            />
                        </FormControl>
                        <FormControl fullWidth sx={ { mb: 3 } } required={ true }>
                            <CarInputMask
                                label="Phone"
                                name="phone"
                                placeholder="Enter your phone"
                                mask="999-999-9999"
                                maskChar="_"
                                rules={ {
                                    empty: "Your phone not empty.",
                                    phone: "Your phone not valid.",
                                } }
                                onChange={ handleChange }
                                onBlur={ hanldeBlur }
                                value={ form.phone }
                            />
                        </FormControl>
                        <FormControl fullWidth required={ true } sx={ { mb: 2 } }>
                            <CarInput
                                name="message"
                                label="Message"
                                placeholder="message"
                                value={ form.message }
                                onChange={ handleChange }
                                onBlur={ hanldeBlur }
                                multiline
                                rows={ 4 }
                            />
                        </FormControl>
                    </Box>
                    {/* <FormContact /> */ }
                </Grid>
                <Grid item xs={ 12 } lg={ 6 } textAlign={ "center" }>
                    { !mdDown && <Box className="banner-home"><Image src="/image/contact.png" alt="" width={ 720 } height={ 800 } /></Box> }
                </Grid>
            </Grid>
        </Container>
    );
}

Contact.propTypes = {
    module: PropTypes.object,
    options: PropTypes.object
};

export default Contact

