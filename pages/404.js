import imageEroor from "@assets/images/logos/error.svg";
import { Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const Error = () => {
    const router = useRouter();
    return (
        <Grid container alignItems='center' justifyContent='center' className="page-404">
            <Grid item xs={ 12 } md={ 8 }>
                <Stack direction="column" alignItems="center" spacing={ 3 } textAlign="center" className="image-404">
                    <Image src={ imageEroor } alt="" width={ 450 } height={ 450 } />
                    <Typography variant="h2">
                        Page not found
                    </Typography>
                    <Typography variant="description6" paragraph>
                        { "The Page You Are Looking For Doesn't Exist. Here Are Some Helpful Links:" }
                    </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="center" spacing={ 2 } className="btn-404">
                    <Button variant="btn-shop-2" onClick={ () => router.back() } className="btn-back">Go back</Button>
                    <Button variant='btn-shopcart-1' onClick={ () => router.push( '/' ) } className="btn-home">
                        <Typography variant="body15">Take me home</Typography>
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    );
};
Error.layout = "Front";
export default Error;
