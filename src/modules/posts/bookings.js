// import BlockTitle from "@components/BlockTitle";
// import ButtonAction from "@components/ButtonAction";
// import BooKingItem from "@elements/home/CustomerBooking/BooKingItem";
// import { Box, Container, Grid, useMediaQuery } from "@mui/material";

// const bookings = [
//     {
//         description: "Offer an intuitive webpage for customers to book a show/ test drive easily"
//     },
//     {
//         description: "Link a customer’s booking with specific car(s) in your inventory",
//     },
//     {
//         description: "Mange life cycle of a deal (*)"
//     },
// ];

// function Posts( { module, options } ) {

//     const mdDown = useMediaQuery( ( theme ) => theme.breakpoints.down( 'md' ) );

//     return (
//         <Container>
//             <Grid container spacing={ 0 } py={ 8 }  >
//                 <Grid item xs={ 12 } lg={ 12 }>
//                     <BlockTitle
//                         variantTile="heading1"
//                         variantDesc="description2"
//                         title={ module.data.title }
//                         description={ module.data.description }
//                         field='homepage.bookings' />
//                 </Grid>
//                 <Grid item xs={ 12 } lg={ 12 }>
//                     <BooKingItem items={ bookings } mdDown={ mdDown } />
//                 </Grid>
//                 <Box margin="auto">
//                     <ButtonAction>View Pricing</ButtonAction>
//                 </Box>
//             </Grid>
//         </Container>
//     );
// }

// export default Posts;