import CarIcon from "@components/CarIcon";
import { CarInput } from "@components/CartInput/CartInput";
import { Box, Button, Chip, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography, experimentalStyled, useMediaQuery } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import { MediaBreakpoints, Theme } from "@theme/MediaBreakpoints";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ModuleConnectWith = experimentalStyled( Box )( ( { theme } ) => ( {
    '.connectWith-container': {
        padding: '128px 0',
        [ MediaBreakpoints( Theme.down.md ) ]: {
            padding: '64px 0',
        },
        '.connectWith-title': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 64,
            '.MuiStack-root': {
                width: 684,
                textAlign: 'center',
                alignItems: 'center',
                '.MuiTypography-description6': {
                    width: 588,
                    color: ColorStyles.gray[ 500 ],
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        width: '100%',
                    },
                }
            },
        },
        '.connectWith-contact': {
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            '.MuiBox-root': {
                '.MuiStack-root': {
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 32,
                    gap: 12,
                    '.MuiBox-root': {
                        '&:first-of-type': {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 48,
                            height: 48,
                            borderRadius: 100,
                            backgroundColor: '#E6F6ED',
                            padding: 12,
                        },
                        p: {
                            marginBottom: 0
                        }
                    },
                    '&:first-of-type': {
                        '.MuiBox-root': {
                            '&:first-of-type': {
                                backgroundColor: '#FEF4E6',
                            }
                        }
                    },
                    '&:last-child': {
                        '.MuiBox-root': {
                            '&:first-of-type': {
                                backgroundColor: '#FEECEB',
                            }
                        }
                    },
                },
            }
        },
        '.connectWith-form': {
            '.MuiFormControl-root': {
                marginBottom: 26,
                [ MediaBreakpoints( Theme.up.sm ) ]: {
                    '&:nth-of-type(1)': {
                        width: '50%',
                        paddingRight: 32,
                    },
                    '&:nth-of-type(2)': {
                        width: '50%',
                    },
                    '&:nth-of-type(3)': {
                        width: '50%',
                        paddingRight: 32,
                    },
                    '&:nth-of-type(4)': {
                        width: '50%',
                    },
                },
                '.MuiInputBase-root': {
                    borderRadius: 4,
                    border: `1px solid #98A0AD`,
                },
                '.MuiInputLabel-shrink': {
                    display: 'none'
                }
            },
            '.show-select-admin': {
                '.MuiFormControl-root': {
                    paddingRight: 0
                },
            },
            '.MuiButtonBase-root.MuiButton-primary': {
                minWidth: 91,
                minHeght: 44,
                marginTop: 32,
            }
        }
    },
} ) );

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    "Social Media Marketing",
    "Dealership Websites",
    "Customer Booking",
    "Direct Buy",
];

