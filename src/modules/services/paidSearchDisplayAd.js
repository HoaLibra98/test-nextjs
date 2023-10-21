import ButtonAction from "@components/ButtonAction";
import CarIcon from "@components/CarIcon";
import SliderSlick from "@components/SlickSlider";
import { Box, Container, Grid, Stack, Typography, experimentalStyled, useMediaQuery } from "@mui/material";
import breakpoints from "@theme/Breakpoints";
import { ColorStyles } from "@theme/Designs";
import { MediaBreakpoints, Theme } from "@theme/MediaBreakpoints";
import Image from "next/image";
import ReactHtmlParser from 'react-html-parser';



const PaidSearchDisplayAd = ( { module, options } ) => {
    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );

    const ModulePaidSearchDisplayAd = experimentalStyled( Box )( ( { theme } ) => ( {
        backgroundColor: module.data.bgcolor,
        padding: '128px 0',
        [ MediaBreakpoints( Theme.down.md ) ]: {
            padding: '64px 16px',
        },
        '.MuiGrid-root.MuiGrid-container': {
            '.paidSearchDisplayAd-title': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // marginBottom: 64,
                [ MediaBreakpoints( Theme.down.md ) ]: {
                    marginBottom: 32,
                },
                '.MuiStack-root': {
                    maxWidth: 766,
                    textAlign: 'center',
                },
            },
            '.MuiGrid-root.MuiGrid-item': {
                position: 'relative',
                '.slick-slider': {
                    minHeight: 350,
                    '.slick-dots': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        bottom: 48,
                        '& li.slick-active button::before': {
                            color: ColorStyles.primary[ 500 ],
                            fontSize: '11px',
                        },
                        li: {
                            zIndex: 999,
                            width: 8,
                            height: 8,
                            button: {
                                width: '100%',
                                height: '100%',
                                backgroundColor: ColorStyles.gray[ 300 ],
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }
                        },
                        '& li.slick-active': {
                            button: {
                                border: 'unset'
                            }
                        },
                        '& li': {
                            '& button::before': {
                                color: ColorStyles.gray[ 300 ],
                                opacity: 1,
                                fontSize: 10,
                                borderRadius: "50%",
                                top: '-4px',
                                left: '-6px',
                            }
                        }
                    },
                    '.slick-slide': {
                        display: 'flex',
                        justifyContent: 'center',
                        '.paidSearchDisplayAd-container': {
                            display: 'flex !important',
                            padding: 0,
                            margin: 0,
                            [ MediaBreakpoints( Theme.up.md ) ]: {
                                padding: '0px 128px 0px 56px'
                            },
                            '.MuiGrid-root.MuiGrid-item': {
                                display: 'flex',
                                alignItems: 'center',
                                '.paidSearchDisplayAd-image': {
                                    width: '100%',
                                    img: {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: 8,
                                    }
                                },
                                '.paidSearchDisplayAd-video': {
                                    video: {
                                        width: '100%',
                                        height: 350,
                                        borderRadius: 8
                                    },
                                    [ MediaBreakpoints( Theme.down.md ) ]: {
                                        video: {
                                            height: 400,
                                            borderRadius: 3.8
                                        },
                                    },
                                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                                        video: {
                                            height: 300,
                                            borderRadius: 3.8
                                        },
                                    },
                                },
                            },
                            '.MuiStack-root': {
                                [ MediaBreakpoints( Theme.down.md ) ]: {
                                    marginTop: 32,
                                },
                                svg: {
                                    marginBottom: 32,
                                },
                                '.MuiTypography-root.MuiTypography-subtitle1': {
                                    marginBottom: 16,
                                },
                            },
                        }
                    }
                },
                '.MuiButton-button-slick-2': {
                    position: 'absolute',
                    width: 80,
                    height: 80,
                    borderRadius: 100,
                    top: '50%',
                    left: 0,
                    backgroundColor: '#E6F6ED66',
                    '&:hover': {
                        backgroundColor: '#02A04B',
                        svg: {
                            path: {
                                fill: `${ ColorStyles.base.white }`
                            }
                        }
                    },
                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                        position: 'unset'
                    },
                },
                '.MuiButton-button-slick-3': {
                    position: 'absolute',
                    width: 80,
                    height: 80,
                    borderRadius: 100,
                    top: '50%',
                    right: 0,
                    backgroundColor: '#E6F6ED66',
                    '&:hover': {
                        backgroundColor: '#02A04B',
                        svg: {
                            path: {
                                fill: `${ ColorStyles.base.white }`
                            }
                        }
                    },
                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                        position: 'unset'
                    },
                },
                '.arows-items-2': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 32,
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        marginTop: '-50px',
                    },
                    '.MuiButton-root.MuiButton-button-slick-2': {
                        position: 'unset',
                    },
                    '.MuiButton-root.MuiButton-button-slick-3': {
                        position: 'unset',
                    },
                    '.MuiTouchRipple-root': {
                        position: 'unset',
                    }
                },

            },
            '.button-paidSearch': {
                marginTop: '64px',
                [ MediaBreakpoints( Theme.down.md ) ]: {
                    marginTop: '32px',
                },
                '.MuiBox-root': {
                    backgroundColor: module.data.bgcolorContent,
                    maxWidth: '824px',
                    width: '100%',
                    padding: 32,
                    margin: '0px auto',
                    textAlign: 'center',
                    borderRadius: 8,
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        margin: 0,
                    },
                    a: {
                        '.MuiButtonBase-root': {
                            height: '40px !important',
                            width: '100% !important',
                            maxWidth: '125px'
                        }
                    }
                },
            }
        }
    } ) );

    const settings = {
        slidesToShow: 1,
        centerMode: true,
        infinite: false,
        dots: false,
        responsive: [
            {
                breakpoint: breakpoints.values.md,
                settings: { slidesToShow: 1, }
            },
            {
                breakpoint: breakpoints.values.sm,
                settings: { slidesToShow: 1, }
            },
        ]
    };
    const paidSearchs = [
        {
            image: module.data.image1,
            video: module.data.videoURL1,
            isImage: module.data.isImage1,
            imagePosition: module.data.imagePosition1,
            subTitle: module.data.subTitle1,
            description: module.data.description1,
            subDescription: module.data.subDescription1,
            buttonLabel: module.data.buttonLabel1,
            buttonURL: module.data.buttonURL1,
            icon: module.data.icon1,
        },
        {
            image: module.data.image2,
            video: module.data.videoURL2,
            isImage: module.data.isImage2,
            imagePosition: module.data.imagePosition2,
            subTitle: module.data.subTitle2,
            description: module.data.description2,
            subDescription: module.data.subDescription2,
            buttonLabel: module.data.buttonLabel2,
            buttonURL: module.data.buttonURL2,
            icon: module.data.icon2,
        },
        {
            image: module.data.image3,
            video: module.data.videoURL3,
            isImage: module.data.isImage3,
            imagePosition: module.data.imagePosition3,
            subTitle: module.data.subTitle3,
            description: module.data.description3,
            subDescription: module.data.subDescription3,
            buttonLabel: module.data.buttonLabel3,
            buttonURL: module.data.buttonURL3,
            icon: module.data.icon3,
        },
    ];

    return (
        <ModulePaidSearchDisplayAd>
            <Container>
                <Grid container spacing={ 8 }>
                    <Grid item xs={ 12 } lg={ 12 } className='paidSearchDisplayAd-title'>
                        <Stack direction='column' spacing={ 2.5 } >
                            <Typography variant={ mdDown ? 'body5' : 'title6' }>{ module.data.title }</Typography>
                            <Typography variant={ mdDown ? 'description1' : 'description11' }>{ module.data.recap }</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={ 12 } lg={ 12 }>
                        <SliderSlick settings={ settings } isArows={ true }>
                            { paidSearchs.map( ( paidSearch, index ) => (
                                <Grid container key={ index } columnSpacing={ mdDown ? 0 : 9 } className="paidSearchDisplayAd-container" flexDirection={ paidSearch.imagePosition === 'right' ? 'row-reverse' : '' }>
                                    <Grid item xs={ 12 } md={ 6 } lg={ 6 } >
                                        { paidSearch.isImage === '0' ? (
                                            <Box className='paidSearchDisplayAd-video'>
                                                <video src={ paidSearch.video } controls={ true } />
                                            </Box>
                                        ) : (
                                            <Box className='paidSearchDisplayAd-image'>
                                                <Image src={ paidSearch.image } alt='' width={ 477 } height={ 480 } />
                                            </Box>
                                        ) }
                                    </Grid>
                                    <Grid item xs={ 12 } md={ 6 } lg={ 6 } sx={ { display: 'flex', alignItems: 'center' } }>
                                        <Stack>
                                            <CarIcon name={ paidSearch.icon } width={ 48 } height={ 48 } fill='#02A04B' />
                                            <Typography variant='subtitle1' >{ paidSearch.subTitle }</Typography>
                                            <Typography variant='description1' >{ ReactHtmlParser( paidSearch.description ) }</Typography>
                                        </Stack>
                                    </Grid>

                                    {
                                        paidSearch.subDescription && <Grid item xs={ 12 } md={ 12 } lg={ 12 } className="button-paidSearch">
                                            <Box>
                                                <Typography variant="body6" mb='14px' paragraph>{ ReactHtmlParser( paidSearch.subDescription ) }</Typography>
                                                <ButtonAction href={ paidSearch.buttonURL }>
                                                    { paidSearch.buttonLabel }
                                                </ButtonAction>
                                            </Box>
                                        </Grid>
                                    }



                                </Grid>
                            ) ) }
                        </SliderSlick>
                    </Grid>
                </Grid>
            </Container>
        </ModulePaidSearchDisplayAd>
    );
};

export default PaidSearchDisplayAd;
