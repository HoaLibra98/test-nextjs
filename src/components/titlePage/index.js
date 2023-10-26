import { Box, Typography } from "@mui/material";

const TitlePage = ( props ) => {
    const { title } = props;
    return (
        <>
            <Typography
                color="#26231E"
                fontSize={ "36px" }
                fontWeight={ 700 }
                textAlign={ "center" }

                pt={ "64px" }
            >
                { title }
            </Typography>
            <Box
                width={ 90 }
                height={ 2 }
                mt={ "24px" }
                mb={ "64px" }
                mx="auto"
                sx={ {
                    backgroundColor: "#26231E",
                } }
            />
        </>
    );
};

export default TitlePage;