const ConnectWith = ( { module, options } ) => {
    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );

    const handleRecaptchaChange = ( value ) => {
        // console.log( 'reCAPTCHA value:', value );
    };

    const [ personName, setPersonName ] = useState( [] );

    const handleChange = ( event ) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split( ',' ) : value,
        );
    };

    const handleSubmit = async ( event ) => {
        console.log( 'askjdaskjdhjkh' );
        event.preventDefault();
        const data = getFormData( event.currentTarget );
        console.log( data );
    };

    return (
        <ModuleConnectWith>
            <Container>
                <Grid container className="connectWith-container" >
                    <Grid item xs={ 12 } lg={ 12 } className='connectWith-title'>
                        <Stack direction='column' spacing={ 2.5 } >
                            <Typography variant={ mdDown ? 'body5' : 'title6' }>{ module.data.title }</Typography>
                            <Typography variant='description6'>Quick solutions to common issues</Typography>
                        </Stack>
                    </Grid>

                    <Grid container spacing={ 4 }>
                        <Grid item xs={ 12 } md={ 6 } lg={ 4 } gap={ 3 } className="connectWith-contact">
                            <Box>
                                <Typography variant="subtitle1">Contact Us. It’s Easy.</Typography>
                                <Typography variant="body7">Have a question or want more information about DealershipOne Services? You can fill out the form here to have a sales representative contact you directly. </Typography>
                            </Box>
                            <Box>
                                <Stack direction="row">
                                    <Box><CarIcon name='phone' width={ 24 } height={ 24 } fill='#F79009' /></Box>
                                    <Box>
                                        <Typography variant='text1' paragraph>Have Any Question?</Typography>
                                        <Typography variant='subtitle5' paragraph>Hotline:  +01 238 543 987</Typography>
                                    </Box>
                                </Stack>
                                <Stack direction="row">
                                    <Box><CarIcon name='envelope' width={ 24 } height={ 24 } fill='#02A04B' /></Box>
                                    <Box>
                                        <Typography variant='text1' paragraph>Write Email</Typography>
                                        <Typography variant='subtitle5' paragraph>service@DealershipOne.com</Typography>
                                    </Box>
                                </Stack>
                                <Stack direction="row">
                                    <Box><CarIcon name='map-pin' width={ 24 } height={ 24 } fill='#F04438' /></Box>
                                    <Box>
                                        <Typography variant='text1' paragraph>Visit Anytime</Typography>
                                        <Typography variant='subtitle5' paragraph>Company Name 1234 Street Name City Name, AB 12345 United States</Typography>
                                    </Box>
                                </Stack>

                            </Box>
                        </Grid>

                        <Grid item xs={ 12 } md={ 6 } lg={ 8 } >
                            {/* <GoogleReCaptchaProvider
                                reCaptchaKey={ '6LelGEQnAAAAAJmJfDllzs9FQMcmU7dTomJG3-4p' }
                                useEnterprise={ true }
                            > */}
                            <Box className="connectWith-form" component="form" onSubmit={ handleSubmit } noValidate>
                                <FormControl fullWidth sx={ { mb: 2 } } >
                                    <CarInput
                                        name="firstName"
                                        placeholder='First Name *'
                                        size='small'
                                    />
                                </FormControl>
                                <FormControl fullWidth sx={ { mb: 2 } }>
                                    <CarInput
                                        name="lastName"
                                        placeholder='Last Name *'
                                        size='small'
                                    />
                                </FormControl>
                                <FormControl fullWidth sx={ { mb: 2 } }>
                                    <CarInput
                                        name="email"
                                        placeholder='Your Email *'
                                        size='small'
                                    />
                                </FormControl>
                                <FormControl fullWidth sx={ { mb: 2 } }>
                                    <CarInput
                                        name="dealershipName"
                                        placeholder='Dealership Name *'
                                        size='small'
                                    />
                                </FormControl>
                                <FormControl fullWidth sx={ { mb: 2 } }>
                                    <CarInput
                                        name="phone"
                                        placeholder='Phone Number *'
                                        size='small'
                                    />
                                </FormControl>

                                {/* <CartInputSelect options={ OPTIONS_SELECT } defaultValue="1" /> */ }

                                <FormControl fullWidth sx={ { mb: 2 } }>
                                    <InputLabel id="chip-label">{ "Select services that you're interested in" }</InputLabel>
                                    <Select
                                        labelId="chip-label"
                                        id="chip"
                                        multiple
                                        value={ personName }
                                        onChange={ handleChange }
                                        renderValue={ ( selected ) => (
                                            <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 0.5 } }>
                                                { selected.map( ( value ) => (
                                                    <Chip key={ value } label={ value } />
                                                ) ) }
                                            </Box>
                                        ) }
                                        MenuProps={ MenuProps }
                                    >
                                        { names.map( ( name ) => (
                                            <MenuItem
                                                key={ name }
                                                value={ name }
                                            >
                                                { name }
                                            </MenuItem>
                                        ) ) }
                                    </Select>
                                </FormControl>

                                <FormControl fullWidth sx={ { mb: 2 } }>
                                    <CarInput
                                        name="message"
                                        placeholder="Enter your questions"
                                        multiline
                                        rows={ 4 }
                                    />
                                </FormControl>

                                {/* Key="AIzaSyD03cbHmZyX5sgIGFBOzUBMI8Hvdsa7iHk" */ }

                                <ReCAPTCHA sitekey="6LdpREQnAAAAAFAdc4TuSRPA1ZJJmd0FCvZN9nG2" onChange={ handleRecaptchaChange } />

                                <Button variant="primary">Submit</Button>
                            </Box>
                            {/* </GoogleReCaptchaProvider> */ }

                        </Grid>
                    </Grid>

                </Grid>
            </Container>
        </ModuleConnectWith>
    );
};

export default ConnectWith;