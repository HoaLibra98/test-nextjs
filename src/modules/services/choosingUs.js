import CarIcon from "@components/CarIcon";
import { Box, Container, Grid, Stack, Typography, experimentalStyled, useMediaQuery } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import { MediaBreakpoints, Theme } from "@theme/MediaBreakpoints";

const ModuleChoosingUs = experimentalStyled( Box )( ( { theme } ) => ( {
    position: 'relative',
    backgroundImage: "url(/image/choosing.jpg)",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '&:before': {
        content: '""',
        position: 'absolute !important',
        backgroundColor: `${ ColorStyles.rgba[ 1 ] } !important`,
        width: '100%',
        height: '100%',
    },
    '.choosingUs-container': {
        padding: '128px 0',
        gap: 64,
        position: 'relative',
        '.MuiGrid-root.MuiGrid-item': {
            maxWidth: '100%',
            '.MuiStack-root': {
                width: 684,
                textAlign: 'center',
                [ MediaBreakpoints( Theme.down.md ) ]: {
                    width: '100%',
                },
            }
        },
        '.MuiGrid-root.MuiGrid-container': {
            '.MuiGrid-root.MuiGrid-item': {
                display: 'flex',
                alignItems: 'center',
                '.MuiStack-root': {
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '.MuiBox-root': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 64,
                        height: 64,
                        backgroundColor: `${ ColorStyles.base.white }`,
                        borderRadius: 100,
                    },
                    '.MuiTypography-root': {
                        flex: 1,
                        width: 286,
                        [ MediaBreakpoints( Theme.down.md ) ]: {
                            width: 'unset',
                        },
                    }
                }
            }
        }
    },
    [ MediaBreakpoints( Theme.down.md ) ]: {
        '.choosingUs-container': {
            padding: '64px 0',
            gap: 32,
        }
    },
} ) );

const ChoosingUs = ( { module, options } ) => {
    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );
    return (
        <ModuleChoosingUs>
            <Container>
                <Grid container alignItems='center' direction='column' className='choosingUs-container'>
                    <Grid item xs={ 12 } md={ 12 } lg={ 12 } alignItems='center' justifyContent='center'>
                        <Stack direction='column' spacing={ mdDown ? 1 : 2.5 } >
                            <Typography variant={ mdDown ? 'body11' : 'banner1' }>{ module.data.title }</Typography>
                            <Typography variant='description10'>{ module.data.recap }</Typography>
                        </Stack>
                    </Grid>
                    <Grid container spacing={ mdDown ? 4 : 9 }>
                        <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                            <Stack direction='column' spacing={ 3.1 } justifyContent='center' alignItems='center'>
                                <Box><CarIcon name='crosshair-simple' width={ 32 } height={ 32 } fill='#12B76A' /></Box>
                                <Typography variant="subtitle6">{ module.data.subTitle1 }</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                            <Stack direction='column' spacing={ 3.1 } justifyContent='center' alignItems='center'>
                                <Box><CarIcon name='link' width={ 32 } height={ 32 } fill='#12B76A' /></Box>
                                <Typography variant="subtitle6">{ module.data.subTitle2 }</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                            <Stack direction='column' spacing={ 3.1 } justifyContent='center' alignItems='center'>
                                <Box><CarIcon name='vibrate' width={ 32 } height={ 32 } fill='#12B76A' /></Box>
                                <Typography variant="subtitle6">{ module.data.subTitle3 }</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                            <Stack direction='column' spacing={ 3.1 } justifyContent='center' alignItems='center'>
                                <Box><CarIcon name='headset' width={ 32 } height={ 32 } fill='#12B76A' /></Box>
                                <Typography variant="subtitle6">{ module.data.subTitle4 }</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                            <Stack direction='column' spacing={ 3.1 } justifyContent='center' alignItems='center'>
                                <Box><CarIcon name='users-three' width={ 32 } height={ 32 } fill='#12B76A' /></Box>
                                <Typography variant="subtitle6">{ module.data.subTitle5 }</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                            <Stack direction='column' spacing={ 3.1 } justifyContent='center' alignItems='center'>
                                <Box><CarIcon name='storefront' width={ 32 } height={ 32 } fill='#12B76A' /></Box>
                                <Typography variant="subtitle6">{ module.data.subTitle6 }</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ModuleChoosingUs>
    );
};

export default ChoosingUs;