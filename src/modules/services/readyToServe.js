import CarIcon from '@components/CarIcon';
import { Box, Container, Grid, Stack, Typography, experimentalStyled, useMediaQuery } from '@mui/material';
import { animated, useInView, useSprings } from '@react-spring/web';
import { ColorStyles, TextStyles } from '@theme/Designs';
import { MediaBreakpoints, Theme } from '@theme/MediaBreakpoints';
import Image from 'next/image';
import { useEffect, useMemo } from 'react';


const ModuleReadyToServe = experimentalStyled( Box )( ( { theme } ) => ( {
    backgroundColor: ColorStyles.base.white,
    '.readyToServe': {
        padding: '128px 0',
        display: 'flex',
        gap: 50,
        flexDirection: 'column',
        [ MediaBreakpoints( Theme.down.md ) ]: {
            padding: '64px 0',
            gap: 32,
        },
        '.MuiGrid-root.MuiGrid-item': {
            display: 'flex',
            alignItems: 'center',
            '.readyToServe-title': {
                textAlign: 'center',
                '.MuiTypography-description6': {
                    color: ColorStyles.gray[ 500 ],
                    padding: '0 20px',
                }
            },
        },
        '.readyToServe-image': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            paddingTop: 78,
            p: {
                ...TextStyles.textLg.normal,
                color: ColorStyles.gray[ 900 ],
                position: 'absolute',
            },
            '.div-left': {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                '.image-setup': {
                    position: 'absolute',
                    top: 30,
                    left: 300,
                },
                '.image-creation': {
                    position: 'absolute',
                    top: 138,
                    left: 277,
                },
                '.image-management': {
                    position: 'absolute',
                    top: 214,
                    left: 300,
                },
                '.image-reporting': {
                    position: 'absolute',
                    bottom: 73,
                    left: 238,
                },
                '.type_1': {
                    top: 16,
                    left: 138,
                },
                '.type_2': {
                    top: 165,
                    left: 45,
                },
                '.type_3': {
                    top: 321,
                    left: 113,
                },
                '.type_4': {
                    bottom: 92,
                    left: 73,
                },
            },
            '.div-right': {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                '.image-search': {
                    position: 'absolute',
                    top: 118,
                    right: 368,
                },
                '.image-advertising': {
                    position: 'absolute',
                    right: 394,
                    bottom: 209,
                },
                '.image-monitoring': {
                    position: 'absolute',
                    bottom: 81,
                    right: 317,
                },
                '.type_5': {
                    top: 108,
                    right: '22%',
                },
                '.type_6': {
                    top: '49%',
                    right: '19%',
                },
                '.type_7': {
                    bottom: '14%',
                    right: 115,
                },
            },


        },
        '.readyToServe-image-mobile': {
            justifyContent: 'center',
            '.MuiStack-root': {
                alignItems: 'center',
                gap: 32,
                '.MuiBox-root': {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 12,
                    gap: 12,
                    '.MuiBox-root': {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        padding: 0,
                        gap: 12,
                        '.MuiBox-root': {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 24,
                            height: 24,
                            borderRadius: 100,
                            backgroundColor: '#B1E2C7',
                            padding: 0,
                            gap: 0,
                        },
                        '.MuiTypography-root': {
                            ...TextStyles.textXl.normal,
                            color: ColorStyles.gray[ 900 ],
                        }
                    }
                },
            },
            img: {
                width: '100%',
                height: '100%',

            }
        }
    },
} ) );

