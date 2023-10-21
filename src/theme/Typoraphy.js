import { ColorStyles, TextStyles } from './Designs';
import { MediaBreakpoints, Theme } from './MediaBreakpoints';

const typography = {
    h1: {
        ...TextStyles.Domine[ 'H1:65px' ].Bold,
        color: ColorStyles.Foundation.baseColor.white,
        [ MediaBreakpoints( Theme.down.sm ) ]: {
            ...TextStyles.Domine[ 'H2:40px' ].Bold,
        },
    },
    h2: {
        ...TextStyles.Domine[ 'H2:40px' ].Bold,
        color: ColorStyles.Foundation.Black[ 900 ],
        [ MediaBreakpoints( Theme.down.sm ) ]: {
            ...TextStyles.Domine[ 'H3:25px' ].Bold,
        },
    },
    h3: {
        ...TextStyles.Domine[ 'H3:25px' ].Bold,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    h4: {
        ...TextStyles.Domine[ 'H4:23px' ].Bold,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    h5: {
        ...TextStyles.Domine[ 'H5:20px' ].Bold,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    h6: {
        ...TextStyles.Domine[ 'H6:14px' ].Bold,
        color: ColorStyles.Foundation.Black[ 900 ],
        a: {
            color: ColorStyles.Foundation.baseColor.white,
        }
    },
    heading: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Light,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    heading1: {
        ...TextStyles.Domine[ 'H2:40px' ].Bold,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    heading2: {
        ...TextStyles.Poppins[ 'Body01:30px' ].Medium,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    heading3: {
        ...TextStyles.Domine[ 'H2:40px' ].Bold,
        color: ColorStyles.Foundation.Neutral[ 700 ],
    },
    menuHeader: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Light,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    footer: {
        ...TextStyles.Poppins[ 'Body03:18px' ].Light,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    title: {
        ...TextStyles.Domine[ 'H1:65px' ].Bold,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    title1: {
        ...TextStyles.Poppins[ 'Body04:14px' ].SemiBold,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    title2: {
        ...TextStyles.Poppins[ 'Body02:20px' ].SemiBold,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    title3: {
        ...TextStyles.Poppins[ 'Body03:18px' ].SemiBold,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    title4: {
        ...TextStyles.Poppins[ 'Body03:18px' ].Medium,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    title5: {
        ...TextStyles.Domine[ 'H3:25px' ].Bold,
        color: ColorStyles.Foundation.baseColor.white,
    },
    title6: {
        ...TextStyles.Domine[ 'H2:40px' ].Bold,
        color: ColorStyles.Foundation.baseColor.black,
    },
    title7: {
        ...TextStyles.Domine[ 'H6:14px' ].Bold,
        color: ColorStyles.Foundation.baseColor.white,
    },
    title8: {
        ...TextStyles.Domine[ 'H4:32px' ].Bold,
        color: ColorStyles.Change.Black[ 800 ],
    },
    "title-button": {
        ...TextStyles.Poppins[ 'Body03:18px' ].Medium,
        color: ColorStyles.Foundation.YellowBrown[ 500 ],
    },
    "blog-title": {
        ...TextStyles.Poppins[ 'Body02:20px' ].Medium,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    "blog-date": {
        ...TextStyles.Poppins[ 'Body04:14px' ].Light,
        color: ColorStyles.Foundation.Neutral[ 700 ],
    },
    body: {
        ...TextStyles.Poppins[ 'Body03:18px' ].Regular,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    body1: {
        ...TextStyles.Domine[ 'H6:14px' ].Regular,
        color: ColorStyles.Foundation.baseColor.white,
    },
    body2: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Light,
        color: ColorStyles.Foundation.baseColor.white,
    },
    body3: {
        ...TextStyles.Poppins[ 'Body03:18px' ].Light,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    body4: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Medium,
        color: ColorStyles.Foundation.baseColor.white,
    },
    body5: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Regular,
        color: ColorStyles.Foundation.Black[ 900 ],
        a: {
            color: ColorStyles.Foundation.YellowBrown[ 500 ]
        }
    },
    body6: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Light,
        color: ColorStyles.Foundation.baseColor.white,
    },
    body7: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Light,
        color: ColorStyles.Foundation.Neutral[ 700 ],
    },
    body8: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Regular,
        color: ColorStyles.Foundation.Neutral[ 700 ],
    },
    body9: {
        ...TextStyles.Poppins[ 'Body03:18px' ].Medium,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    body10: {
        ...TextStyles.Poppins[ 'Body02:20px' ].Light,
        color: ColorStyles.Foundation.Black[ 500 ],
    },
    body11: {
        ...TextStyles.Domine[ 'H5:20px' ].Regular,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    body12: {
        ...TextStyles.Poppins[ 'Body02:20px' ].Regular,
        color: ColorStyles.Foundation.Black[ 500 ],
    },
    body13: {
        ...TextStyles.Poppins[ 'Body02:20px' ].Bold,
        color: ColorStyles.Foundation.Black[ 500 ],
    },
    body14: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Medium,
        color: ColorStyles.Foundation.Neutral[ 700 ],
    },
    body15: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Regular,
        color: ColorStyles.Foundation.baseColor.white,
    },
    body16: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Medium,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    body17: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Bold
        ,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    body18: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Light,
        color: ColorStyles.Foundation.Neutral[ 700 ],
    },
    body19: {
        ...TextStyles.Poppins[ 'Body03:16px' ].Light,
        color: ColorStyles.Change.YellowBrown[ 500 ],
    },
    bodySuccsess: {
        ...TextStyles.Poppins[ 'Body03:16px' ].Medium,
        color: ColorStyles.Change.Success[ 500 ],
    },
    description: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Light,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    description1: {
        ...TextStyles.Poppins[ 'Body01:30px' ].Light,
        color: ColorStyles.Foundation.baseColor.white,
        [ MediaBreakpoints( Theme.down.sm ) ]: {
            ...TextStyles.Poppins[ 'Body02:20px' ].Light,
        },
    },
    description2: {
        ...TextStyles.JosefinSans[ 'subBody:20px' ].Regular,
        color: ColorStyles.Foundation.Neutral[ 700 ],
    },
    description3: {
        ...TextStyles.JosefinSans[ 'subBody:20px' ].Light,
        color: ColorStyles.Foundation.Neutral[ 700 ],
    },
    description4: {
        ...TextStyles.Poppins[ 'Body03:18px' ].Light,
        color: ColorStyles.Foundation.Black[ 900 ],
        [ MediaBreakpoints( Theme.down.sm ) ]: {
            ...TextStyles.Poppins[ 'Body04:14px' ].Light,
        },
    },
    description5: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Light,
        color: ColorStyles.Foundation.Black[ 600 ],
    },
    description6: {
        ...TextStyles.Poppins[ 'Body03:18px' ].Light,
        color: ColorStyles.Foundation.Neutral[ 700 ],
    },
    description7: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Regular,
        color: ColorStyles.Foundation.Black[ 600 ],
    },
    description8: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Regular,
        color: ColorStyles.Foundation.Black[ 600 ],
        span: {
            ...TextStyles.Poppins[ 'Body04:14px' ].Medium,
            color: ColorStyles.Foundation.YellowBrown[ 500 ],
            cursor: 'pointer'
        }
    },
    description9: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Medium,
        color: ColorStyles.Foundation.baseColor.black,
        span: {
            color: ColorStyles.Foundation.YellowBrown[ 500 ],
            cursor: 'pointer'
        }
    },
    description10: {
        ...TextStyles.Poppins[ 'Body03:18px' ].Light,
        color: ColorStyles.Foundation.Black[ 600 ],
    },
    description11: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Light,
        color: ColorStyles.Foundation.Black[ 900 ],
        '&:hover': {
            color: ColorStyles.Foundation.YellowBrown[ 500 ],
        }
    },
    description12: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Regular,
        color: ColorStyles.Change.Black[ 300 ]
    },
    description13: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Regular,
        color: ColorStyles.Foundation.Black[ 600 ],
        fontStyle: 'italic',
    },
    button: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Light,
        color: ColorStyles.Foundation.baseColor.black,
    },
    button1: {
        ...TextStyles.Poppins[ 'Body03:18px' ].Light,
        color: ColorStyles.Foundation.brown[ 500 ],
    },
    "price-detail": {
        ...TextStyles.Domine[ 'H2:40px' ].Bold,
        color: ColorStyles.Foundation.YellowBrown[ 500 ],
    },
    "style-popup": {
        ...TextStyles.Poppins[ 'Body03:18px' ].Light,
        color: ColorStyles.Foundation.Success[ 500 ],
    },
    service: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Light,
        color: ColorStyles.Foundation.Success[ 500 ],
    },
    continue: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Regular,
        color: ColorStyles.Foundation.YellowBrown[ 500 ],
    },
    lable1: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Light,
        color: ColorStyles.Foundation.Black[ 600 ],
    },
    lable2: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Light,
        color: ColorStyles.Foundation.Black[ 900 ],
        span: {
            ...TextStyles.Poppins[ 'Body04:14px' ].Light,
            color: ColorStyles.Foundation.YellowBrown[ 500 ],
            cursor: 'pointer'
        }
    },
    lable3: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Regular,
        color: ColorStyles.Foundation.baseColor.black,
    },
    lable4: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Regular,
        color: ColorStyles.Foundation.baseColor.white,
    },
    lable5: {
        ...TextStyles.Poppins[ 'Body02:20px' ].Light,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    lable6: {
        ...TextStyles.Poppins[ 'Body03:18px' ].Medium,
        color: ColorStyles.Foundation.baseColor.white,
    },
    lable7: {
        ...TextStyles.Poppins[ 'Body03:18px' ].Light,
        color: ColorStyles.Foundation.YellowBrown[ 500 ],
    },
    lable8: {
        ...TextStyles.Poppins[ 'Body03:18px' ].SemiBold,
        color: ColorStyles.Foundation.Success[ 500 ],
    },
    lable9: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Medium,
        color: ColorStyles.Foundation.Black[ 900 ],
    },
    lable10: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Light,
        color: ColorStyles.Foundation.YellowBrown[ 500 ],
    },
    lable11: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Medium,
        color: ColorStyles.Foundation.YellowBrown[ 500 ],
    },
    lable12: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Medium,
        color: ColorStyles.Foundation.brown[ 500 ],
    },
    lable13: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Medium,
        color: ColorStyles.Foundation.YellowBrown[ 500 ],
    },
    lable14: {
        ...TextStyles.Domine[ 'H6:14px' ].Regular,
        color: ColorStyles.Foundation.Danger[ 400 ],
    },
    lable15: {
        ...TextStyles.Poppins[ 'Body05:12px' ].Regular,
        color: ColorStyles.Change.Black[ 200 ],
    },
    lable16: {
        ...TextStyles.Poppins[ 'Body03:16px' ].Medium,
        color: ColorStyles.Change.Black[ 800 ],
    },
    lable17: {
        ...TextStyles.Domine[ 'H5:23px' ].Bold,
        color: ColorStyles.Change.YellowBrown[ 500 ]
    },
    lable18: {
        ...TextStyles.Poppins[ 'Body05:12px' ].Regular,
        color: ColorStyles.Change.White[ 600 ],
    },
    label19: {
        ...TextStyles.Poppins[ 'Body03:16px' ].Medium,
        color: ColorStyles.Change.Black[ 800 ],
    },
    label20: {
        ...TextStyles.Poppins[ 'Body04:14px' ].Regular,
        color: ColorStyles.Change.Black[ 300 ],
    },
    label21: {
        ...TextStyles.Domine[ 'H6:16px' ].Bold,
        color: ColorStyles.Change.Black[ 800 ]
    },
    label22: {
        ...TextStyles.Domine[ 'H2:36px' ].Bold,
        color: ColorStyles.Change.Black[ 800 ]
    },
    label23: {
        ...TextStyles.Domine[ 'H2:30px' ].Bold,
        color: ColorStyles.Change.Black[ 800 ]
    }
};

export default typography;
