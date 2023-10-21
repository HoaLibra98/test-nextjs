import ButtonAction from '@components/ButtonAction';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import ReactHtmlParser from 'react-html-parser';

function Banner( { module, options } ) {
    if ( !module.data ) return;

    return (
        <Container>
            <Grid container spacing={ 0 } py={ 8 } >
                <Grid item xs={ 12 } md={ 5 } >
                    <Stack direction="column" spacing={ 2 } alignItems="start">
                        <Typography sx={ { display: 'inline-block' } } variant='banner'>
                            { ReactHtmlParser( module.data.introText ) }
                        </Typography>
                        <Typography variant="description1" >{ ReactHtmlParser( module.data.description ) }</Typography>
                        { module.data.link && <ButtonAction variant='primary-2' href="#">Schedule a Live Demo</ButtonAction> }
                    </Stack>
                </Grid>
                <Grid item xs={ 12 } md={ 7 } >
                    <Box className="banner-home">
                        <Image src='/image/banner.png' width={ 699 } height={ 618 } alt="Banner" />
                        {/* { module.data.image && <Image src={ module.data.image } width={ 699 } height={ 618 } alt="Banner" /> } */ }
                    </Box>
                </Grid>
            </Grid >
        </Container>
    );
}

export default Banner;