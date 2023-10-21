import { ColorStyles } from './Color';
import { TextStyles } from './Text';

export const ButtonStyles = {
    primary: {
        default: {
            backgroundColor: 'transparent',
            color: ColorStyles.Foundation.Black[ 900 ],
            ...TextStyles.Poppins[ 'Body04:14px' ].Light
        },
        hover: {
            backgroundColor: 'transparent',
            a: {
                color: ColorStyles.Foundation.brown[ 500 ],
            },
            color: ColorStyles.Foundation.brown[ 500 ],
            cursor: 'pointer',
            borderBottom: `1px solid ${ ColorStyles.Foundation.brown[ 500 ] }`,
            ...TextStyles.Poppins[ 'Body04:14px' ].Light
        },
        disabled: {
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            color: ColorStyles.Foundation.Neutral[ 600 ],
            cursor: 'not-allowed',
            ...TextStyles.Poppins[ 'Body04:14px' ].Light
        },
        iconLeading: {
            paddingLeft: '10px',
        },
        iconTrailling: {
            paddingRight: '10px',
        },
    },
    ThirdButon: {
        default: {
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            color: ColorStyles.Foundation.Black[ 900 ],
            borderRadius: "100px",
            ...TextStyles.Poppins[ 'Body04:14px' ].Light
        },
        hover: {
            backgroundColor: ColorStyles.Foundation.brown[ 500 ],
            color: ColorStyles.Foundation.Black[ 900 ],
            cursor: 'pointer',
            ...TextStyles.Poppins[ 'Body04:14px' ].Light
        },
        disabled: {
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            color: `${ ColorStyles.Foundation.Neutral[ 300 ] }!important`,
            cursor: 'not-allowed',
            ...TextStyles.Poppins[ 'Body04:14px' ].Light
        },
        iconLeading: {
            paddingLeft: '10px',
        },
        iconTrailling: {
            paddingRight: '10px',
        },
    },
    SlickButton: {
        style1: {
            border: "1px solid",
            color: ColorStyles.Foundation.Black[ 900 ],
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            width: 56,
            minWidth: 56,
            height: 56,
            borderRadius: "50%",
            ...TextStyles.Poppins[ 'Body04:14px' ].Light,
            '&:hover': {
                backgroundColor: ColorStyles.Foundation.brown[ 500 ],
            }
        },
        style2: {
            backgroundColor: ColorStyles.Foundation.brown[ 500 ],
            color: ColorStyles.Foundation.baseColor.white,
            width: 56,
            minWidth: 56,
            height: 56,
            borderRadius: "50%",
            ...TextStyles.Poppins[ 'Body04:14px' ].Light,
            '&:hover': {
                backgroundColor: ColorStyles.Foundation.baseColor.white,
                color: ColorStyles.Foundation.baseColor.black,
            }
        },
        style3: {
            color: ColorStyles.Foundation.baseColor.black,
            width: 56,
            minWidth: 56,
            height: 56,
            borderRadius: "50%",
            ...TextStyles.Poppins[ 'Body04:14px' ].Light,
            '&:hover': {
                color: ColorStyles.Foundation.brown[ 500 ],
                backgroundColor: ColorStyles.Foundation.baseColor.white,
            }
        },
    },
    filterButton: {
        style1: {
            border: "1px solid",
            color: ColorStyles.Foundation.Black[ 900 ],
            backgroundColor: ColorStyles.Foundation.baseColor.white,
        },
        style2: {
            border: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
            color: ColorStyles.Foundation.YellowBrown[ 500 ],
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            width: 270,
            minWidth: 270,
            height: 56,
            ...TextStyles.Poppins[ 'Body03:18px' ].Medium,
        },
    },
    ButtonShop: {
        default: {
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            color: ColorStyles.Foundation.Black[ 900 ],
            maxWidth: 150,
            height: 22,
            ...TextStyles.Poppins[ 'Body04:14px' ].SemiBold,
        },
        hover: {
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            color: ColorStyles.Foundation.brown[ 500 ],
            cursor: 'pointer',
            ...TextStyles.Poppins[ 'Body04:14px' ].Light
        },
        style1: {
            backgroundColor: ColorStyles.Foundation.Black[ 900 ],
            color: ColorStyles.Foundation.baseColor.white,
            width: 379,
            height: 56,
            borderRadius: '0px',
            ...TextStyles.Poppins[ 'Body03:18px' ].Medium,
            hover: {
                backgroundColor: ColorStyles.Foundation.brown[ 500 ],
                color: ColorStyles.Foundation.baseColor.black,
            },
        },
        style2: {
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            color: ColorStyles.Foundation.YellowBrown[ 500 ],
            width: 222,
            height: 40,
            borderRadius: '0px',
            border: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
            ...TextStyles.Poppins[ 'Body04:14px' ].Regular,
        },
        style3: {
            backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
            color: ColorStyles.Foundation.Neutral[ 700 ],
            width: 222,
            height: 40,
            borderRadius: '0px',
            ...TextStyles.Poppins[ 'Body04:14px' ].Regular,
        }
    },
    ButtonShop_1: {
        default: {
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            color: ColorStyles.Foundation.Black[ 900 ],
            maxWidth: 160,
            height: 22,
            ...TextStyles.Poppins[ 'Body04:14px' ].Light,
        },
        hover: {
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            color: ColorStyles.Foundation.brown[ 500 ],
            cursor: 'pointer',
            ...TextStyles.Poppins[ 'Body04:14px' ].Light
        },
    },
    btn_white: {
        default: {
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            color: ColorStyles.Foundation.Black[ 900 ],
            width: 212,
            borderRadius: "100px",
            ...TextStyles.Poppins[ 'Body04:14px' ].Light
        },
        hover: {
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            color: ColorStyles.Foundation.brown[ 500 ],
            cursor: 'pointer',
            borderBottom: `1px solid ${ ColorStyles.Foundation.brown[ 500 ] }`,
            ...TextStyles.Poppins[ 'Body04:14px' ].Light
        },
        disabled: {
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            color: ColorStyles.Foundation.Neutral[ 600 ],
            cursor: 'not-allowed',
            ...TextStyles.Poppins[ 'Body04:14px' ].Light
        },
    },
    btn_black: {
        default: {
            backgroundColor: ColorStyles.Foundation.Black[ 900 ],
            color: ColorStyles.Foundation.baseColor.white,
            borderRadius: "100px",
            width: 212,
            ...TextStyles.Poppins[ 'Body04:14px' ].Light
        },
        hover: {
            backgroundColor: ColorStyles.Foundation.brown[ 500 ],
            color: ColorStyles.Foundation.Black[ 900 ],
            cursor: 'pointer',
        },
        disabled: {
            backgroundColor: ColorStyles.Foundation.Neutral[ 200 ],
            color: ColorStyles.Foundation.Neutral[ 600 ],
            cursor: 'not-allowed',
            ...TextStyles.Poppins[ 'Body04:14px' ].Light
        },
    },
    btn_input: {
        default: {
            ...TextStyles.Poppins[ 'Body04:14px' ].Medium,
            color: ColorStyles.Foundation.Neutral[ 700 ]
        },
        hover: {
            backgroundColor: ColorStyles.Foundation.Neutral[ 700 ],
            color: ColorStyles.Foundation.baseColor.white,
            cursor: 'pointer',
        },
        active: {
            color: ColorStyles.Foundation.baseColor.white,
            backgroundColor: ColorStyles.Foundation.Neutral[ 700 ],
        },
    },
};
