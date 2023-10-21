import CarIcon from "@components/CarIcon";
import SvgIcon from "@components/SvgIcon";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Divider, Grid, Modal, Stack, Typography, experimentalStyled, useMediaQuery } from "@mui/material";
import { ColorStyles, TextStyles } from "@theme/Designs";
import { MediaBreakpoints, Theme } from "@theme/MediaBreakpoints";
import Image from "next/image";
import { useState } from "react";
import ReactHtmlParser from 'react-html-parser';

const ModuleWillBringYou = experimentalStyled( Box )( ( { theme } ) => ( {
    backgroundColor: '#F0F1F3',
    padding: '128px 0 0',
    [ MediaBreakpoints( Theme.down.md ) ]: {
        padding: '64px 0 0',
    },
    '.MuiContainer-root': {
        '.bring-content': {
            display: 'flex',
            flexDirection: 'column',
            gap: 64,
            '.MuiGrid-root.MuiGrid-item': {
                display: 'flex',
                '.bring-title': {
                    width: 658,
                    textAlign: 'center',
                },
            },
            '.bring-content-social': {
                overflow: 'hidden',
                '.MuiGrid-root.MuiGrid-item': {
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 56,
                    '.MuiButtonBase-root': {
                        padding: 0,
                        transition: "color 0.2s linear",
                        '.bring-sub-title': {
                            width: '100%',
                            backgroundColor: ColorStyles.primary[ 600 ],
                            padding: 32,
                            '.MuiBox-root': {
                                display: 'flex',
                                flexDirection: 'column',
                            }
                        },
                        '.bring-sub-title-white': {
                            backgroundColor: ColorStyles.base.white,
                        },
                    },
                },
                '.bring-icon': {
                    padding: '8px 0',
                    svg: {
                        path: {
                            fill: ColorStyles.base.white,
                        }
                    }
                },
                '.bring-icon-select': {
                    padding: '8px 0',
                    svg: {
                        path: {
                            fill: ColorStyles.base.black,
                        }
                    }
                },
                '.bring-btn-content': {
                    width: '100%',
                },
                '.bring-vector': {
                    borderTop: `65px solid ${ ColorStyles.primary[ 600 ] }`,
                    borderLeft: '60px solid transparent',
                    transition: 'all 0.3s ease-in-out',
                },
                '.bring-vector-hidden': {
                    borderTop: '65px solid transparent',
                    borderLeft: '60px solid transparent',
                    transform: 'translateY( -100%)',
                },

                '.bring-sub-content': {
                    width: '100%',
                    backgroundColor: ColorStyles.primary[ 600 ],
                    padding: 32,
                    '.bring-sub-description': {
                        h5: {
                            margin: '35px 0 20px 0',
                            strong: {
                                ...TextStyles.displayXs.medium,
                            },
                        },
                    },
                    '.bring-sub-video': {
                        display: 'flex',
                        height: 190,
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
                    },
                    '.bring-sub-img': {
                        img: {
                            width: '100%',
                            height: 190,
                            objectFit: 'cover',
                            borderRadius: 8,
                        },
                    }
                }
            },
            [ MediaBreakpoints( Theme.down.md ) ]: {
                '.bring-accordion': {
                    border: '1px solid #D0D3D9',
                    '.MuiPaper-root': {
                        boxShadow: 'none',
                        '.MuiButtonBase-root': {
                            display: 'flex',
                            alignItems: 'start',
                            padding: 32,
                            '.MuiAccordionSummary-content': {
                                margin: 0,
                                '.MuiStack-root': {
                                    width: '100%'
                                }
                            }
                        },
                        '.bring-icon-select': {
                            svg: {
                                path: {
                                    fill: ColorStyles.base.black,
                                }
                            }
                        },
                        '.bring-accordion-content': {
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: ColorStyles.primary[ 600 ],
                            padding: 32,
                            '.bring-icon': {
                                svg: {
                                    path: {
                                        fill: ColorStyles.base.white,
                                    }
                                }
                            },
                            '.bring-sub-video': {
                                display: 'flex',
                                height: 190,
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
                            },
                            '.bring-sub-img': {
                                img: {
                                    width: '100%',
                                    height: 190,
                                    objectFit: 'cover',
                                    borderRadius: 8,
                                },
                            },
                            '.bring-sub-description': {
                                h5: {
                                    margin: '35px 0 20px 0',
                                    strong: {
                                        ...TextStyles.displayXs.medium,
                                    },
                                },
                            },
                        }
                    }
                },
            }
        },
        '.divider': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '64px 0',
            [ MediaBreakpoints( Theme.down.md ) ]: {
                padding: '32px 0',
            },
            '.MuiDivider-root': {
                width: 480,
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    width: '100%',
                }
            }
        }
    },
} ) );

