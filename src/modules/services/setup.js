import SvgIcon from "@components/SvgIcon";
import { Box, Container, Grid, Stack, Typography, experimentalStyled, useMediaQuery } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import { MediaBreakpoints, Theme } from "@theme/MediaBreakpoints";
import Image from "next/image";
import ReactHtmlParser from 'react-html-parser';

const ModuleSetup = experimentalStyled( Box )( ( { theme } ) => ( {
    backgroundColor: '#F0F1F3',
    '.MuiGrid-root.MuiGrid-container': {
        padding: '128px 0',
        [ MediaBreakpoints( Theme.down.md ) ]: {
            padding: '64px 0',
        },
        '.setup-title': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 64,
            [ MediaBreakpoints( Theme.down.md ) ]: {
                marginBottom: 32,
            },
            '.MuiStack-root': {
                width: 658,
                textAlign: 'center',
                '.MuiTypography-description6': {
                    color: ColorStyles.gray[ 500 ]
                }
            },
        },
        '.MuiGrid-root.MuiGrid-item': {
            '.setup-container': {
                padding: 0,
                '.setup-image': {
                    width: '100%',
                    img: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: 8,
                    }
                },
                '.setup-video': {
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
                '.MuiStack-root': {
                    '.MuiTypography-description1': {
                        color: ColorStyles.gray[ 900 ]
                    }
                },
            }
        }
    }
} ) );

const Setup = ( { module, options } ) => {
    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );
    return (
        <ModuleSetup>
            <Container>
                <Grid container spacing={ 0 }  >
                    <Grid item xs={ 12 } lg={ 12 } className='setup-title'>
                        <Stack direction='column' spacing={ 2.5 } >
                            <Typography variant={ mdDown ? 'body5' : 'title6' }>{ module.data.title }</Typography>
                            <Typography variant='description6'>{ module.data.recap }</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={ 12 } lg={ 12 }>
                        <Grid container spacing={ 6 } className="setup-container" flexDirection={ module.data.imagePosition === 'right' ? 'row-reverse' : '' } >
                            <Grid item xs={ 12 } md={ 6 } >
                                { module.data.isImage === '0' ? (
                                    <Box className='setup-video'>
                                        <video src={ module.data.videoURL } controls={ true } />
                                    </Box>
                                ) : (
                                    <Box className='setup-image'>
                                        <Image src={ "/image/setup.jpg" } alt='' width={ 590 } height={ 442 } />
                                    </Box>
                                ) }
                            </Grid>
                            <Grid item xs={ 12 } md={ 6 } >
                                <Stack gap={ 4 }>
                                    <SvgIcon icon="rss" />
                                    <Stack gap={ 2 }>
                                        <Typography variant='subtitle1' >{ module.data.subTitle }</Typography>
                                        <Typography variant='description1' >{ ReactHtmlParser( module.data.description ) }</Typography>
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ModuleSetup>
    );
};

export default Setup;