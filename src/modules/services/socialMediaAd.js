import CarIcon from "@components/CarIcon";
import { Box, Container, Divider, Grid, Stack, Typography, experimentalStyled, useMediaQuery } from "@mui/material";
import { ColorStyles, TextStyles } from "@theme/Designs";
import { MediaBreakpoints, Theme } from "@theme/MediaBreakpoints";
import Image from "next/image";
import ReactHtmlParser from 'react-html-parser';

const ModuleSocialMediaAd = experimentalStyled( Box )( ( { theme } ) => ( {
    '.socialMediaAd-container': {
        padding: '128px 0 64px',
        [ MediaBreakpoints( Theme.down.md ) ]: {
            padding: '64px 0 32px',
        },
        '.socialMediaAd-title': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 64,
            '.MuiStack-root': {
                maxWidth: 750,
                textAlign: 'center',
            },
        },
        '.MuiGrid-root.MuiGrid-item': {
            '.MuiGrid-root.MuiGrid-container': {
                '.MuiGrid-root.MuiGrid-item': {
                    '.socialMediaAd-image': {
                        width: '100%',
                        img: {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: 8,
                        }
                    },
                    '.socialMediaAd-video': {
                        video: {
                            width: '100%',
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
                    '.MuiGrid-root.MuiGrid-container': {
                        '.MuiGrid-root.MuiGrid-item': {
                            '.MuiStack-root': {
                                display: "flex",
                                '.MuiBox-root': {
                                    width: 64,
                                    height: 64,
                                    backgroundColor: `${ ColorStyles.primary[ 500 ] }`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 100
                                },
                                '.MuiStack-root': {
                                    p: {
                                        marginBottom: 8,
                                        strong: {
                                            ...TextStyles.displayXs.bold,
                                            color: ColorStyles.gray[ 900 ],
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
            }
        },
    },
    '.divider': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '.MuiDivider-root': {
            width: 480,
            background: '#D0D3D9',
            [ MediaBreakpoints( Theme.down.sm ) ]: {
                width: '100%',
            }
        }
    }
} ) );

const SocialMediaAd = ( { module, options } ) => {
    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );

    return (
        <ModuleSocialMediaAd>
            <Container>
                <Grid container className="socialMediaAd-container" >
                    <Grid item xs={ 12 } lg={ 12 } className='socialMediaAd-title'>
                        <Stack direction='column' spacing={ 2.5 } >
                            <Typography variant={ mdDown ? 'body5' : 'title6' }>{ module.data.title }</Typography>
                            <Typography variant={ mdDown ? 'description1' : 'description11' }>{ module.data.recap }</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={ 12 } lg={ 12 }>
                        <Grid container columnSpacing={ 9 } rowSpacing={ mdDown ? 4 : 0 } >

                            { !mdDown ? (
                                <>
                                    <Grid item xs={ 12 } md={ 4 } lg={ 4 } >
                                        <Grid container rowSpacing={ 10.5 }>
                                            <Grid item xs={ 12 } md={ 12 } lg={ 12 } >
                                                <Stack spacing={ 4 } height="100%">
                                                    <Box><CarIcon name='airplane' width={ 32 } height={ 32 } fill='#fff' /></Box>
                                                    <Stack>
                                                        <Typography variant='description1' >{ ReactHtmlParser( module.data.description1 ) }</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={ 12 } md={ 12 } lg={ 12 } >
                                                <Stack spacing={ 4 } height="100%">
                                                    <Box><CarIcon name='airplane' width={ 32 } height={ 32 } fill='#fff' /></Box>
                                                    <Stack>
                                                        <Typography variant='description1' >{ ReactHtmlParser( module.data.description2 ) }</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={ 12 } md={ 4 } lg={ 4 } >
                                        { module.data.isImage === '0' ? (
                                            <Box className='socialMediaAd-video'>
                                                <video src={ module.data.videoURL } controls={ true } />
                                            </Box>
                                        ) : (
                                            <Box className='socialMediaAd-image'>
                                                <Image
                                                    src={ module.data.image } alt='' width={ 300 } height={ 600 }
                                                />
                                            </Box>
                                        ) }
                                    </Grid>

                                    <Grid item xs={ 12 } md={ 4 } lg={ 4 }>
                                        <Grid container rowSpacing={ 10.5 }>
                                            <Grid item xs={ 12 } md={ 12 } lg={ 12 } >
                                                <Stack spacing={ 4 } height="100%">
                                                    <Box><CarIcon name='airplane' width={ 32 } height={ 32 } fill='#fff' /></Box>
                                                    <Stack>
                                                        <Typography variant='description1' >{ ReactHtmlParser( module.data.description3 ) }</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={ 12 } md={ 12 } lg={ 12 } >
                                                <Stack spacing={ 4 } height="100%">
                                                    <Box><CarIcon name='airplane' width={ 32 } height={ 32 } fill='#fff' /></Box>
                                                    <Stack>
                                                        <Typography variant='description1' >{ ReactHtmlParser( module.data.description4 ) }</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </>
                            ) : (
                                <>
                                    <Grid item xs={ 12 } md={ 12 } >
                                        { module.data.isImage === '0' ? (
                                            <Box className='socialMediaAd-video'>
                                                <video src={ module.data.videoURL } controls={ true } />
                                            </Box>
                                        ) : (
                                            <Box className='socialMediaAd-image'>
                                                <Image
                                                    src={ module.data.image } alt='' width={ 300 } height={ 600 }
                                                />
                                            </Box>
                                        ) }
                                    </Grid>

                                    <Grid item xs={ 12 } md={ 12 } >
                                        <Grid container rowSpacing={ 4 }>
                                            <Grid item xs={ 12 } md={ 6 }  >
                                                <Stack spacing={ 4 } >
                                                    <Box><CarIcon name='airplane' width={ 32 } height={ 32 } fill='#fff' /></Box>
                                                    <Stack>
                                                        <Typography variant='description1' >{ ReactHtmlParser( module.data.description1 ) }</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={ 12 } md={ 6 } >
                                                <Stack spacing={ 4 }>
                                                    <Box><CarIcon name='airplane' width={ 32 } height={ 32 } fill='#fff' /></Box>
                                                    <Stack>
                                                        <Typography variant='description1' >{ ReactHtmlParser( module.data.description2 ) }</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={ 12 } md={ 6 } >
                                                <Stack spacing={ 4 }>
                                                    <Box><CarIcon name='airplane' width={ 32 } height={ 32 } fill='#fff' /></Box>
                                                    <Stack>
                                                        <Typography variant='description1' >{ ReactHtmlParser( module.data.description3 ) }</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={ 12 } md={ 6 } >
                                                <Stack spacing={ 4 }>
                                                    <Box><CarIcon name='airplane' width={ 32 } height={ 32 } fill='#fff' /></Box>
                                                    <Stack>
                                                        <Typography variant='description1' >{ ReactHtmlParser( module.data.description4 ) }</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </>
                            ) }

                        </Grid>
                    </Grid>
                </Grid>

                <Box className="divider"><Divider /></Box>
            </Container>
        </ModuleSocialMediaAd>
    );
};

export default SocialMediaAd;