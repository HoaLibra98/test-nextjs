// import BlockTitle from '@components/BlockTitle';
// import { pricing } from '@data/pricing';
// import PricingItem from '@elements/dealerShip-service/PricingPlan/PricingItem';
// import { TabContext, TabList, TabPanel } from '@mui/lab';
// import { Box, Container, Grid, Tab } from '@mui/material';
// import { useState } from 'react';

// function Pricing( { module, options } ) {

//     const [ value, setValue ] = useState( '1' );

//     if ( !module || !module.data ) return;

//     const handleChange = ( event, newValue ) => {
//         setValue( newValue );
//     };

//     return (
//         <Container>
//             <Box >
//                 <Grid container spacing={ 3 } py={ 8 }  >
//                     <Grid item xs={ 12 } >
//                         <BlockTitle
//                             editInline={ false }
//                             variantTile="heading1"
//                             variantDesc="description2"
//                             title={ module.data.title }
//                             description={ module.data.description }
//                             field='' />
//                     </Grid>
//                     <Box width="100%" className="pricing">
//                         <TabContext value={ value } >
//                             <Box className="tabs-pricing">
//                                 <TabList onChange={ handleChange } aria-label="lab API tabs example">
//                                     <Tab label="Monthly billing" value="1" />
//                                     <Tab label="Annual billing" value="2" />
//                                 </TabList>
//                             </Box>
//                             <TabPanel value="1">
//                                 <PricingItem pricing={ pricing } />
//                             </TabPanel>
//                             <TabPanel value="2">
//                                 <PricingItem pricing={ pricing } />
//                             </TabPanel>
//                         </TabContext>
//                     </Box>
//                 </Grid>
//             </Box>
//         </Container>
//     );
// }

// export default Pricing;