import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import ReactHtmlParser from 'react-html-parser';

const Video = ( { module, options } ) => {

    if ( !module.data ) return;

    return (
        <Container>
            <Grid container spacing={ 3 } py={ 8 } flexDirection={ module.data.videoPosition === 'right' ? 'row-reverse' : '' } >
                <Grid item xs={ 12 } md={ 6 } >
                    <Box width="100%" height="100%" >
                        { module.data.video !== undefined && <video
                            src={ module.data.video }
                            controls={ true }
                            style={ { borderRadius: '10px', width: '100%', height: "100%" } }
                        /> }
                    </Box>
                </Grid>
                <Grid item xs={ 12 } md={ 6 } >
                    <Stack spacing={ 4 } p={ 2 } justifyContent="space-between" height="100%">
                        <Typography variant='description' >
                            { ReactHtmlParser( module.data.description ) }
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Video;