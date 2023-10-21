import { ColorStyles } from "./Designs";

export const ListMenuMobile = {
    elevation: 0,
    sx: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        width: "100%",
        left: '0px !important',
        maxWidth: 'unset !important',
        mt: 1.5,
        '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
        },
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
        },
    },
};

export const ListMenuDesktop = {
    elevation: 0,
    sx: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        width: "100%",
        left: '0px !important',
        padding: "0 16px",
        maxWidth: 'unset !important',
        mt: 1.5,
    },
};
export const customPoper = {
    elevation: 0,
    sx: {
        top: '259px !important',
        borderTop: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
        '.MuiList-root': {
            padding: '16px 0px !important',
        }
    },
}; 