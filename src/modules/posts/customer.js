// import BlockItemPage from "@components/BkockItemPage";
// import BlockTitle from "@components/BlockTitle";
// import ButtonAction from "@components/ButtonAction";
// import BlockContent from "@elements/home/BlockContent";
// import { Box, Grid, useMediaQuery } from "@mui/material";

// const directBuyCustomer = [
//     {
//         image: "https://dealershipone.com/_next/image?url=%2FdirectBy%2Fdirect-buy1.png&w=640&q=75",
//         description: "Create Facebook/ Google presence with your dealership’s redesigned images and logo",
//         link: "#"
//     },
//     {
//         image: "https://dealershipone.com/_next/image?url=%2FdirectBy%2Fdirect-buy2.png&w=640&q=75",
//         description: "Maintain customer’s interaction by frequent content updates on social media",
//         reverse: "row-reverse"
//     },
//     {
//         image: "https://dealershipone.com/_next/image?url=%2FdirectBy%2Fdirect-buy3.png&w=640&q=75",
//         description: "Maintain good reviews & customer’s care through review’s responses",
//         link: "#"
//     },
// ];

// function Posts( { module, options } ) {

//     const mdDown = useMediaQuery( ( theme ) => theme.breakpoints.down( 'md' ) );

//     return (
//         <BlockContent>
//             <Grid container spacing={ 0 } py={ 8 } >
//                 <Grid item xs={ 12 } lg={ 12 }>
//                     <BlockTitle title={ module.data.title } description={ module.data.description } field='homepage.socialMedia' />
//                 </Grid>
//                 <Grid item xs={ 12 } lg={ 12 }>
//                     <BlockItemPage data={ directBuyCustomer } mdDown={ mdDown } />
//                 </Grid>
//                 <Box margin="auto">
//                     <ButtonAction>View Pricing</ButtonAction>
//                 </Box>
//             </Grid>
//         </BlockContent>
//     );
// }

// export default Posts;