"use client";
import { submitContact } from "@/queries/contact";
import {
    Alert,
    Box,
    Button,
    Container,
    Grid,
    Snackbar,
    Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import InputText from "../inputText";
import TitlePage from "../titlePage";

const Contact = ( props ) => {
    const [ open, setOpen ] = useState( false );
    const [ messageContact, setMesssageContact ] = useState( "" );
    const [ isSubmit, setIsSubmit ] = useState( false );
    const [ name, setName ] = useState( "" );
    const [ phone, setPhone ] = useState( "" );
    const [ email, setEmail ] = useState( "" );
    const [ message, setMessage ] = useState( "" );

    const onSubmit = async () => {
        if ( !name || !phone || !email || ( email && !validateEmail( email ) ) ) {
            setIsSubmit( true );
            return;
        }
        const data = await submitContact( { name, phone, email, message } );
        setMesssageContact( data?.message );
        setOpen( true );
        setName( "" );
        setPhone( "" );
        setEmail( "" );
        setMessage( "" );
    };

    const handleClose = ( event, reason ) => {
        if ( reason === "clickaway" ) {
            return;
        }

        setOpen( false );
    };

    const validateEmail = ( email ) => {
        if ( !email ) return true;
        return email.match( /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i );
    };
    return (
        <Box
            paddingBottom={ { xs: "60px" } }
            bgcolor={ { xs: "transparent", sm: "#F6F0E5" } }
        >
            <Container>
                <TitlePage title="CONTACT US" />
                <Grid
                    container
                    display={ "flex" }
                    flexDirection={ { xs: "column-reverse", sm: "row" } }
                >
                    <Grid item xs={ 12 } sm={ 4 }>
                        <Box>
                            <Typography fontSize="20px" color="#121212" fontWeight={ 700 }>
                                <span>Get in touch</span>
                            </Typography>
                            <Typography
                                fontSize="14px"
                                color="#827E78"
                                fontWeight={ 400 }
                                pb={ "24px" }
                            >
                                <span>
                                    In publishing and graphic design, Lorem ipsum is a placeholder
                                    text commonly used to demonstrate.
                                </span>
                            </Typography>
                            <InputText
                                label={ "Name" }
                                placeholder="Your Name"
                                require
                                value={ name }
                                onChange={ ( value ) => setName( value ) }
                                error={ isSubmit && !name }
                            />
                            <InputText
                                label={ "Phone" }
                                placeholder="___-___-___"
                                require
                                value={ phone }
                                onChange={ ( value ) => setPhone( value ) }
                                type="phone"
                                error={ isSubmit && !phone }
                            />
                            <InputText
                                label={ "Email" }
                                placeholder="Email"
                                require
                                value={ email }
                                onChange={ ( value ) => setEmail( value ) }
                                error={
                                    ( isSubmit && !email ) ||
                                    ( isSubmit && email && !validateEmail( email ) )
                                }
                                isEmail={ !validateEmail( email ) }
                            />
                            <InputText
                                label={ "Message" }
                                placeholder="Feedback/ Question"
                                multiline={ true }
                                rows={ 4 }
                                value={ message }
                                onChange={ ( value ) => setMessage( value ) }
                            />
                        </Box>
                        <Button
                            onClick={ () => {
                                onSubmit();
                            } }
                            style={ {
                                color: "#FFFFFF",
                                backgroundColor: "#26231E",
                            } }
                        >
                            Submit
                        </Button>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 8 } marginBottom={ { xs: "24px", sm: 0 } }>
                        <Image
                            src={ require( "@/assets/icon/contact.png" ) }
                            width={ "100%" }
                            style={ {
                                maxWidth: "100%",
                                height: "auto",
                            } }
                        />
                    </Grid>
                </Grid>
            </Container>
            <Snackbar open={ open } autoHideDuration={ 6000 } onClose={ handleClose }>
                <Alert onClose={ handleClose } severity="success" sx={ { width: "100%" } }>
                    { messageContact || "Thank you for your contact." }
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact;
