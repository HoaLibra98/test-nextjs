import CarIcon from "@components/CarIcon";
import { Avatar, Box, Container, Grid, Stack, Typography, experimentalStyled, useMediaQuery } from "@mui/material";
import { MediaBreakpoints, Theme } from "@theme/MediaBreakpoints";

const ContentOptions = ( { module, options } ) => {
    const ModuleContentOptions = experimentalStyled( Box )( ( { theme } ) => ( {
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
        '.content-content-option': {
            padding: '128px 0',
            position: 'relative',
            [ MediaBreakpoints( Theme.down.md ) ]: {
                padding: '64px 16px',
            },
            '.content-options-title': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 64,
                '.MuiStack-root': {
                    width: 575,
                    textAlign: 'center',
                },
            },
            '.content-options-description': {
                [ MediaBreakpoints( Theme.down.md ) ]: {
                    padding: '0 44px',
                },
                '.MuiGrid-root.MuiGrid-container': {
                    '.MuiTypography-body3': {
                        marginBottom: 0
                    },
                    '.MuiTypography-subtitle6': {
                        margin: '32px 0 8px 0',
                    }
                }
            }
        }
    } ) );

    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );

    const contents = [
        {
            icon: module.data.icon1,
            title: module.data.subTitle1,
            desc: module.data.description1
        },
        {
            icon: module.data.icon2,
            title: module.data.subTitle2,
            desc: module.data.description2
        },
        {
            icon: module.data.icon3,
            title: module.data.subTitle3,
            desc: module.data.description3
        },
        {
            icon: module.data.icon4,
            title: module.data.subTitle4,
            desc: module.data.description4
        },
        {
            icon: module.data.icon5,
            title: module.data.subTitle5,
            desc: module.data.description5
        },
        {
            icon: module.data.icon6,
            title: module.data.subTitle6,
            desc: module.data.description6
        }
    ];

    return (
        <ModuleContentOptions>
            <Container>
                <Grid container className="content-content-option">
                    <Grid item xs={ 12 } lg={ 12 } className='content-options-title'>
                        <Stack direction='column' spacing={ mdDown ? 1.5 : 2 } >
                            <Typography variant={ mdDown ? 'body11' : 'banner1' }>{ module.data.title }</Typography>
                            <Typography variant={ mdDown ? 'text10' : 'description7' }>{ module.data.recap }</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={ 12 } lg={ 12 } className="content-options-description">
                        <Grid container spacing={ mdDown ? 4 : 8 } sx={ { justifyContent: 'center', alignItems: 'flex-start' } }>
                            {
                                contents && contents.map( ( content, index ) => (
                                    <Grid key={ `content-option-${ index }` } item sx={ {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                    } } xs={ 12 } md={ 6 } lg={ parseInt( module.data.cols ) || 3 } >
                                        <Avatar sx={ { bgcolor: '#ffffff', width: '64px', height: '64px' } }>
                                            <CarIcon name={ content.icon } size={ 32 } color='#12B76A' />
                                        </Avatar>
                                        <Typography variant="subtitle6" paragraph>{ content.title }</Typography>
                                        <Typography variant="body3" paragraph>{ content.desc }</Typography>
                                    </Grid>
                                ) )
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ModuleContentOptions>
    );
};

export default ContentOptions;