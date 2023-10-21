import BlockTitle from "@components/BlockTitle";
import ButtonAction from "@components/ButtonAction";
import { Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

function Posts( { module, options } ) {

    const mdDown = useMediaQuery( ( theme ) => theme.breakpoints.down( 'md' ) );

    return (
        <Container>
            <Grid container spacing={ 4 } my={ 8 }>
                <BlockTitle variantTile="heading1" variantDesc="description2" title={ module.data.title } description={ [] } field='homepage.webdesign' />

                <Grid item xs={ 12 } md={ 6 }>
                    <Image src="/image/dealership.png" alt="dealership.png" width={ 500 } height={ 453 } />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <Stack direction="column" alignItems="flex-start" spacing={ 4 } >
                        <Typography variant="description">{ module.data.description } </Typography>
                        <ButtonAction href="/pricing">
                            View Pricing
                        </ButtonAction>
                    </Stack>
                </Grid>
            </Grid >
        </Container>
    );
}

export default Posts;