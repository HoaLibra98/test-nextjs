// import BlockItemPage from "@components/BkockItemPage";
// import BlockTitle from "@components/BlockTitle";
// import ButtonAction from "@components/ButtonAction";
// import BlockContent from "@elements/home/BlockContent";
// import { Box, Grid, useMediaQuery } from "@mui/material";

// const inventory = [
//     {
//         image: "https://dealershipone.com/_next/image?url=%2Finventory%2Finventory1.png&w=640&q=75",
//         description: "Custom username & URL to your own inventory listing webpage: www.dealershipONE.com/yourDealership"
//     },
//     {
//         image: "https://dealershipone.com/_next/image?url=%2Finventory%2Finventory2.png&w=640&q=75",
//         description: "Advanced Search & Car Filtering features",
//         reverse: "row-reverse"
//     },
//     {
//         image: "https://dealershipone.com/_next/image?url=%2Finventory%2Finventory3.png&w=640&q=75",
//         description: "Ready integrated with our social media marketing program & Direct Buy from Customer program"
//     },
// ];

// function Posts( { module, options } ) {

//     const mdDown = useMediaQuery( ( theme ) => theme.breakpoints.down( 'md' ) );

//     return (
//         <BlockContent>
//             <Grid container spacing={ 0 } py={ 8 } >
//                 <Grid item xs={ 12 } lg={ 12 }>
//                     <BlockTitle title={ module.data.title } description={ module.data.description } field='homepage.inventory' />
//                 </Grid>
//                 <Grid item xs={ 12 } lg={ 12 }>
//                     <BlockItemPage data={ inventory } mdDown={ mdDown } />
//                 </Grid>
//                 <Box margin="auto">
//                     <ButtonAction>View Pricing</ButtonAction>
//                 </Box>
//             </Grid>
//         </BlockContent>
//     );
// }

// export default Posts;