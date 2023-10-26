"use client";
import { submitSubscribe } from "@/queries/subscribe";
import {
    Alert,
    Box,
    Container,
    Grid,
    Snackbar,
    TextField,
    Typography
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ItemLink = ( { text, link, target } ) => {
    const pathname = usePathname();
    return (
        <Box>
            <Link
                target={ target }
                href={ link }
                style={ {
                    fontSize: "16px",
                    textDecorationLine: "none",
                    color: pathname === link ? "#AE7461" : "#151515",
                } }

            >
                { text }
            </Link>
        </Box>
    );
};
const Footer = () => {
    const [ open, setOpen ] = useState( false );
    const [ messageContact, setMesssageContact ] = useState( "" );
    const [ email, setEmail ] = useState( "" );

    const onSubmit = async () => {
        if ( !email || !validateEmail( email ) ) {
            return;
        }
        const data = await submitSubscribe( { email } );
        setMesssageContact( data?.message );
        setOpen( true );
        setEmail( "" );
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
        <Box bgcolor={ "#EAE1B2" } pt={ "60px" }>
            <Container>
                <Grid container spacing={ 2 }>
                    <Grid item xs={ 12 } sm={ 5 } mb={ "40px" }>
                        <div>
                            <Typography
                                fontSize={ "40px" }
                                fontWeight={ 700 }
                                color="#151515"
                                mb={ "30px" }
                            >
                                Keep in touch
                            </Typography>
                            <Box mb={ "24px" } display={ "inline-block" } position={ "relative" }>
                                <Box bgcolor={ "transparent !important" }>
                                    <TextField
                                        required
                                        variant="standard"
                                        placeholder="EMAIL ADDRESS"
                                        value={ email }
                                        onChange={ ( e ) => setEmail( e.target.value ) }
                                        style={ {
                                            backgroundColor: "transparent !important",
                                        } }
                                        inputProps={ {
                                            style: {
                                                backgroundColor: "transparent !important",
                                                color: "black",
                                                paddingBottom: "10px !important",
                                            },
                                        } }
                                    />
                                    <div>
                                        { email && !validateEmail( email ) && (
                                            <span

                                                style={ {
                                                    color: "red",
                                                    fontSize: "12px",
                                                } }
                                            >
                                                { "Email is inValid" }
                                            </span>
                                        ) }
                                    </div>
                                </Box>
                                <div
                                    style={ {
                                        position: "absolute",
                                        right: "-10px",
                                        zIndex: 10,
                                        top: 0,
                                    } }
                                >
                                    <Image
                                        onClick={ () => onSubmit() }
                                        src={ require( "@/assets/icon/arrow-right.png" ) }
                                        width={ 24 }
                                        height={ 24 }
                                    />
                                </div>
                            </Box>
                            <Typography
                                fontSize={ "25px" }
                                fontWeight={ 700 }
                                color="#151515"

                            >
                                Follow Us
                            </Typography>

                            <Box display={ "flex" } gap={ "12px" } mt={ "12px" }>
                                <Link href={ "https://www.24h.com.vn/" } target="_blank">
                                    <Image
                                        src={ require( "@/assets/icon/ic_fb.png" ) }
                                        width={ 48 }
                                        height={ 48 }
                                    />
                                </Link>

                                <Link href={ "https://www.24h.com.vn/" } target="_blank">
                                    <Image
                                        src={ require( "@/assets/icon/ic_twitter.png" ) }
                                        width={ 48 }
                                        height={ 48 }
                                    />
                                </Link>
                                <Link href={ "https://www.24h.com.vn/" } target="_blank">
                                    <Image
                                        src={ require( "@/assets/icon/ic_instagram.png" ) }
                                        width={ 48 }
                                        height={ 48 }
                                    />
                                </Link>
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 7 }>
                        <Grid container>
                            <Grid item xs={ 12 } sm={ 6 } mb={ "40px" }>
                                <div>
                                    <Typography
                                        fontSize={ "20px" }
                                        fontWeight={ 500 }
                                        color="#151515"

                                        mb={ "40px" }
                                    >
                                        COLLECTION
                                    </Typography>
                                    <ItemLink text="Home" link="/" />
                                    <ItemLink text="Cakes" link="/cake" />
                                    <ItemLink text="Order Online" link="/order-online" />
                                    <ItemLink text="About Us" link="/about-us" />
                                    <ItemLink text="Media" link="/media" />
                                    <ItemLink text="Contact" link="/contact" />
                                </div>
                            </Grid>
                            <Grid item xs={ 12 } sm={ 6 } mb={ "40px" }>
                                <div>
                                    <Typography
                                        fontSize={ "20px" }
                                        fontWeight={ 500 }

                                        mb={ "40px" }
                                    >
                                        OUR TERMS & CONDITIONS
                                    </Typography>

                                    <ItemLink
                                        text="Our terms of delivery"
                                        link="/terms-delivery"
                                    />
                                    <ItemLink text="Terms of sale" link="/sale" />
                                    <ItemLink text="Privacy policy" link="/policy" />
                                    <ItemLink text="Delivery Policy" link="/delivery" />
                                    <ItemLink text="FAQ" link="/faq" />
                                </div>
                            </Grid>
                        </Grid>
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

export default Footer;
