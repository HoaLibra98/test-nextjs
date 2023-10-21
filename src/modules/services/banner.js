import SvgIcon from '@components/SvgIcon';
import { Box, Button, Container, Grid, Modal, Stack, Typography, experimentalStyled, useMediaQuery } from '@mui/material';
import { MediaBreakpoints, Theme } from '@theme/MediaBreakpoints';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Banner = ( { module, options } ) => {
    const [ open, setOpen ] = useState( false );
    const handleOpen = () => setOpen( true );
    const handleClose = () => setOpen( false );

    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );

    const MainBanner = experimentalStyled( Box )( ( { theme } ) => ( {
        position: 'relative',
        backgroundImage: `url(${ module.data.bgimage })`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        '&:before': {
            content: '""',
            position: 'absolute !important',
            backgroundColor: `${ module.data.bgcolor } !important`,
            width: '100%',
            height: '100%',
        },
        '.MuiContainer-root': {
            padding: '128px 0',
            [ MediaBreakpoints( Theme.down.md ) ]: {
                padding: '64px 24px',
            },
            position: 'relative',
            '.MuiGrid-root.MuiGrid-container': {
                '.social-banner-video': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    img: {
                        position: 'absolute',
                        width: '100%',
                        borderRadius: 8,
                    },
                    svg: {
                        cursor: 'pointer',
                        zIndex: 1
                    },
                    // position: 'relative',
                    // '.play-video': {
                    //     position: 'absolute',
                    //     top: '50%',
                    //     left: '50%'
                    // },
                    video: {
                        width: '100%',
                        height: 450,
                        borderRadius: 8
                    },
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        video: {
                            height: 400
                        },
                        img: {
                            position: 'relative',
                            height: 'auto'
                        },
                        svg: {
                            position: 'absolute',
                            width: '72px'
                        },
                    },
                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                        // position: 'inherit',
                        img: {
                            position: 'relative',
                            height: 'auto'
                        },
                        svg: {
                            position: 'absolute',
                            width: '72px'
                        },
                        video: {
                            width: '90%',
                            height: 'auto'
                        },
                    },
                },
                '.social-banner-image': {
                    width: '100%',
                    img: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: 8,
                    }
                },
                '.banner-not-bgimage': {
                    '.MuiStack-root': {
                        a: {
                            '.MuiButtonBase-root': {
                                padding: '16px 28px',
                                backgroundColor: '#B4D524',
                                [ MediaBreakpoints( Theme.down.md ) ]: {
                                    padding: '12px 20px',
                                },
                                '.MuiTypography-root': {
                                    color: '#014320',
                                }
                            }
                        }
                    }
                },
                '.banner-bgimage': {
                    textAlign: 'center',
                    '.MuiStack-root': {
                        display: 'flex',
                        alignItems: 'center',
                        a: {
                            '.MuiButtonBase-root': {
                                padding: '16px 28px',
                                backgroundColor: '#B4D524',
                                [ MediaBreakpoints( Theme.down.md ) ]: {
                                    padding: '12px 20px',
                                },
                                '.MuiTypography-root': {
                                    color: '#014320',
                                }
                            }
                        }
                    }
                }
            }
        },
    } ) );
    return (
        <MainBanner>
            <Container>
                <Grid container alignItems='center' spacing={ mdDown ? 4 : 8 } flexDirection={ module.data.imagePosition === 'right' ? 'row-reverse' : '' }>
                    {
                        !module.data.bgimage && (
                            <Grid item xs={ 12 } sm={ 12 } md={ 7 }>
                                { module.data.isVideo === '1' ? (
                                    <Box className='social-banner-video'>
                                        <Image src={ module.data.image } width={ 695 } height={ 450 } alt='' />
                                        <SvgIcon onClick={ handleOpen } icon='playvideo' />
                                        <Modal
                                            open={ open }
                                            onClose={ handleClose }
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={
                                                {
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    bgcolor: 'transparent',
                                                    boxShadow: 24,
                                                    width: '70%',
                                                    height: 'auto'
                                                }
                                            }>
                                                <video src={ module.data.videoURL } controls={ true } width='100%' height='auto' />
                                            </Box>
                                        </Modal>
                                    </Box>
                                ) : (
                                    <Box className='social-banner-image'>
                                        <Image src={ module.data.image } width={ 695 } height={ 450 } alt='' />
                                    </Box>
                                ) }
                            </Grid>
                        )
                    }
                    <Grid item xs={ 12 } sm={ 12 } md={ module.data.bgimage ? 12 : 5 } className={ module.data.bgimage ? 'banner-bgimage' : 'banner-not-bgimage' }>
                        <Stack direction='column' gap={ mdDown ? 4 : 6 }>
                            <Typography variant='heading2'>{ module.data.title }</Typography>
                            <Typography variant='description9'>{ module.data.recap }</Typography>
                            <Link href={ module.data.buttonURL }>
                                <Button><Typography variant='title2'>{ module.data.buttonLabel }</Typography></Button>
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </MainBanner >
    );
};


export default Banner;
