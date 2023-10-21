import { Box, Button, Container, Grid, Stack, Typography, experimentalStyled, useMediaQuery } from '@mui/material';
import { ColorStyles, TextStyles } from '@theme/Designs';
import { MediaBreakpoints, Theme } from '@theme/MediaBreakpoints';
import Image from 'next/image';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';

const ModuleWhatWeOffer = experimentalStyled( Box )( ( { theme } ) => ( {
    backgroundColor: '#F0F1F3',
    '.whatWeOffer': {
        padding: '128px 0',
        display: 'flex',
        gap: 64,
        flexDirection: 'column',
        [ MediaBreakpoints( Theme.down.md ) ]: {
            padding: '64px 0',
            gap: 32,
        },
        '.MuiGrid-root.MuiGrid-item': {
            display: 'flex',
            alignItems: 'center',
            '.whatWeOffer-title': {
                textAlign: 'center',
                maxWidth: '80%',
                '.MuiTypography-description6': {
                    color: ColorStyles.gray[ 500 ],
                    padding: '0 20px',
                }
            },
        },
        '.whatWeOffer-container': {
            '.whatWeOffer-options': {
                transition: 'transform 0.2s ease',
                borderRadius: 8,
                border: `1px solid #B9BEC7`,
                height: '100%',
                flex: 1,
                img: {
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '8px 8px 0 0'
                },
                cursor: 'pointer',
                '.MuiBox-root': {
                    padding: 32,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    flex: 1,
                    '.MuiStack-root': {
                        flex: 1,
                        display: 'flex',
                        '.MuiTypography-root.MuiTypography-subtitle1': {
                            flex: 1,
                        },
                        p: {
                            marginBottom: 0
                        },
                    },

                    a: {
                        marginTop: 24,
                        '.MuiButtonBase-root': {
                            ...TextStyles.textMd.medium,
                            color: '#014320',
                        }
                    }
                },
                '&:hover': {
                    transform: 'translateY( -5px )',
                },
            },
        }
    },
} ) );

const WhatWeOffer = ( { module, options } ) => {
    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );

    return (
        <ModuleWhatWeOffer>
            <Container>
                <Grid container className='whatWeOffer'>
                    <Grid item xs={ 12 } md={ 12 } lg={ 12 } alignItems='center' justifyContent='center'>
                        <Stack direction='column' spacing={ 2.5 } className='whatWeOffer-title'>
                            <Typography variant={ mdDown ? 'body5' : 'title6' }>{ module.data.title }</Typography>
                            <Typography variant={ mdDown ? 'description1' : 'description11' }>{ module.data.recap }</Typography>
                        </Stack>
                    </Grid>

                    <Grid container spacing={ 4 } className='whatWeOffer-container'>
                        <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                            <Stack alignItems='center' className='whatWeOffer-options'>
                                <Image src={ module.data.image1 } width={ 384 } height={ 360 } alt='' />
                                <Box>
                                    <Stack spacing={ 1 } textAlign='center'>
                                        <Typography variant='subtitle1'>{ module.data.subTitle1 }</Typography>
                                        <Typography variant='description1'>{ ReactHtmlParser( module.data.description1 ) }</Typography>
                                    </Stack>
                                    <Link href={ module.data.buttonURL1 }>
                                        <Button variant='primary'>{ module.data.buttonLabel1 }</Button>
                                    </Link>
                                </Box>
                            </Stack>
                        </Grid>

                        <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                            <Stack alignItems='center' className='whatWeOffer-options'>
                                <Image src={ module.data.image2 } width={ 384 } height={ 360 } alt='' />
                                <Box>
                                    <Stack spacing={ 1 } textAlign='center'>
                                        <Typography variant='subtitle1'>{ module.data.subTitle2 }</Typography>
                                        <Typography variant='description1'>{ ReactHtmlParser( module.data.description2 ) }</Typography>
                                    </Stack>
                                    <Link href={ module.data.buttonURL2 }>
                                        <Button variant='primary'>{ module.data.buttonLabel2 }</Button>
                                    </Link>
                                </Box>
                            </Stack>
                        </Grid>

                        <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                            <Stack alignItems='center' className='whatWeOffer-options'>
                                <Image src={ module.data.image3 } width={ 384 } height={ 360 } alt='' />
                                <Box>
                                    <Stack spacing={ 1 } textAlign='center'>
                                        <Typography variant='subtitle1'>{ module.data.subTitle3 }</Typography>
                                        <Typography variant='description1'>{ ReactHtmlParser( module.data.description3 ) }</Typography>
                                    </Stack>
                                    <Link href={ module.data.buttonURL3 }>
                                        <Button variant='primary'>{ module.data.buttonLabel3 }</Button>
                                    </Link>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ModuleWhatWeOffer>
    );
};

export default WhatWeOffer;
