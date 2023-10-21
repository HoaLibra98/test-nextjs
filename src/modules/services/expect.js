import CarIcon from '@components/CarIcon';
import { Box, Container, Grid, Stack, Typography, experimentalStyled, useMediaQuery } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import { MediaBreakpoints, Theme } from '@theme/MediaBreakpoints';

const ModuleExpect = experimentalStyled( Box )( ( { theme } ) => ( {
    '.expect-banner-container': {
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
            '.expect-title': {
                // width: 658,
                textAlign: 'center',
                '.MuiTypography-description6': {
                    color: ColorStyles.gray[ 500 ],
                    padding: '0 20px',
                }
            },
        },
        '.expect-container': {
            '.expect-options': {
                backgroundColor: '#F0F1F3',
                padding: '64px 33px',
                borderRadius: 8,
                height: '100%',
                transitionDuration: '0.8s',
                '.MuiBox-root': {
                    backgroundColor: '#02A04B',
                    padding: 24,
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: 100,
                },
                '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: '#02A04B',
                    '.MuiBox-root': {
                        backgroundColor: '#F0F1F3',
                        svg: {
                            path: {
                                fill: '#02A04B'
                            }
                        }
                    },
                    '.MuiStack-root': {
                        '.MuiTypography-root': {
                            color: ColorStyles.base.white
                        }
                    }
                },
            },
            '.expect-options-2': {
                backgroundColor: '#02A04B',
                padding: '64px 33px',
                borderRadius: 8,
                height: '100%',
                transitionDuration: '0.8s',
                '.MuiBox-root': {
                    backgroundColor: '#F0F1F3',
                    padding: 24,
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: 100,
                    svg: {
                        path: {
                            fill: '#02A04B'
                        }
                    }
                },
                '.MuiStack-root': {
                    '.MuiTypography-root': {
                        color: ColorStyles.base.white
                    }
                },
                '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: '#02A04B',
                    '.MuiBox-root': {
                        backgroundColor: '#F0F1F3',
                        svg: {
                            path: {
                                fill: '#02A04B'
                            }
                        }
                    },

                },
            },

        }
    },
} ) );

const Expect = ( { module, options } ) => {
    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );

    return (
        <ModuleExpect>
            <Container>
                <Grid container className='expect-banner-container'>
                    <Grid item xs={ 12 } md={ 12 } lg={ 12 } alignItems='center' justifyContent='center'>
                        <Stack direction='column' spacing={ 2.5 } className='expect-title'>
                            <Typography variant={ mdDown ? 'body5' : 'title6' }>{ module.data.title }</Typography>
                            <Typography variant={ mdDown ? 'description1' : 'description11' }>{ module.data.recap }</Typography>
                        </Stack>
                    </Grid>

                    <Grid container spacing={ 4 } className='expect-container'>
                        <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                            <Stack spacing={ 4 } alignItems='center' className='expect-options'>
                                <Box>
                                    <CarIcon name={ module.data.icon1 } size={ 32 } color='#ffffff' />
                                </Box>
                                <Stack spacing={ 1 } textAlign='center'>
                                    <Typography variant='subtitle1'>{ module.data.subTitle1 }</Typography>
                                    <Typography variant='description1'>{ module.data.description1 }</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                            <Stack spacing={ 4 } alignItems='center' className={ mdDown ? 'expect-options' : 'expect-options-2' }>
                                <Box>
                                    <CarIcon name={ module.data.icon2 } size={ 32 } color='#ffffff' />
                                </Box>
                                <Stack spacing={ 1 } textAlign='center'>
                                    <Typography variant='subtitle1'>{ module.data.subTitle2 }</Typography>
                                    <Typography variant='description1'>{ module.data.description2 }</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={ 12 } md={ 6 } lg={ 4 } >
                            <Stack spacing={ 4 } alignItems='center' className='expect-options'>
                                <Box>
                                    <CarIcon name={ module.data.icon3 } size={ 32 } color='#ffffff' />
                                </Box>
                                <Stack spacing={ 1 } textAlign='center'>
                                    <Typography variant='subtitle1'>{ module.data.subTitle3 }</Typography>
                                    <Typography variant='description1'>{ module.data.description3 }</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        {
                            module.data.subTitle4 &&
                            <Grid item xs={ 12 } md={ 6 } lg={ 4 } >
                                <Stack spacing={ 4 } alignItems='center' className='expect-options'>
                                    <Box>
                                        <CarIcon name={ module.data.icon4 } size={ 32 } color='#ffffff' />
                                    </Box>
                                    <Stack spacing={ 1 } textAlign='center'>
                                        <Typography variant='subtitle1'>{ module.data.subTitle4 }</Typography>
                                        <Typography variant='description1'>{ module.data.description4 }</Typography>
                                    </Stack>
                                </Stack>
                            </Grid>
                        }
                        {
                            module.data.subTitle5 &&
                            <Grid item xs={ 12 } md={ 6 } lg={ 4 } >
                                <Stack spacing={ 4 } alignItems='center' className='expect-options'>
                                    <Box>
                                        <CarIcon name={ module.data.icon5 } size={ 32 } color='#ffffff' />
                                    </Box>
                                    <Stack spacing={ 1 } textAlign='center'>
                                        <Typography variant='subtitle1'>{ module.data.subTitle5 }</Typography>
                                        <Typography variant='description1'>{ module.data.description5 }</Typography>
                                    </Stack>
                                </Stack>
                            </Grid>
                        }
                        {
                            module.data.subTitle6 &&
                            <Grid item xs={ 12 } md={ 6 } lg={ 4 } >
                                <Stack spacing={ 4 } alignItems='center' className='expect-options'>
                                    <Box>
                                        <CarIcon name={ module.data.icon6 } size={ 32 } color='#ffffff' />
                                    </Box>
                                    <Stack spacing={ 1 } textAlign='center'>
                                        <Typography variant='subtitle1'>{ module.data.subTitle6 }</Typography>
                                        <Typography variant='description1'>{ module.data.description6 }</Typography>
                                    </Stack>
                                </Stack>
                            </Grid>
                        }
                    </Grid>
                </Grid>
            </Container>
        </ModuleExpect>
    );
};

export default Expect;
