import SliderSlick from "@components/SlickSlider";
import SvgIcon from "@components/SvgIcon";
import { Timeline, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { Box, Container, Divider, Grid, Stack, Tab, Typography, useMediaQuery } from "@mui/material";
import breakpoints from "@theme/Breakpoints";
import { useState } from "react";
import ReactHtmlParser from 'react-html-parser';

const MonitoringProcess = ( { module, options } ) => {
    const [ value, setValue ] = useState( 0 );
    const isMobile = useMediaQuery( ( theme ) => theme.breakpoints.down( 'md' ) );
    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );

    const settings = {
        slidesToShow: 1,
        centerMode: false,
        infinite: false,
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
    const steps = [
        {
            icon: 'megaphone2',
            subTitle: module.data.subTitle1,
            description: module.data.description1,
        },
        {
            icon: 'notePencil2',
            subTitle: module.data.subTitle2,
            description: module.data.description2,
        },
        {
            icon: 'chatsCircle2',
            subTitle: module.data.subTitle3,
            description: module.data.description3,
        },
    ];

    return (
        <Box className="module-services-monitoring-process">
            <Container>
                <Grid container >
                    <Grid item xs={ 12 } lg={ 12 } className='creation-process-title'>
                        <Stack direction='column' spacing={ 2.5 } >
                            <Typography variant={ mdDown ? 'body5' : 'title6' }>{ module.data.title }</Typography>
                            <Typography variant='description1'>{ module.data.recap }</Typography>
                        </Stack>
                    </Grid>
                </Grid>
                { !isMobile ? (
                    <Stack>
                        <Timeline position="left">
                            <Divider />
                            <TimelineSeparator className="timeline-dot">
                                <TimelineDot />
                            </TimelineSeparator>
                            { steps.map( ( step, index ) => (
                                <TimelineItem key={ index }>
                                    <TimelineSeparator>
                                        <Tab
                                            disableRipple
                                            icon={ <SvgIcon icon={ step.icon } /> }
                                            onClick={ () => setValue( index ) }
                                            className={ value === index ? "Mui-selected" : "" }
                                        />
                                        <Typography variant="description1">{ step.subTitle }</Typography>
                                    </TimelineSeparator>
                                </TimelineItem>
                            ) ) }
                            <Box className="arrow-right" />
                        </Timeline>
                        <Box>
                            <Box>
                                <Typography variant="subtitle1">
                                    { value === 0 && module.data.subTitle1 }
                                    { value === 1 && module.data.subTitle2 }
                                    { value === 2 && module.data.subTitle3 }
                                </Typography>
                                <Typography variant="description1">
                                    { value === 0 && ReactHtmlParser( module.data.description1 ) }
                                    { value === 1 && ReactHtmlParser( module.data.description2 ) }
                                    { value === 2 && ReactHtmlParser( module.data.description3 ) }
                                </Typography>
                            </Box>
                        </Box>
                    </Stack>

                ) : (
                    <SliderSlick settings={ settings } isArows={ false }>
                        { steps.map( ( step, index ) => (
                            <Stack key={ index } spacing={ 4 }>
                                <Box><SvgIcon icon={ step.icon } /></Box>
                                <Stack spacing={ 1 }>
                                    <Typography variant="subtitle1">{ step.subTitle }</Typography>
                                    <Typography variant="description1">{ ReactHtmlParser( step.description ) }</Typography>
                                </Stack>
                            </Stack>
                        ) ) }
                    </SliderSlick>
                ) }
            </Container>
        </Box>
    );
};

export default MonitoringProcess;
