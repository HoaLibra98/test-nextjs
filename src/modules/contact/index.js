import CarIcon from "@components/CarIcon";
import { CarInput } from "@components/CartInput/CartInput";
import { CarInputMask } from "@components/CartInput/CartInputMask";
import axiosClient from "@configs/axios";
import { KEY_GOOGLE_RECAPTCHA } from "@configs/constants";
import useForm from "@hooks/useForm";
import { Box, Button, Chip, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography, experimentalStyled, useMediaQuery } from "@mui/material";
import { setAlertOpen } from "@slices/alert";
import { MediaBreakpoints, Theme } from "@theme/MediaBreakpoints";
import { getFormData } from "@utils/forms";
import _ from "lodash";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ReactHtmlParser from 'react-html-parser';
import { useDispatch } from "react-redux";

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
                maxWidth: '80%',
                textAlign: 'center',
                alignItems: 'center',
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
                            padding: 12,
                        },
                        p: {
                            marginBottom: 0
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
                '.Mui-error': {
                    border: `1px solid #dc2626`,
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
                width: '100%',
                maxWidth: 91,
                minHeight: 44,
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

const ConnectWith = ( { module, options } ) => {
    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );
    const [ personName, setPersonName ] = useState( [] );
    const dispatch = useDispatch();

    const { formRef, valid, setValid, form, setForm, handleChange, hanldeBlur } = useForm(
        {
            'field[contact-us][first-name]': "",
            'field[contact-us][last-name]': "",
            'field[contact-us][your-email]': "",
            'field[contact-us][dealership-name]': "",
            'field[contact-us][phone-number]': "",
            'field[contact-us][services]': "",
            'field[contact-us][question]': "",
        },
        {
            'field[contact-us][first-name]': true,
            'field[contact-us][last-name]': true,
            'field[contact-us][your-email]': true,
            'field[contact-us][dealership-name]': true,
            'field[contact-us][phone-number]': true,
            'field[contact-us][services]': false,
            'field[contact-us][question]': false,
        }
    );

    const handleChangeChip = ( event ) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split( ',' ) : value,
        );
    };

    const handleSubmit = async ( event ) => {
        event.preventDefault();
        const error = event.target.querySelector( ".Mui-error" );
        if ( error || !form[ 'field[contact-us][first-name]' ] || !form[ 'field[contact-us][last-name]' ] || !form[ 'field[contact-us][your-email]' ] || !form[ 'field[contact-us][dealership-name]' ] || !form[ 'field[contact-us][phone-number]' ] ) {
            setValid( false );
            return;
        }

        const data = getFormData( event.currentTarget );
        if ( !data[ 'g-recaptcha-response' ] ) {
            dispatch( setAlertOpen( { severity: 'error', message: 'Please, enter capcha.' } ) );
            return;
        }
        _.unset( data, 'g-recaptcha-response' );

        const res = await axiosClient.post( '@/forms/saveValue', data );
        if ( res.success === true ) {
            dispatch( setAlertOpen( { severity: 'success', message: 'Thank you for Connect with DealershipOne.' } ) );

            setForm( {
                'field[contact-us][first-name]': "",
                'field[contact-us][last-name]': "",
                'field[contact-us][your-email]': "",
                'field[contact-us][dealership-name]': "",
                'field[contact-us][phone-number]': "",
                'field[contact-us][services]': "",
                'field[contact-us][question]': "",
            } );
            return;
        }

        dispatch( setAlertOpen( { severity: 'error', message: 'Error save form.' } ) );
    };

    return (
        <ModuleConnectWith>
            <Container>
                <Grid container className="connectWith-container" >
                    <Grid item xs={ 12 } lg={ 12 } className='connectWith-title'>
                        <Stack direction='column' spacing={ 2 } >
                            <Typography variant={ mdDown ? 'body5' : 'title6' }>{ module.data.title }</Typography>
                            <Typography variant='description11'>{ module.data.recap }</Typography>
                        </Stack>
                    </Grid>

                    <Grid container spacing={ 4 }>
                        <Grid item xs={ 12 } md={ 6 } lg={ 4 } gap={ 3 } className="connectWith-contact">
                            <Box>
                                <Typography variant="subtitle1">{ module.data.subTitle }</Typography>
                                <Typography variant="body7">{ ReactHtmlParser( module.data.description ) }</Typography>
                            </Box>
                            <Box>
                                {
                                    module.data.label1 && <Stack direction="row">
                                        <Box sx={ { backgroundColor: '#FEF4E6' } }><CarIcon name={ module.data.icon1 } width={ 24 } height={ 24 } fill='#F79009' /></Box>
                                        <Box>
                                            <Typography variant='text1' paragraph>{ module.data.label1 }</Typography>
                                            <Typography variant='subtitle5' paragraph>{ module.data.info1 }</Typography>
                                        </Box>
                                    </Stack>
                                }

                                {
                                    module.data.label2 && <Stack direction="row">
                                        <Box sx={ { backgroundColor: '#E6F6ED' } }><CarIcon name={ module.data.icon2 } width={ 24 } height={ 24 } fill='#02A04B' /></Box>
                                        <Box>
                                            <Typography variant='text1' paragraph>{ module.data.label2 }</Typography>
                                            <Typography variant='subtitle5' paragraph>{ module.data.info2 }</Typography>
                                        </Box>
                                    </Stack>
                                }

                                {
                                    module.data.label3 && <Stack direction="row">
                                        <Box sx={ { backgroundColor: '#FEECEB' } }><CarIcon name={ module.data.icon3 } width={ 24 } height={ 24 } fill='#F04438' /></Box>
                                        <Box>
                                            <Typography variant='text1' paragraph>{ module.data.label3 }</Typography>
                                            <Typography variant='subtitle5' paragraph>{ module.data.info3 }</Typography>
                                        </Box>
                                    </Stack>
                                }

                            </Box>
                        </Grid>

                        <Grid item xs={ 12 } md={ 6 } lg={ 8 } >
                            {/* <GoogleReCaptchaProvider
                                reCaptchaKey={ '6LelGEQnAAAAAJmJfDllzs9FQMcmU7dTomJG3-4p' }
                                useEnterprise={ true }
                            > */}
                            <Box className="connectWith-form" component="form" onSubmit={ handleSubmit } noValidate ref={ formRef }>
                                <FormControl fullWidth sx={ { mb: 2 } } required={ true }>
                                    <CarInput
                                        placeholder='First Name *'
                                        name='field[contact-us][first-name]'
                                        rules={ {
                                            empty: "This is a required field.",
                                        } }
                                        value={ form[ 'field[contact-us][first-name]' ] }
                                        onChange={ handleChange }
                                        onBlur={ hanldeBlur }
                                    />
                                </FormControl>
                                <FormControl fullWidth sx={ { mb: 2 } } required={ true }>
                                    <CarInput
                                        placeholder='Last Name *'
                                        name="field[contact-us][last-name]"
                                        rules={ {
                                            empty: "This is a required field.",
                                        } }
                                        value={ form[ 'field[contact-us][last-name]' ] }
                                        onChange={ handleChange }
                                        onBlur={ hanldeBlur }
                                    />
                                </FormControl>
                                <FormControl fullWidth sx={ { mb: 2 } } required={ true }>
                                    <CarInput
                                        placeholder='Your Email *'
                                        name="field[contact-us][your-email]"
                                        rules={ {
                                            empty: "This is a required field.",
                                            email: "Invalid email address.",
                                        } }
                                        value={ form[ 'field[contact-us][your-email]' ] }
                                        onChange={ handleChange }
                                        onBlur={ hanldeBlur }
                                    />
                                </FormControl>
                                <FormControl fullWidth sx={ { mb: 2 } } required={ true }>
                                    <CarInput
                                        placeholder='Dealership Name *'
                                        name="field[contact-us][dealership-name]"
                                        rules={ {
                                            empty: "This is a required field.",
                                        } }
                                        value={ form[ 'field[contact-us][dealership-name]' ] }
                                        onChange={ handleChange }
                                        onBlur={ hanldeBlur }
                                    />
                                </FormControl>
                                <FormControl fullWidth sx={ { mb: 2 } } required={ true }>
                                    <CarInputMask
                                        name="field[contact-us][phone-number]"
                                        placeholder="Phone Number *"
                                        mask="999-999-9999"
                                        maskChar="_"
                                        rules={ {
                                            empty: "This is a required field.",
                                            phone: "Invalid Phone Number.",
                                        } }
                                        onChange={ handleChange }
                                        onBlur={ hanldeBlur }
                                        value={ form[ 'field[contact-us][phone-number]' ] }
                                    />
                                </FormControl>

                                <FormControl fullWidth sx={ { mb: 2 } }>
                                    <InputLabel id="chip-label">{ "Select services that you're interested in" }</InputLabel>
                                    <Select
                                        labelId="chip-label"
                                        id="chip"
                                        name="field[contact-us][services]"
                                        multiple
                                        value={ personName }
                                        onChange={ handleChangeChip }
                                        renderValue={ ( selected ) => (
                                            <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 0.5 } }>
                                                { selected.map( ( value ) => (
                                                    <Chip key={ value } label={ value } />
                                                ) ) }
                                            </Box>
                                        ) }
                                        MenuProps={ MenuProps }
                                    >
                                        { module.front.services.map( ( service ) => (
                                            <MenuItem
                                                key={ service.slug }
                                                value={ service.name }
                                            >
                                                { service.name }
                                            </MenuItem>
                                        ) ) }
                                    </Select>
                                </FormControl>

                                <FormControl fullWidth sx={ { mb: 2 } }>
                                    <CarInput
                                        name="field[contact-us][question]"
                                        placeholder="Enter your questions"
                                        multiline
                                        rows={ 4 }
                                        onChange={ handleChange }
                                        onBlur={ hanldeBlur }
                                        value={ form[ 'field[contact-us][question]' ] }
                                    />
                                </FormControl>

                                {/* Key="AIzaSyD03cbHmZyX5sgIGFBOzUBMI8Hvdsa7iHk" */ }

                                <ReCAPTCHA
                                    sitekey={ KEY_GOOGLE_RECAPTCHA }
                                />

                                <Button type="submit" variant="primary">Submit</Button>
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