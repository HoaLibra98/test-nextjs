// import BlockTitle from "@components/BlockTitle";
// import ButtonAction from "@components/ButtonAction";
// import BlockContent from "@elements/home/BlockContent";
// import BlockItemStoried from "@elements/home/SuccessStoried/BlockItemStoried";
// import { Box, Grid, useMediaQuery } from "@mui/material";

// const successStoried = [
//     {
//         avatar: "https://dealershipone.com/sucessStories/avatar1.svg",
//         name: "Naro MathDoe",
//         country: "Capital Toyota",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
//     },
//     {
//         avatar: "https://dealershipone.com/sucessStories/avatar2.svg",
//         name: "Naro MathDoe",
//         country: "Capital Toyota",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
//     },
//     {
//         avatar: "https://dealershipone.com/sucessStories/avatar3.svg",
//         name: "Naro MathDoe",
//         country: "Capital Toyota",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
//     },
// ];

// function Posts( { module, options } ) {

//     const mdDown = useMediaQuery( ( theme ) => theme.breakpoints.down( 'md' ) );

//     return (
//         <BlockContent>
//             <Grid container spacing={ 0 } py={ 8 } >
//                 <Grid item xs={ 12 } lg={ 12 }>
//                     <BlockTitle title={ module.data.title } description={ module.data.description } field='field.stories' />
//                 </Grid>
//                 <BlockItemStoried data={ successStoried } mdDown={ mdDown } />
//                 <Box margin="auto">
//                     <ButtonAction >View More</ButtonAction>
//                 </Box>
//             </Grid >
//         </BlockContent>
//     );
// }

// export default Posts;