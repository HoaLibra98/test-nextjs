import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, OutlinedInput, Rating, Stack, Typography } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import { ChevronUp } from "feather-icons-react/build/IconComponents";
import { useState } from "react";

const ReviewAcount = () => {
    return (
        <>
            <Box className="reviews-acount">
                <Stack direction="row" justifyContent="space-between" mb={ 1 }>
                    <Typography variant="title1">Ramam</Typography>
                    <Typography variant="description5">30/1/2023</Typography>
                </Stack>
                <Stack direction="column" alignItems="start">
                    <Typography variant="description5">Product Quality Is Good!!!!!</Typography>
                    <Rating name="read-only" value={ 5 } readOnly size="small" />
                </Stack>
            </Box>
            <Box className="reviews-acount">
                <Stack direction="row" justifyContent="space-between" mb={ 1 }>
                    <Typography variant="title1">Jane</Typography>
                    <Typography variant="description5">14/12/2023</Typography>
                </Stack>
                <Stack direction="column" alignItems="start">
                    <Typography variant="description5">Really delicious, nike cake.</Typography>
                    <Rating name="read-only" value={ 5 } readOnly size="small" />
                </Stack>
            </Box>
        </>
    );
};

const FormReviews = ( { islogin } ) => {
    const [ value, setValue ] = useState( 0 );

    return (
        <Box className="write-reviews">
            <Typography variant="title1">Write a review</Typography>
            <Box component="form" noValidate className="write-reviews-submitt-form">
                <Box width='100%'>
                    <Typography variant="description">First name<Typography color={ ColorStyles.Foundation.Danger[ 600 ] }>*</Typography></Typography>
                    <FormControl className="form-control-name-email" >
                        <OutlinedInput required={ true } placeholder="First name" type="name" />
                    </FormControl>
                </Box>
                <Box width='100%'>
                    <Typography variant="description">Your reviews <Typography color={ ColorStyles.Foundation.Danger[ 600 ] }>*</Typography></Typography>
                    <FormControl >
                        <OutlinedInput multiline={ true } minRows={ 4 } placeholder="Message" type="message" />
                    </FormControl>
                </Box>
            </Box>
            <Stack direction="row" alignItems="center" spacing={ 0.5 }>
                <Typography variant="description">Bad</Typography>
                <Rating
                    value={ value }
                    onChange={ ( event, newValue ) => {
                        setValue( newValue );
                    } }
                />
                <Typography variant="body7">Good</Typography>
            </Stack>
            <Stack direction="row" spacing={ 3 }>
                { islogin === false && <Button variant='btn-disable' disabled >Submit</Button> }
                <Button variant='btn-shopcart-1'>{ islogin === false ?
                    <Typography variant="body15">Login</Typography>
                    : <Typography variant="body15">Login</Typography> }
                </Button>
            </Stack>
        </Box>
    );
};

const ReviewInfo = ( { productDetail } ) => {
    const islogin = false;

    const [ expanded, setExpanded ] = useState( 0 );

    const handleChangePage = ( panel ) => ( event, newExpanded ) => {
        setExpanded( newExpanded ? panel : false );
    };

    return (
        <Box className="review-info">
            {
                productDetail.reviews.map( ( item, index ) => {
                    return (
                        <Accordion key={ `review-info-${ index }` } expanded={ expanded === index } onChange={ handleChangePage( index ) }>
                            <AccordionSummary
                                expandIcon={ <ChevronUp color={ ColorStyles.Foundation.baseColor.black } /> }
                            >
                                <Typography variant="title1">{ item.title }</Typography>
                            </AccordionSummary>
                            { item.isReview !== true ? <AccordionDetails>
                                <Typography variant="description5">
                                    { item.description }
                                </Typography>
                            </AccordionDetails> : <AccordionDetails className="reviews-AccordionDetails">

                                {/* review acount */ }
                                <ReviewAcount />

                                < FormReviews islogin={ islogin } />

                            </AccordionDetails> }
                        </Accordion>
                    );
                } )
            }
        </Box>
    );
};
export default ReviewInfo;