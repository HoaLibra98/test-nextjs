import CarIcon from "@components/CarIcon";
import SliderSlick from "@components/SlickSlider";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { Box, Button, Collapse, Container, Divider, Fade, Grid, Stack, Tab, Typography, experimentalStyled, useMediaQuery } from "@mui/material";
import breakpoints from "@theme/Breakpoints";
import { ColorStyles, TextStyles } from "@theme/Designs";
import { MediaBreakpoints, Theme } from "@theme/MediaBreakpoints";
import { useState } from "react";
import ReactHtmlParser from 'react-html-parser';

const ModuleCreationProcess = experimentalStyled( Box )( ( { theme } ) => ( {
    paddingBottom: 128,
    [ MediaBreakpoints( Theme.down.md ) ]: {
        paddingBottom: 128,
    },
    '.MuiContainer-root': {
        '.creation-process-container': {
            padding: '64px 0 64px',
            [ MediaBreakpoints( Theme.down.md ) ]: {
                padding: '32px 0 32px',
            },
            '.creation-process-title': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '.MuiStack-root': {
                    maxWidth: 766,
                    textAlign: 'center',
                },
            },
        }
    },
    '.MuiStack-root': {
        '.process-desktop': {
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 0,
            '&:after': {
                content: '""',
                width: 24,
                height: 24,
                borderColor: '#D0D3D9 !important',
                position: 'absolute',
                top: '31px',
                borderBottom: '4px solid',
                borderLeft: '4px solid',
                transform: 'rotate( -135deg )',
                right: 0,
                backgroundColor: 'unset',
            },
            '.MuiTimelineItem-root': {
                '.MuiTimelineSeparator-root': {
                    '.MuiButtonBase-root': {
                        minWidth: 76,
                        minHeight: 76,
                        backgroundColor: '#E6F6ED',
                        borderRadius: '50%',
                        border: `4px solid ${ ColorStyles.base.white }`,
                        opacity: 1,
                    },
                    '.MuiButtonBase-root.Mui-selected': {
                        backgroundColor: '#B4D524',
                        svg: {
                            path: {
                                fill: '#015829',
                            }
                        },
                    },
                    '.MuiTypography-root': {
                        marginTop: 24,
                        maxWidth: '100%',
                        whiteSpace: 'nowrap',
                        textAlign: 'center',
                    },
                    '.MuiTypography-root.Mui-selected': {
                        color: '#B4D524',
                    },
                },
                '&::before': {
                    flex: 0,
                    padding: 0
                },
            },
            '.MuiDivider-root': {
                position: 'absolute',
                width: '100%',
                backgroundColor: '#D0D3D9',
                left: 0,
                top: 41,
                borderWidth: 2,
            },
            '.timeline-dot': {
                position: 'absolute',
                left: 0,
                top: 24,
                '.MuiTimelineDot-root': {
                    borderWidth: 4,
                    borderColor: '#D0D3D9',
                    backgroundColor: '#D0D3D9',
                }
            },
            '.arrow-right': {
                width: 24,
                height: 24,
                borderColor: '#D0D3D9 !important',
                position: 'absolute',
                top: '45%',
                marginTop: '-31px',
                borderBottom: '4px solid',
                borderLeft: '4px solid',
                transform: 'rotate( -135deg )',
                right: 0,
                backgroundColor: 'unset',
            },

        },
        '.MuiBox-root': {
            marginTop: 24,
            borderRadius: 8,
            padding: '48px 32px',
            borderRadius: 8,
            '.timeline-item': {
                opacity: 0,
                transition: 'opacity 0.3s ease-out',
            },
            '.timeline-item-active': {
                opacity: 1,
                transition: 'opacity 0.3s ease-out',
            },
            '.MuiTypography-root.MuiTypography-description1': {
                h5: {
                    strong: {
                        color: ColorStyles.gray[ 900 ],
                        ...TextStyles.displayXs.bold
                    }
                },
                'strong': {
                    display: 'inline-block',
                    fontSize: '24px',
                    color: '#48505E',
                    fontWeight: 500,
                },
                p: {
                    marginBottom: 32,
                }
            },
        }
    },
    '.slick-slider': {
        backgroundColor: ColorStyles.gray[ 100 ],
        // minHeight: 350,
        position: 'relative',
        '.slick-dots': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: -45,
            gap: 12,
            transform: "translateY(1em)",
            'li.slick-active': {
                backgroundColor: '#02A04B',
                width: 32,
                borderRadius: '8px',
                height: 14,
            },
            'li.slick-active button': {
                backgroundColor: '#02A04B',
                width: 32,
                borderRadius: '8px',
                height: 14,
            },
            '& li.slick-active button::before': {
                content: 'none'
            },
            li: {
                width: 8,
                height: 8,
            },
            '& li': {
                '& button::before': {
                    color: '#858D9D',
                    opacity: 1,
                    borderRadius: 8,
                    top: '-4px',
                    left: '-6px',
                }
            }
        },
        '.MuiStack-root': {
            display: 'flex !important',
            padding: '64px 32px',
            '.MuiBox-root': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: 0,
                padding: 0,
                '.icon': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#B4D524',
                    borderRadius: '50%',
                    margin: 0,
                    padding: 18,
                    border: '4px solid #ffffff'
                },
            },
            '.MuiStack-root': {
                padding: 0,
                '.MuiTypography-root.MuiTypography-description1': {
                    h5: {
                        margin: '0 0 16px 0',
                        strong: {
                            ...TextStyles.displayXs.bold,
                            color: ColorStyles.gray[ 900 ],
                        }
                    }
                }
            }

        },
    },
    '.position': {
        position: 'relative',
    },
    '.arows-items-2': {
        '.MuiButton-button-slick-2': {
            display: 'none',
        },
        '.MuiButton-button-slick-3': {
            position: 'absolute',
            right: 0,
            top: 64,
            backgroundColor: '#d0d3d966',
            padding: 18,
            marginRight: 32,
            borderRadius: 100,
            border: `4px solid ${ ColorStyles.base.white }`,
            svg: {
                g: {
                    path: {
                        fill: ColorStyles.base.white
                    }
                }
            },
            opacity: 0,
        }
    },
    '.vertical': {
        position: 'relative',
        '.MuiTimelineItem-root': {
            '&::before': {
                content: 'unset'
            },
            '.timeline-dot-icon': {
                margin: 0,
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#B4D524',
                border: `4px solid ${ ColorStyles.base.white }`,
                svg: {
                    width: 24,
                    height: 24,
                }
            }
        },
        '.description-review': {
            padding: 0,
            position: 'relative',
            marginLeft: 5,
            marginBottom: 32,
            '.MuiTypography-root.MuiTypography-subtitle1': {
                // marginTop: 10
            },
            '.MuiTypography-root.MuiTypography-description1': {
                'p:first-of-type': {
                    marginTop: 16,
                    padding: '32px 24px 0'
                },
                p: {
                    padding: '0 24px'
                },
                'p:last-child': {
                    padding: '0 24px 32px'
                },
            },
            '.MuiStack-root': {
                padding: '32px 24px 80px',
                '.MuiTypography-root.MuiTypography-description1': {
                    marginTop: 0,
                    padding: 0,
                },
            },
            '.description-show-review': {
                display: 'flex',
                justifyContent: 'center',
                marginTop: 16,
                borderRadius: 8,
                '.description-process': {
                    background: `linear-gradient( to bottom, ${ ColorStyles.base.white } 70%, #c0c3c9 100%)`,
                    borderRadius: 8,
                    '.MuiTypography-description1': {
                        h5: {
                            display: 'none'
                        },
                        p: {
                            padding: 0,
                            paddingBottom: 5,
                        }
                    },
                },
                '.show-more': {
                    position: 'absolute',
                    bottom: 8,
                    marginTop: 0,
                    transition: 'bottom 0.3s ease',
                    zIndex: 1,
                    padding: 0,
                    '&:hover': {
                        backgroundColor: 'unset'
                    },
                },
                '.show-less': {
                    // backgroundColor: ColorStyles.base.white,
                    position: 'absolute',
                    bottom: 25,
                    marginTop: 0,
                    width: '100%',
                    padding: 0,
                },
            },
        },
        '.arrow-bottom': {
            width: 24,
            height: 24,
            borderColor: '#D0D3D9!important',
            position: 'absolute',
            bottom: 6,
            left: 20,
            marginTop: '-31px',
            borderRight: '4px solid',
            borderBottom: '4px solid',
            transform: 'rotate( 45deg )',
            right: 0,
            backgroundColor: 'unset',
        }
    }
} ) );

