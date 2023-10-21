// import BlockItemPage from "@components/BkockItemPage";
// import BlockTitle from "@components/BlockTitle";
// import ButtonAction from "@components/ButtonAction";
// import BlockContent from "@elements/home/BlockContent";
// import { Box, Grid, useMediaQuery } from "@mui/material";

// const socialMedialItem = [
//     {
//         image: "/image/social1.png",
//         description: "Create Facebook/ Google presence with your dealership’s redesigned images and logo"
//     },
//     {
//         image: "/image/social2.png",
//         description: "Maintain customer’s interaction by frequent content updates on social media",
//         reverse: "row-reverse"
//     },
//     {
//         image: "/image/social3.jpg",
//         description: "Maintain good reviews & customer’s care through review’s responses"
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
//                     <BlockItemPage data={ socialMedialItem } mdDown={ mdDown } />
//                 </Grid>
//                 <Box margin="auto">
//                     <ButtonAction>View Pricing</ButtonAction>
//                 </Box>
//             </Grid>
//         </BlockContent>
//     );
// }

// export default Posts;