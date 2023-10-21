import ButtonAction from "@components/ButtonAction";
import CarIcon from "@components/CarIcon";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, Stack, Typography, experimentalStyled, useMediaQuery } from "@mui/material";
import { ColorStyles, TextStyles } from "@theme/Designs";
import { MediaBreakpoints, Theme } from "@theme/MediaBreakpoints";
import { useState } from "react";
import ReactHtmlParser from 'react-html-parser';

const ModuleFaq = experimentalStyled( Box )( ( { theme } ) => ( {
    padding: '128px 112px',
    backgroundColor: ColorStyles.base.white,
    [ MediaBreakpoints( Theme.down.md ) ]: {
        padding: '64px 0',
    },
    '.faq-content-questions': {
        '.MuiPaper-root': {
            boxShadow: 'none',
            padding: '16px 0',
            '.MuiButtonBase-root': {
                padding: 0,
            },
            '.MuiCollapse-root': {
                '.MuiCollapse-wrapper': {
                    '.MuiCollapse-wrapperInner': {
                        '.MuiAccordion-region': {
                            '.MuiAccordionDetails-root': {
                                padding: 32,
                                borderRadius: '0 0 8px 8px',
                                borderRight: '1px solid #D0D3D9',
                                borderLeft: '1px solid #D0D3D9',
                                borderBottom: '1px solid #D0D3D9',
                                borderTop: '1px solid #D0D3D9',
                            }
                        }
                    },
                },
            }
        },
        '.faq-content-icon-chevronUp': {
            color: ColorStyles.primary[ 600 ],
            height: 32,
            width: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        '.MuiAccordionSummary-root': {
            display: 'flex',
            alignItems: 'flex-start',
            '.MuiAccordionSummary-content': {
                margin: 0,
                '.MuiStack-root': {
                    alignItems: 'flex-start',
                    '.faq-questions': {
                        color: ColorStyles.primary[ 600 ],
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // svg: {
                        //     height: 32,
                        //     width: 32,
                        // }
                    },
                    '.MuiTypography-root': {
                        color: '#02A04B'
                    }
                }
            }
        },
    },
    '.faq-content-bottom': {
        backgroundColor: '#F0F1F3',
        padding: 32,
        margin: '0 70px',
        borderRadius: 8,
        [ MediaBreakpoints( Theme.down.md ) ]: {
            margin: 0,
        },
        textAlign: 'center',
        strong: {
            display: 'inline-block',
            marginBottom: 16,
            color: '#101828',
            ...TextStyles.textXl.bold
        },
        a: {
            '.MuiButtonBase-root': {
                width: '135px !important',
                height: '45px !important'
            },
        }
    },
} ) );

const Faq = ( { module, options } ) => {
    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );
    const [ expanded, setExpanded ] = useState( null );

    const handleChange = ( index ) => ( event, isExpanded ) => {
        setExpanded( isExpanded ? index : null );
    };

    const faq = [
        {
            question: module.data.question1,
            answer: module.data.answer1,
        },
        {
            question: module.data.question2,
            answer: module.data.answer2,
        },
        {
            question: module.data.question3,
            answer: module.data.answer3,
        },
        {
            question: module.data.question4,
            answer: module.data.answer4,
        },
        {
            question: module.data.question5,
            answer: module.data.answer5,
        },
        {
            question: module.data.question6,
            answer: module.data.answer6,
        },
        {
            question: module.data.question7,
            answer: module.data.answer7,
        }
    ];

    return (
        <ModuleFaq>
            <Container>
                <Grid container direction='column' spacing={ 8 }>
                    <Grid item xs={ 12 } md={ 12 } lg={ 12 }>
                        <Stack direction='column' spacing={ 2 } textAlign='center'>
                            <Typography variant='title6'>{ module.data.title }</Typography>
                            <Typography variant={ mdDown ? 'description1' : 'description11' }>{ module.data.recap }</Typography>
                        </Stack>
                    </Grid>

                    <Grid item xs={ 12 } md={ 12 } lg={ 12 }>
                        <Stack direction='column' className="faq-content-questions">
                            { faq.map( ( faq, index ) => {
                                if ( !faq.question ) return;

                                return (
                                    <Accordion key={ index } expanded={ expanded === index } onChange={ handleChange( index ) }>
                                        <AccordionSummary
                                            expandIcon={ <Box className="faq-content-icon-chevronUp">
                                                <CarIcon name={ expanded === index ? 'minus-circle' : 'plus-circle' } width={ mdDown ? 24 : 32 } height={ mdDown ? 24 : 32 } />
                                            </Box> }
                                        >
                                            <Stack direction='row' alignItems='center' spacing={ mdDown ? 1 : 2 }>
                                                <Box className='faq-questions'>
                                                    {/* <SvgIcon icon="question" /> */ }
                                                    <CarIcon name='question' width={ mdDown ? 24 : 32 } height={ mdDown ? 24 : 32 } />
                                                </Box>
                                                <Typography variant="title1">{ faq.question }</Typography>
                                            </Stack>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant="subtitle5">
                                                { ReactHtmlParser( faq.answer ) }
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                );
                            } ) }
                        </Stack>
                    </Grid>

                    <Grid item xs={ 12 } md={ 12 } lg={ 12 }>
                        <Stack direction='column' spacing={ 3 } alignItems='center' className="faq-content-bottom">
                            <Stack direction='column' alignItems='center' spacing={ 2 }>
                                <Typography variant="body7">
                                    { ReactHtmlParser( module.data.description ) }
                                </Typography>
                            </Stack>
                            <ButtonAction href={ module.data.buttonURL }>
                                { module.data.buttonLabel }
                            </ButtonAction>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </ModuleFaq>
    );
};

export default Faq;