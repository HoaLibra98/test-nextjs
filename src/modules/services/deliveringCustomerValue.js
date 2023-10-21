import CarIcon from "@components/CarIcon";
import { Box, Container, Grid, Stack, Typography, experimentalStyled, useMediaQuery } from "@mui/material";
import { animated, useInView, useSprings } from '@react-spring/web';
import { MediaBreakpoints, Theme } from "@theme/MediaBreakpoints";

const splitNumAndChar = ( string ) => {
    const regex = /(\d+)(.+)?$/;
    const matches = string.match( regex );
    return { number: parseInt( matches[ 1 ] ), symbol: matches[ 2 ] || '' };
};

const DeliveringCustomerValue = ( { module, options } ) => {
    const [ ref, isInView ] = useInView();

    const [ springs, api ] = useSprings( 3, () => ( {
        from: { counter: 0 }
    } ) );

    const strCounter = [
        splitNumAndChar( module.data.numberCounter1 ),
        splitNumAndChar( module.data.numberCounter2 ),
        splitNumAndChar( module.data.numberCounter3 )
    ];

    if ( isInView ) {
        api.start( index => ( {
            to: { counter: strCounter[ index ].number }
        } ) );
    }

    const ModuleDeliveringCustomerValue = experimentalStyled( Box )( ( { theme } ) => ( {
        position: 'relative',
        backgroundImage: `url(${ module.data.bgimage })`,
        // width: '100%',
        // height: '100%',
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
        '.delivering-container': {
            padding: '128px 0',
            gap: 64,
            position: 'relative',
            [ MediaBreakpoints( Theme.down.sm ) ]: {
                gap: 32,
                padding: '64px 0',
            },
            [ MediaBreakpoints( Theme.down.md ) ]: {
                '.MuiGrid-root.MuiGrid-item': {
                    margin: '0 30px'
                }
            },
            '.MuiGrid-root.MuiGrid-container': {
                '.MuiGrid-root.MuiGrid-item': {
                    display: 'flex',
                    alignItems: 'center',
                    '.MuiStack-root': {
                        width: '100%',
                        textAlign: 'center'
                    }
                }
            }
        },
    } ) );

    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );
    return (
        <ModuleDeliveringCustomerValue>
            <Container>
                <Grid container alignItems='center' direction='column' className='delivering-container'>
                    <Grid item xs={ 12 } md={ 12 } lg={ 12 } alignItems='center' justifyContent='center'>
                        <Stack direction='column' spacing={ mdDown ? 1.5 : 2 } textAlign='center'>
                            <Typography variant={ mdDown ? 'body11' : 'banner1' }>{ module.data.title }</Typography>
                            <Typography variant={ mdDown ? 'text10' : 'description7' }>{ module.data.recap }</Typography>
                        </Stack>
                    </Grid>
                    <Grid container spacing={ mdDown ? 4 : 30 }>
                        <Grid item xs={ 12 } md={ 4 } lg={ 4 }>
                            <Stack ref={ ref } direction='column' spacing={ 3.1 } justifyContent='center' alignItems='center'>
                                <CarIcon name={ module.data.icon1 } size={ 48 } color='#ffffff' />
                                <Stack alignItems='center'>
                                    <Typography variant="h2">
                                        <animated.span>{ springs[ 0 ].counter.to( x => Number( x ).toFixed( 0 ) ) }</animated.span>
                                        { strCounter[ 0 ].symbol }
                                    </Typography>
                                    <Typography variant='subtitle9'>{ module.data.subTitle1 }</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={ 12 } md={ 4 } lg={ 4 }>
                            <Stack direction='column' spacing={ 3.1 } justifyContent='center' alignItems='center'>
                                <CarIcon name={ module.data.icon2 } size={ 48 } color='#ffffff' />
                                <Stack alignItems='center'>
                                    <Typography variant="h2">
                                        <animated.span>{ springs[ 1 ].counter.to( x => Number( x ).toFixed( 0 ) ) }</animated.span>
                                        { strCounter[ 1 ].symbol }
                                    </Typography>
                                    <Typography variant='subtitle9'>{ module.data.subTitle2 }</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={ 12 } md={ 4 } lg={ 4 }>
                            <Stack direction='column' spacing={ 3.1 } justifyContent='center' alignItems='center'>
                                <CarIcon name={ module.data.icon3 } size={ 48 } color='#ffffff' />
                                <Stack alignItems='center'>
                                    <Typography variant="h2">
                                        <animated.span>{ springs[ 2 ].counter.to( x => Number( x ).toFixed( 0 ) ) }</animated.span>
                                        { strCounter[ 2 ].symbol }
                                    </Typography>
                                    <Typography variant='subtitle9'>{ module.data.subTitle3 }</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ModuleDeliveringCustomerValue>
    );
};

export default DeliveringCustomerValue;