const ReadyToServe = ( { module, options } ) => {
    // const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );
    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'lg' ) );

    const subTitles = [
        {
            subTitle: module.data.subTitle1,
        },
        {
            subTitle: module.data.subTitle2,
        },
        {
            subTitle: module.data.subTitle3,
        },
        {
            subTitle: module.data.subTitle4,
        },
        {
            subTitle: module.data.subTitle5,
        },
        {
            subTitle: module.data.subTitle6,
        },
        {
            subTitle: module.data.subTitle7,
        },
    ];

    const imagesLeft = [
        {
            class_images: 'image-setup',
            src: '/image/vector_setup.png',
            width: 195,
            height: 78,
        },
        {
            class_images: 'image-creation',
            src: '/image/vector_creation.png',
            width: 205,
            height: 40,
        },
        {
            class_images: 'image-management',
            src: '/image/vector_management.png',
            width: 198,
            height: 125,
        },
        {
            class_images: 'image-reporting',
            src: '/image/vector_reporting.png',
            width: 236,
            height: 27,
        },
    ];

    const imagesRight = [
        {
            class_images: 'image-search',
            src: '/image/vector_search.png',
            width: 172,
            height: 18.49,
        },
        {
            class_images: 'image-advertising',
            src: '/image/vector_display.png',
            width: 140.745,
            height: 125,
        },
        {
            class_images: 'image-monitoring',
            src: '/image/vector_monitoring.png',
            width: 157,
            height: 27,
        },
    ];

    const typeLeft = useMemo( () => [
        {
            typography: module.data.subTitle1,
            class_typography: 'type_1',
        },
        {
            typography: module.data.subTitle2,
            class_typography: 'type_2',
        },
        {
            typography: module.data.subTitle3,
            class_typography: 'type_3',
        },
        {
            typography: module.data.subTitle4,
            class_typography: 'type_4',
        },
    ], [ module.data.subTitle1, module.data.subTitle2, module.data.subTitle3, module.data.subTitle4 ] );

    const typeRight = useMemo( () => [
        {
            typography: module.data.subTitle5,
            class_typography: 'type_5',
        },
        {
            typography: module.data.subTitle6,
            class_typography: 'type_6',
        },
        {
            typography: module.data.subTitle7,
            class_typography: 'type_7',
        },
    ], [ module.data.subTitle5, module.data.subTitle6, module.data.subTitle7 ] );

    const [ ref, isInView ] = useInView();

    const [ leftProps, apiLeft ] = useSprings( imagesLeft.length, () => (
        {
            from: { x: 50, opacity: 0 },
        }
    ) );

    const [ leftType, apiLeftType ] = useSprings( typeLeft.length, () => (
        {
            from: { x: 50, opacity: 0 },
        }
    ) );

    const [ rightProps, apiRight ] = useSprings( imagesLeft.length, () => (
        {
            from: { x: -50, opacity: 0 },
        }
    ) );

    const [ rightType, apiRightType ] = useSprings( typeLeft.length, () => (
        {
            from: { x: -50, opacity: 0 },
        }
    ) );

    const animatedProps = ( index, type, api ) => {
        return {
            opacity: 1,
            x: 0,
            delay: index * 600,
            onRest: () => {
                if ( index < type.length ) {
                    api.start( index => ( {
                        opacity: 1,
                        x: 0,
                        delay: index * 400,
                    } ) );
                }
            },
        };
    };

    useEffect( () => {
        if ( isInView ) {
            apiLeft.start( ( index ) => animatedProps( index, typeLeft, apiLeftType ) );

            apiRight.start( ( index ) => animatedProps( index, typeRight, apiRightType ) );
        }
    }, [ isInView, apiLeft, apiLeftType, apiRight, apiRightType, typeLeft, typeRight ] );

    return (
        <ModuleReadyToServe>
            <Container>
                <Grid container className='readyToServe'>
                    <Grid item xs={ 12 } md={ 12 } lg={ 12 } alignItems='center' justifyContent='center'>
                        <Stack direction='column' spacing={ 2.5 } className='readyToServe-title'>
                            <Typography variant={ mdDown ? 'body5' : 'title6' }>{ module.data.title }</Typography>
                            <Typography variant={ mdDown ? 'description1' : 'description11' }>{ module.data.recap }</Typography>
                        </Stack>
                    </Grid>

                    { !mdDown ? (
                        <Grid item xs={ 12 } md={ 12 } lg={ 12 } className='readyToServe-image' >
                            <Image src={ module.data.image } width={ 296 } height={ 600 } alt='' ref={ ref } />

                            { imagesLeft.map( ( image, index ) => {
                                return (
                                    <animated.div style={ leftProps[ index ] } className='div-left' key={ index }>
                                        <Image className={ image.class_images } src={ image.src } width={ image.width } height={ image.height } alt='' />
                                    </animated.div>
                                );
                            } ) }

                            { typeLeft.map( ( type, index ) => {
                                return (
                                    <animated.div style={ leftType[ index ] } className='div-left' key={ index }>
                                        <Typography className={ type.class_typography }>{ type.typography }</Typography>
                                    </animated.div>
                                );
                            } ) }

                            { imagesRight.map( ( image, index ) => {
                                return (
                                    <animated.div style={ rightProps[ index ] } className='div-right' key={ index }>
                                        <Image className={ image.class_images } src={ image.src } width={ image.width } height={ image.height } alt='' />
                                    </animated.div>
                                );
                            } ) }

                            { typeRight.map( ( type, index ) => {
                                return (
                                    <animated.div style={ rightType[ index ] } className='div-right' key={ index }>
                                        <Typography className={ type.class_typography }>{ type.typography }</Typography>
                                    </animated.div>
                                );
                            } ) }

                        </Grid>
                    ) : (
                        <Grid item xs={ 12 } md={ 12 } className='readyToServe-image-mobile'>
                            <Stack direction="column">
                                <Box>
                                    { subTitles.map( ( subTitle, index ) => (
                                        <Box key={ index }>
                                            <Box><CarIcon name="check" size={ 16 } color='#02A04B' /></Box>
                                            <Typography >{ subTitle.subTitle }</Typography>
                                        </Box>
                                    ) ) }
                                </Box>
                                <Image src={ module.data.image } width={ 590 } height={ 667 } alt='' />
                            </Stack>
                        </Grid>
                    ) }
                </Grid>
            </Container>
        </ModuleReadyToServe>
    );
};

export default ReadyToServe;