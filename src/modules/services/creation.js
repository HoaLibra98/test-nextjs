import SvgIcon from "@components/SvgIcon";
import { Box, Container, Divider, Grid, Stack, Typography, experimentalStyled, useMediaQuery } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import { MediaBreakpoints, Theme } from "@theme/MediaBreakpoints";

const ModuleCreation = experimentalStyled( Box )( ( { theme } ) => ( {
    '.creation-container': {
        padding: '128px 0 64px',
        [ MediaBreakpoints( Theme.down.md ) ]: {
            padding: '64px 0 32px',
        },
        '.creation-title': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 64,
            '.MuiStack-root': {
                width: 684,
                textAlign: 'center',
                alignItems: 'center',
                '.MuiTypography-description6': {
                    width: 588,
                    color: ColorStyles.gray[ 500 ],
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        width: '100%',
                    },
                }
            },
        },
        '.MuiGrid-root.MuiGrid-item': {
            '.MuiGrid-root.MuiGrid-container': {
                '.MuiStack-root': {
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    '.MuiTypography-subtitle1': {
                        marginBottom: '8px',
                    },
                }
            }
        },
    },
    '.divider': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '.MuiDivider-root': {
            width: 480,
            background: '#D0D3D9',
            [ MediaBreakpoints( Theme.down.sm ) ]: {
                width: '100%',
            }
        }
    }
} ) );

const Creation = ( { module, options } ) => {
    const mdDown = useMediaQuery( theme => theme.breakpoints.down( 'sm' ) && theme.breakpoints.down( 'md' ) );

    return (
        <ModuleCreation>
            <Container>
                <Grid container className="creation-container" >
                    <Grid item xs={ 12 } lg={ 12 } className='creation-title'>
                        <Stack direction='column' spacing={ 2.5 } >
                            <Typography variant={ mdDown ? 'body5' : 'title6' }>{ module.data.title }</Typography>
                            <Typography variant='description6'>{ module.data.recap }</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={ 12 } lg={ 12 }>
                        <Grid container spacing={ 4 } >
                            <Grid item xs={ 12 } md={ 6 } lg={ 3 } >
                                <Stack spacing={ 4 } height="100%">
                                    <SvgIcon icon="bezierCurve" />
                                    <Box>
                                        <Typography variant='subtitle1' >{ module.data.subTitle1 }</Typography>
                                        <Typography variant='description1' >{ module.data.description1 }</Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={ 12 } md={ 6 } lg={ 3 }>
                                <Stack spacing={ 4 } height="100%">
                                    <SvgIcon icon="swatches" />
                                    <Box>
                                        <Typography variant='subtitle1' >{ module.data.subTitle2 }</Typography>
                                        <Typography variant='description1' >{ module.data.description2 }</Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={ 12 } md={ 6 } lg={ 3 }>
                                <Stack spacing={ 4 } height="100%">
                                    <SvgIcon icon="fileImage" />
                                    <Box>
                                        <Typography variant='subtitle1' >{ module.data.subTitle3 }</Typography>
                                        <Typography variant='description1' >{ module.data.description3 }</Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={ 12 } md={ 6 } lg={ 3 }>
                                <Stack spacing={ 4 } height="100%">
                                    <SvgIcon icon="chalkboard" />
                                    <Box>
                                        <Typography variant='subtitle1' >{ module.data.subTitle4 }</Typography>
                                        <Typography variant='description1' >{ module.data.description4 }</Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Box className="divider"><Divider /></Box>
            </Container>
        </ModuleCreation>
    );
};

export default Creation;