const CreationProcess = ( { module, options } ) => {
    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );

    const steps = [
        {
            icon: module.data.icon1,
            subTitle: module.data.subTitle1,
            description: module.data.description1,
        },
        {
            icon: module.data.icon2,
            subTitle: module.data.subTitle2,
            description: module.data.description2,
        },
        {
            icon: module.data.icon3,
            subTitle: module.data.subTitle3,
            description: module.data.description3,
        },
        {
            icon: module.data.icon4,
            subTitle: module.data.subTitle4,
            description: module.data.description4,
        },
        {
            icon: module.data.icon5,
            subTitle: module.data.subTitle5,
            description: module.data.description5,
        },
        {
            icon: module.data.icon6,
            subTitle: module.data.subTitle6,
            description: module.data.description6,
        },
    ];

    const [ value, setValue ] = useState( 0 );
    const [ values, setValues ] = useState( Array( steps.length ).fill( false ) );

    const toggleShowAll = ( index ) => {
        const newValues = values.map( ( value, i ) => i === index ? !value : false );
        setValues( newValues );
    };

    const renderProcess = ( description, index ) => {
        const maxLength = 320;
        const trimmedDescription = description.length > maxLength ? description.substring( 0, maxLength ) + '...' : description;
        const isCollapseOpen = values[ index ];

        return (
            <Box>
                <Collapse in={ isCollapseOpen }>
                    <Box className="description-show-review" style={ { backgroundColor: module.data.bgcolorContent } }>
                        <Stack className="description-process" style={ { background: '#FFFFFF' } }>
                            <Typography variant="description1">{ ReactHtmlParser( description ) }</Typography>
                        </Stack>
                        { isCollapseOpen && (
                            <Button disableRipple className="show-less" onClick={ () => toggleShowAll( index ) }>
                                <CarIcon name="caret-double-up" width={ 40 } height={ 40 } fill="#101828" />
                            </Button>
                        ) }
                    </Box>
                </Collapse>

                <Collapse in={ !isCollapseOpen } >
                    <Box className="description-show-review" style={ { backgroundColor: module.data.bgcolorContent } }>
                        <Stack className="description-process">
                            <Typography variant="description1">{ ReactHtmlParser( trimmedDescription ) }</Typography>
                        </Stack>
                        { !isCollapseOpen && (
                            <Button disableRipple className="show-more" onClick={ () => toggleShowAll( index ) }>
                                <CarIcon name="caret-double-down" width={ 40 } height={ 40 } fill="#101828" />
                            </Button>
                        ) }
                    </Box>
                </Collapse>
            </Box>
        );
    };

    const settings = {
        slidesToShow: 1,
        centerMode: false,
        infinite: true,
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

    const [ timeLine, setTimeLine ] = useState( true );
    const handleTime = ( index ) => {
        setTimeLine( false );
        setTimeout( () => {
            setTimeLine( true );
            setValue( index );
        }, 300 );
    };

    return (
        <ModuleCreationProcess style={ { backgroundColor: `${ module.data.bgcolor }` } }>
            <Container>
                <Grid container className="creation-process-container">
                    <Grid item xs={ 12 } lg={ 12 } className='creation-process-title'>
                        <Stack direction='column' spacing={ 2.5 } >
                            <Typography variant='body5'>{ module.data.title }</Typography>
                            <Typography variant='description1'>{ module.data.recap }</Typography>
                        </Stack>
                    </Grid>
                </Grid>
                { !mdDown ? (
                    <Stack>
                        <Timeline position="left" className='process-desktop'>
                            <Divider />
                            <TimelineSeparator className="timeline-dot">
                                <TimelineDot />
                            </TimelineSeparator>
                            { steps.map( ( step, index ) => {
                                if ( !step.subTitle ) return;

                                return (
                                    <TimelineItem key={ `process-desktop-${ index }` }>
                                        <TimelineSeparator>
                                            <Tab
                                                disableRipple
                                                icon={ <CarIcon name={ step.icon } width={ 32 } height={ 32 } fill='#015829' /> }
                                                onClick={ () => handleTime( index ) }
                                                className={ value === index ? "Mui-selected" : "" }
                                            />
                                            <Typography variant="description1" className={ value === index ? "Mui-selected" : "" }>{ step.subTitle }</Typography>
                                        </TimelineSeparator>
                                    </TimelineItem>
                                );
                            } ) }
                        </Timeline>
                        <Box style={ { backgroundColor: `${ module.data.bgcolorContent }` } }>
                            <Fade in={ timeLine } timeout={ 500 } >
                                <Typography variant="description1">
                                    { ReactHtmlParser( steps[ value ].description ) }
                                </Typography>
                            </Fade>
                        </Box>
                    </Stack>
                ) : (
                    <>
                        {
                            module.data.type === 'horizone' ? (
                                <SliderSlick settings={ settings } isArows={ true } >
                                    { steps.map( ( step, index ) => {
                                        if ( !step.subTitle ) return;

                                        return (
                                            <Stack key={ `horizone-${ index }` } spacing={ 6 }>
                                                <Box>
                                                    <Box className="icon"><CarIcon name={ step.icon } width={ 32 } height={ 32 } fill='#015829' /></Box>
                                                    <Button className="icon" style={ { backgroundColor: '#d0d3d966' } }><CarIcon name='caret-right' width={ 32 } height={ 32 } fill='#ffffff' /></Button>
                                                </Box>
                                                <Stack gap={ 4 }>
                                                    <Typography variant="description1">{ ReactHtmlParser( step.description ) }</Typography>
                                                </Stack>
                                            </Stack>
                                        );
                                    } ) }
                                </SliderSlick>
                            ) : (
                                <Timeline className="vertical">
                                    <TimelineItem sx={ { marginLeft: '10px', minHeight: '35px' } }>
                                        <TimelineSeparator>
                                            <TimelineDot sx={ { margin: 0 } } />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                    </TimelineItem>
                                    { steps.map( ( step, index ) => {
                                        if ( !step.subTitle ) return;

                                        return (
                                            <TimelineItem key={ index }>
                                                <TimelineSeparator>
                                                    <TimelineDot className="timeline-dot-icon">
                                                        <CarIcon name={ step.icon } width={ 32 } height={ 32 } fill='#015829' />
                                                    </TimelineDot>
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent className="description-review" sx={ { py: '12px', px: 2 } }>
                                                    <Typography variant="subtitle1" >{ step.subTitle }</Typography>
                                                    { renderProcess( step.description, index ) }
                                                </TimelineContent>
                                            </TimelineItem>
                                        );
                                    } ) }
                                    <Box className="arrow-bottom" />
                                </Timeline>
                            )
                        }
                    </>
                ) }
            </Container>
        </ModuleCreationProcess>
    );
};

export default CreationProcess;