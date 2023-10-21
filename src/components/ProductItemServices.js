import { Box, Stack, Tooltip, Typography, styled } from "@mui/material";
import { tooltipClasses } from '@mui/material/Tooltip';
import { ColorStyles, TextStyles } from "@theme/Designs";
import CarIcon from "./CarIcon";

/**
 * Display services for product item
 * @param {object} options: Options for product item 
 * @param {object} props 
 * @returns DOM React JS
 */

const RightTooltip = styled( ( { className, ...props } ) => (
    <Tooltip { ...props } arrow classes={ { popper: className } } />
) )( ( { theme } ) => ( {
    [ `& .${ tooltipClasses.arrow }` ]: {
        color: ColorStyles.Change.YellowBrown[ 500 ],
    },
    [ `& .${ tooltipClasses.tooltip }` ]: {
        backgroundColor: ColorStyles.Change.YellowBrown[ 500 ],
        ...TextStyles.Poppins[ 'Body04:14px' ].Regular,
        borderRadius: 8,
    },
} ) );

const BottomTooltip = styled( ( { className, ...props } ) => (
    <Tooltip { ...props } arrow classes={ { popper: className } } />
) )( ( { theme } ) => ( {
    [ `& .${ tooltipClasses.arrow }` ]: {
        color: ColorStyles.Change.YellowBrown[ 500 ],
        position: 'absolute !important',
        left: '-130px !important'
    },
    [ `& .${ tooltipClasses.tooltip }` ]: {
        backgroundColor: ColorStyles.Change.YellowBrown[ 500 ],
        ...TextStyles.Poppins[ 'Body04:14px' ].Regular,
        borderRadius: 8,
        position: 'relative',
        left: 30
    },
} ) );

const ProductItemServices = ( { productDetail, color, disabled = "disabled", ...props } ) => {

    return (
        <Box { ...props }>
            <>
                <Stack direction="row" alignItems="center" spacing={ 1 } className={ `service service-${ productDetail.stock === 1 && 'active' }` }>
                    <Box>
                        <CarIcon name='fork-knife' size="24" />
                    </Box>
                    {
                        productDetail.stock === 1 && (
                            <RightTooltip title='Usually available in-store. Please pre-order to ensure quantity.' placement="right" arrow>
                                <Typography variant="bodySuccsess">{ 'in-store now' }</Typography>
                            </RightTooltip>
                        )
                    }

                    {
                        productDetail.stock === 3 && (
                            <Typography variant="bodySuccsess">{ 'in-store now' }</Typography>
                        )
                    }
                </Stack>

                <Stack direction="row" alignItems="center" spacing={ 1 } className="service-active">
                    <Box>
                        <CarIcon name='truck' size="24" />
                    </Box>
                    {
                        productDetail.stock === 1 && (
                            <BottomTooltip title='Usually available in-store. Please pre-order to ensure quantity.' placement="bottom" arrow>
                                <Typography variant="bodySuccsess">{ 'pre-order available' }</Typography>
                            </BottomTooltip>
                        )
                    }
                    {
                        productDetail.stock === 3 && (
                            <BottomTooltip title='Not available in-store. Pre-order is required.' placement="bottom" arrow>
                                <Typography variant="bodySuccsess">{ 'pre-order required' }</Typography>
                            </BottomTooltip>
                        )
                    }
                </Stack>
            </>
        </Box>
    );
};
export default ProductItemServices;