const WillBringYou = ( { module, options } ) => {

    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );
    const subtitles = [ module.data.subTitle1, module.data.subTitle2, module.data.subTitle3 ];
    const images = [ module.data.isImage1, module.data.isImage2, module.data.isImage3 ];
    const videoURL = [ module.data.videoURL1, module.data.videoURL2, module.data.videoURL3 ];
    const [ isContent, setIsContent ] = useState( true );
    const [ selectContent, setSelectContent ] = useState( 0 );
    const [ indexContent, setIndexContent ] = useState( 0 );
    const [ expanded, setExpanded ] = useState( 0 );

    const [ open, setOpen ] = useState( false );
    const handleOpen = () => setOpen( true );
    const handleClose = () => setOpen( false );

    const handleIsContent = ( index ) => {
        setIsContent( true );
        setSelectContent( index );
        setIndexContent( index );
    };

    const handleChange = ( panel ) => ( event, newExpanded ) => {
        setExpanded( newExpanded ? panel : false );
    };

    return (
        <ModuleWillBringYou>
            <Container>
                <Grid container className="bring-content">
                    <Grid item xs={ 12 } md={ 12 } lg={ 12 } alignItems='center' justifyContent='center'>
                        <Stack direction='column' spacing={ 2.5 } className='bring-title'>
                            <Typography variant={ mdDown ? 'body5' : 'title6' }>{ module.data.title }</Typography>
                            <Typography variant={ mdDown ? 'description1' : 'description11' }>{ module.data.recap }</Typography>
                        </Stack>
                    </Grid>
                    {/* desktop */ }
                    {
                        !mdDown && (
                            <Grid container direction='row' className="bring-content-social">
                                <Grid item md={ 6 } lg={ 6 }>
                                    <Stack direction='column'>
                                        {
                                            subtitles.map( ( subtitle, index ) => (
                                                <Stack key={ index } direction='row' spacing={ 4 }>
                                                    <Button disableRipple onClick={ () => handleIsContent( index ) }>
                                                        <Stack direction='column' gap={ 2 } textAlign='left' className={ [ 'bring-sub-title', selectContent === index ? 'bring-sub-title' : 'bring-sub-title-white' ] }>
                                                            <Box className={ selectContent === index ? 'bring-icon' : 'bring-icon-select' }>
                                                                <CarIcon name={ [ 'megaphone', 'note', 'chats-circle' ][ index ] } width={ 32 } height={ 32 } />
                                                            </Box>
                                                            <Stack direction='column' spacing={ 1 } className='bring-btn-content'>
                                                                <Typography variant={ selectContent === index ? 'subtitle8' : 'subtitle1' }>{ subtitle }</Typography>
                                                                <Typography variant={ selectContent === index ? 'description10' : 'description1' }>{ module.data[ `description${ index + 1 }` ] }</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Button>
                                                    {
                                                        selectContent === index ? (
                                                            <Box className='bring-vector'></Box>
                                                        ) : (
                                                            <Box className='bring-vector-hidden' style={ { transform: index < selectContent ? 'translateY( 100%)' : 'translateY( -100%)' } }></Box>
                                                        )
                                                    }
                                                </Stack>
                                            ) )
                                        }
                                    </Stack>
                                </Grid>
                                {
                                    isContent && (
                                        <Grid item md={ 6 } lg={ 6 }>
                                            <Stack direction='column' className="bring-sub-content">
                                                {
                                                    images[ selectContent ] === '1' ? (
                                                        <Box className='bring-sub-img'>
                                                            <Image src='/socialMedialPage/image1.jpg' priority width={ 190 } height={ 190 } alt='' />
                                                        </Box>
                                                    ) : (
                                                        <Box className='bring-sub-video'>
                                                            <Image src='/socialMedialPage/image1.jpg' width={ 190 } height={ 190 } alt='' />
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
                                                                    <video src={ videoURL[ selectContent ] } controls={ true } width='100%' height='auto' />
                                                                </Box>
                                                            </Modal>
                                                        </Box>
                                                    )
                                                }
                                                <Stack direction='column' gap={ 2 } className="bring-sub-description">
                                                    <Stack alignItems='center' direction='row' gap={ 2 }>
                                                        {/* <Box className={ selectContent === indexContent ? 'bring-icon' : 'bring-icon-select' }>
                                                            <SvgIcon icon={ [ 'megaphone', 'notePencil', 'chatsCircle' ][ indexContent ] } />
                                                        </Box> */}
                                                        {/* <Typography variant="description3">
                                                            { subtitles[ selectContent ] }
                                                        </Typography> */}
                                                        <Typography variant="text10">
                                                            { ReactHtmlParser( module.data[ `content${ selectContent + 1 }` ] ) }
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        </Grid>
                                    )
                                }
                            </Grid>
                        )
                    }

                    {/* mobile */ }
                    {
                        mdDown && (
                            <Grid container>
                                <Grid item xs={ 12 } md={ 12 }>
                                    <Stack direction='column' className="bring-accordion">
                                        { subtitles.map( ( subtitle, index ) => (
                                            <Accordion
                                                expanded={ expanded === index + 1 }
                                                onChange={ handleChange( index + 1 ) }
                                                key={ index }
                                            >
                                                <AccordionSummary>
                                                    <Stack direction='column' spacing={ 2 }>
                                                        <Stack direction='row' justifyContent='space-between' className='bring-icon-select'>
                                                            <CarIcon name='question' width={ 32 } height={ 32 } />
                                                            <CarIcon name={ expanded === index + 1 ? 'minus' : 'plus' } width={ 32 } height={ 32 } />
                                                        </Stack>
                                                        <Stack spacing={ 1 }>
                                                            <Typography variant="subtitle1">{ subtitle }</Typography>
                                                            <Typography variant="description1">{ module.data[ `description${ index + 1 }` ] }</Typography>
                                                        </Stack>
                                                    </Stack>
                                                </AccordionSummary>
                                                <AccordionDetails className="bring-accordion-content">
                                                    {
                                                        images[ selectContent ] === '1' ? (
                                                            <Box className='bring-sub-img'>
                                                                <Image src='/socialMedialPage/image1.jpg' priority width={ 190 } height={ 190 } alt='' />
                                                            </Box>
                                                        ) : (
                                                            <Box className='bring-sub-video'>
                                                                <Image src='/socialMedialPage/image1.jpg' width={ 190 } height={ 190 } alt='' />
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
                                                                            backgroundColor: 'transparent',
                                                                            boxShadow: 24,
                                                                            width: '70%',
                                                                            height: 'auto'
                                                                        }
                                                                    }>
                                                                        <video src={ videoURL[ selectContent ] } controls={ true } width='100%' height='auto' />
                                                                    </Box>
                                                                </Modal>
                                                            </Box>
                                                        )
                                                    }
                                                    <Stack direction='column' gap={ 2 } className="bring-sub-description">
                                                        <Stack alignItems='center' direction='row'>
                                                            {/* <Box className='bring-icon'>
                                                                <SvgIcon icon={ [ 'megaphone', 'notePencil', 'chatsCircle' ][ index ] } />
                                                            </Box>
                                                            <Typography variant="description3">
                                                                { subtitle }
                                                            </Typography> */}
                                                            <Typography variant="text10">
                                                                { ReactHtmlParser( module.data[ `content${ index + 1 }` ] ) }
                                                            </Typography>
                                                        </Stack>

                                                    </Stack>
                                                </AccordionDetails>
                                            </Accordion>
                                        ) ) }
                                    </Stack>
                                </Grid>
                            </Grid>

                        )
                    }
                </Grid>
                <Box className="divider"><Divider /></Box>
            </Container>
        </ModuleWillBringYou >
    );
};

export default WillBringYou;