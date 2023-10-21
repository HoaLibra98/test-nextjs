import { adminSyle } from './adminStyle';
import { ButtonStyles, ColorStyles, TextStyles } from './Designs';
import { MediaBreakpoints, Theme } from './MediaBreakpoints';
import { ShadowBakery } from './Shadows';

const components = {
    MuiCssBaseline: {
        styleOverrides: {
            '*': {
                boxSizing: 'border-box',
            },
            html: {
                height: '100%',
                width: '100%',
            },
            body: {
                height: '100%',
                margin: 0,
                padding: 0,
            },
            a: {
                textDecoration: 'none',
                listStyle: 'none',
                color: ColorStyles.Foundation.Black[ 900 ],
            },
            '#root': {
                height: '100%',
            },
            '.logo': {
                img: {
                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                        width: 70,
                        height: 70,
                    },
                }
            },
            // page home admin
            '.page-admin': {
                '.page-admin-image': {
                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                        maxwidth: 700,
                        minHeight: 500,
                    },
                    img: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }
                }
            },
            // /*****************
            //  * ADMIN
            //  *****************/
            ...adminSyle,
            /******************
             * element in block
             ******************/
            // custom form Group
            '.MuiFormControl-root.custom-checkbox-group': {
                '.MuiFormGroup-root.row': {
                    display: 'flex',
                    flexDirection: 'row !important'
                }
            },
            //React Sortable Tree
            '.rst__tree': {
                '.rst__node': {
                    '.rst__nodeContent': {
                        '.rst__rowLabel': {
                            '.rst__rowTitle': {
                                color: ColorStyles.Foundation.baseColor.black
                            }
                        }
                    }
                }
            },
            // custom Muidriver
            '.MuiDivider-root': {
                borderColor: `${ ColorStyles.Foundation.Neutral[ 600 ] } !important`,
            },
            // custom select MuiInput
            '.MuiFormControl-root': {
                '.MuiInputBase-root': {
                    '.MuiSelect-select': {
                        display: 'flex',
                        alignItems: 'center'
                    }
                }
            },
            // button disable
            '.MuiButtonBase-root.Mui-disabled': {
                backgroundColor: ColorStyles.Foundation.brown[ 200 ]
            },
            // custom quill
            '.quill': {
                '.ql-container': {
                    '.ql-editor': {
                        color: ColorStyles.Foundation.baseColor.black

                    }
                }
            },
            // custom menu mega Desktop 
            '.mega-menu-desktop': {
                width: '100%',
                borderTop: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                backgroundColor: ColorStyles.Foundation.baseColor.white,
                paddingTop: 8,
                '.MuiList-root': {
                    padding: '32px 0px',
                    maxWidth: 1200,
                    margin: 'auto',
                    '.menu-mega-item': {
                        '.MuiGrid-container': {
                            '.MuiGrid-item': {
                                '.category-image': {
                                    width: '100%',
                                    height: 196,
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'start',
                                    flexDirection: 'column',
                                    [ MediaBreakpoints( Theme.down.md ) ]: {
                                        height: '100%',
                                    },
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        height: '90%',
                                        width: '90%',
                                        border: `1px solid ${ ColorStyles.Foundation.baseColor.white }`,
                                        top: '5%',
                                        left: '5%',
                                    },
                                    img: {
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: '100%',
                                    },
                                }
                            }
                        }
                    }
                }
            },
            // custom menu dropdown desktop
            '.menu-dropdown-desktop': {
                backgroundColor: ColorStyles.Foundation.baseColor.white,
                '.MuiList-root': {
                    paddingTop: 0,
                    paddingLeft: 11,
                    paddingRight: 11,
                    '.MuiButtonBase-root.MuiMenuItem-root': {
                        paddingTop: 12,
                        paddingBottom: 12,
                        borderBottom: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                        '&:hover': {
                            backgroundColor: ColorStyles.Foundation.baseColor.white
                        },
                        '.MuiTouchRipple-root': {
                            display: 'none'
                        }
                    }
                }
            },
            //custom menu mega Mobile
            '.menu-mega-Mobile': {
                top: '303px !important',
                '.MuiList-root': {
                    padding: '32px 0px',
                    minHeight: 304,
                    '.menu-mega-item': {
                        maxWidth: 1200,
                        margin: 'auto',
                        '.MuiGrid-container': {
                            padding: '8px',
                            [ MediaBreakpoints( Theme.down.sm ) ]: {
                                padding: '0px 16px 20px 16px'
                            },
                            '.MuiGrid-item': {
                                marginTop: '16px',
                                '.category-image': {
                                    width: '100%',
                                    height: 196,
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'start',
                                    flexDirection: 'column',
                                    [ MediaBreakpoints( Theme.down.md ) ]: {
                                        height: '100%',
                                    },
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        height: '90%',
                                        width: '90%',
                                        border: `1px solid ${ ColorStyles.Foundation.baseColor.white }`,
                                        top: '5%',
                                        left: '5%',
                                        [ MediaBreakpoints( Theme.down.lg ) ]: {
                                            height: '70%',
                                            width: '90%',
                                            top: '6%',
                                        },
                                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                                            height: '60%',
                                        },
                                    },
                                    img: {
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: '100%',
                                    },
                                }
                            }
                        }
                    }
                }
            },
            // user login popper
            '.user-login-popper': {
                '.MuiPaper-root': {
                    top: '165px !important',
                    '.user-login-popper-item': {
                        position: 'relative',
                        backgroundColor: ColorStyles.Foundation.brown[ 300 ],
                        padding: "32px 8px",
                        display: 'flex',
                        flexDirection: 'column',
                        '.MuiListItem-root': {
                            '.MuiButtonBase-root': {
                                '.MuiListItemIcon-root': {
                                    minWidth: 40,
                                }
                            }
                        }
                    }
                },
            },
            // the status of the products when the user buys, cancels, refunds
            '.status-product-details': {
                backgroundColor: ColorStyles.Foundation.baseColor.white,
                '.status-product-details-header': {
                    marginTop: 32,
                    padding: 16,
                    borderBottom: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                    '.status-product-details-order': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        [ MediaBreakpoints( Theme.down.md ) ]: {
                            flexDirection: 'column',
                            gap: 20,
                            alignItems: 'start',
                        },
                    },
                    '.MuiButton-btn-shop-2': {
                        width: 147,
                        height: 40,
                        whiteSpace: 'nowrap',
                        [ MediaBreakpoints( Theme.down.md ) ]: {
                            marginBottom: 14,
                        },
                    }
                },
                '.status-product-details-list': {
                    borderBottom: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                    padding: 24,
                    '.status-product-details-item': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        [ MediaBreakpoints( Theme.down.md ) ]: {
                            flexDirection: 'column',
                            alignItems: 'start',
                            gap: 24,
                        },
                    },
                    '.status': {
                        backgroundColor: ColorStyles.Foundation.Success[ 200 ],
                        color: ColorStyles.Foundation.Success[ 600 ],
                    }
                }
            },
            //custom show oder
            '.show-oder': {
                margin: '32px 0px',
                padding: 16,
                backgroundColor: ColorStyles.Foundation.baseColor.white,
                display: 'flex',
                gap: 32,
                alignItems: 'center',
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    flexDirection: 'column',
                    gap: 24,
                    alignItems: 'start',
                },
                '.MuiFormControl-root': {
                    borderRadius: 0,
                    width: 272,
                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                        width: '100%',
                    },
                    '.MuiInputBase-root.show-oder-select': {
                        borderRadius: 0,
                        border: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                        height: 48,
                        '.MuiSelect-select': {
                            padding: '13.5px 14px',
                            fontWeight: 500,
                        },
                        '.MuiOutlinedInput-notchedOutline': {
                            borderWidth: 0,
                        },
                        '.MuiSvgIcon-root': {
                            fontSize: '2.5rem',
                            width: 30,
                            height: 30,
                            top: '50%',
                            transform: 'translateY(-50%)',
                        }
                    },
                },

            },

            // custom status product

            //my-track-order when the user buys, cancels, refunds Muichip
            '.MuiChip-root': {
                '&.success': {
                    backgroundColor: ColorStyles.Foundation.Success[ 200 ],
                    color: ColorStyles.Foundation.Success[ 600 ],
                },
                '&.warning': {
                    backgroundColor: ColorStyles.Foundation.brown[ 300 ],
                    color: ColorStyles.Foundation.YellowBrown[ 500 ],
                    cursor: 'pointer'
                },
                '&.danger': {
                    backgroundColor: ColorStyles.Foundation.Danger[ 50 ],
                    color: ColorStyles.Foundation.Danger[ 400 ],
                },
                '&.black': {
                    backgroundColor: ColorStyles.Foundation.Black[ 900 ],
                    color: ColorStyles.Foundation.baseColor.white,
                    cursor: 'pointer'
                }
            },
            '.drawer-slide-mytrack-order': {
                '.MuiPaper-root': {
                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                        width: 400,
                    },
                    [ MediaBreakpoints( Theme.down.downMobileSm ) ]: {
                        width: '100%'
                    },
                    '.my-track-order': {
                        width: 563,
                        padding: '100px 60px',
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                            width: '100%',
                            padding: '100px 32px',
                        },
                        '.MuiButton-btn-shopcart-1': {
                            width: '100% !important',
                            height: 48
                        },
                        '.MuiTypography-description7': {
                            a: {
                                color: ColorStyles.Foundation.YellowBrown[ 500 ]
                            }
                        }
                    },
                }
            },
            '.count-item-cart': {
                border: `1px solid ${ ColorStyles.Change.YellowBrown[ 600 ] }`,
                height: 48,
                width: '100%',
                maxWidth: 155,
                borderRadius: 3,
                '.MuiButtonBase-root': {
                    svg: {
                        color: ColorStyles.Change.YellowBrown[ 500 ]
                    }
                }
            },
            '.product-filter': {
                padding: '64px 0',
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    padding: '32px 0',
                },
            },
            '.load-more': {
                textAlign: 'center',
                paddingTop: '64px',
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    paddingTop: '32px',
                },
            },
            '.MuiPopper-root.tooltip': {
                backgroundColor: ColorStyles.Change.YellowBrown[ 500 ],
                borderRadius: 14,
                padding: 8,
                position: 'absolute !important',
                left: '10px !important',
                width: 300,
                overflowWrap: 'break-word',
                '.MuiTypography-root': {
                    ...TextStyles.Poppins[ 'Body04:14px' ].Regular,
                    color: ColorStyles.Change.Base.white,
                }
            },
            '.MuiPopper-root.tooltip::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                right: '100%',
                marginLeft: -10,
                // width: 0,
                // height: 0,
                borderWidth: 6,
                borderStyle: 'solid',
                borderColor: `transparent ${ ColorStyles.Change.YellowBrown[ 500 ] } transparent transparent `,
                transform: 'translateY(-50%)',
            },
            /**
             * search Mobile && search Desktop
             */
            '.search-header-Mobile': {
                width: 600,
                maxWidth: '100%',
                padding: "0px 14px",
                display: 'flex',
                '.social-action.social-action-search': {
                    backgroundColor: ColorStyles.Foundation.YellowBrown[ 500 ],
                    borderRadius: 'unset',
                    width: 48,
                    height: 48,
                },
                '.MuiFormControl-root': {
                    '.MuiInputBase-root': {
                        paddingRight: 0,
                        height: 48,
                        borderRadius: 'unset',
                        border: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
                    },
                }
            },
            '.search-header-desktop': {
                width: 367,
                maxWidth: '100%',
                padding: "0px 14px",
                display: 'flex',
                '.social-action.social-action-search': {
                    backgroundColor: ColorStyles.Foundation.YellowBrown[ 500 ],
                    borderRadius: 'unset',
                    width: 48,
                    height: 48,
                    position: 'relative'
                },
                '.MuiFormControl-root': {
                    '.MuiInputBase-root': {
                        paddingRight: 0,
                        height: 48,
                        borderRadius: 'unset',
                        border: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
                    },
                }
            },
            '.page-search-result': {
                '.no-product': {
                    '.image-no-product': {
                        width: 450,
                        minHeight: 450,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        margin: 'auto',
                        img: {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        },
                    },
                    '.btn-back-home': {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 16,
                        margin: '48px 0px 64px 0px',
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                            marginTop: '24px',
                            flexDirection: 'column',
                            gap: 16,
                        },
                        '.MuiButton-btn-shop-2': {
                            height: 48,
                            width: 210,
                        },
                        '.MuiButton-btn-shopcart-1': {
                            height: 48,
                            width: 210,
                        }
                    }
                }
            },
            /**
             * customs Container page
             */
            '.muiContainer-page': {
                paddingTop: '64px',
                paddingBottom: '64px',
                [ MediaBreakpoints( Theme.down.md ) ]: {
                    paddingTop: '32px',
                    paddingBottom: '32px',
                },
                '.block-item': {
                    height: '100%',
                },
            },
            /**==================
             * @BLOCK_PAGE_CONTENT
             * @CONTENT
             * @COMPONENT
             */
            /*******************
             * Layout My account ,all page for my layout account
             ******************/
            '.layout-my-account': {
                backgroundColor: ColorStyles.Foundation.baseColor.white,
                maxWidth: 1200,
                margin: 'auto !important',
                '.layout-my-account-menu': {

                },
                '.layout-my-account-content': {

                }
            },
            // open menu Left
            '.open-menu-Left': {
                width: 40,
                height: 40,
                backgroundColor: ColorStyles.Foundation.YellowBrown[ 500 ],
                padding: '10px 0px',
                marginBottom: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    width: 30,
                    height: 30,
                },
            },
            // menu left page my account
            '.menu-left-my-account': {
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                marginBottom: 255,
                [ MediaBreakpoints( Theme.down.md ) ]: {
                    marginBottom: 64,
                },
                '.menu-left-my-account-list': {
                    '.MuiTypography-title4': {
                        display: 'block',
                        height: 48,
                    },
                    '.menu-left-my-account-item': {
                        width: '100%',
                        a: {
                            width: '100%',
                            '.MuiButtonBase-root': {
                                '&.active-router-link': {
                                    backgroundColor: ColorStyles.Foundation.YellowBrown[ 100 ],
                                    '.MuiTypography-description': {
                                        color: ColorStyles.Foundation.YellowBrown[ 500 ]
                                    }
                                }
                            }
                        },
                    }
                }
            },
            // page my profile && edit profile
            '.page-my-profile': {
                '.MuiGrid-root.MuiGrid-item': {
                    paddingTop: 16,
                    '.my-profile-item': {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                        padding: '10px 16px',
                        backgroundColor: ColorStyles.Foundation.baseColor.white,
                        minHeight: 90,
                        '.MuiFormControl-root': {
                            '.MuiInputBase-root': {
                                '&:before': {
                                    borderBottom: 'unset'
                                },
                                '&:after': {
                                    borderBottom: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`
                                },
                            },
                            '&.select-edit-value': {
                                '.MuiInputBase-root': {
                                    borderRadius: 0,
                                    border: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                                    height: 48,
                                    '.MuiSelect-select': {
                                        padding: '13.5px 14px',
                                        fontWeight: 500,
                                    },
                                    '.MuiOutlinedInput-notchedOutline': {
                                        borderWidth: 0,
                                    },
                                    '.MuiButton-default': {
                                        minWidth: '0px',
                                        padding: '5px 10px',
                                        svg: {
                                            color: ColorStyles.Foundation.Neutral[ 700 ]
                                        }
                                    }
                                }
                            }
                        },
                        '.MuiFormControlLabel-root': {
                            '.MuiButtonBase-root': {
                                color: ColorStyles.Foundation.YellowBrown[ 500 ]
                            },
                            '.MuiTypography-root.MuiTypography-body1': {
                                fontWeight: 300,
                                color: ColorStyles.Foundation.Black[ 900 ]
                            }
                        }
                    }
                },
                '.btn-my-profile': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    marginTop: 24,
                    '.MuiButton-btn-shopcart-1': {
                        height: 40,
                        width: 105,
                        fontSize: 14,
                        fontWeight: 400,
                        whiteSpace: 'nowrap',
                    },
                    '.MuiButton-btn-shop-2': {
                        height: 40,
                        width: 164,
                        fontSize: 14,
                        fontWeight: 400,
                        whiteSpace: 'nowrap',
                    }
                }
            },
            // page my profile edit
            '.page-my-profile-edit': {
                '.MuiGrid-root.MuiGrid-item': {
                    paddingTop: 16,
                    '.my-profile-item': {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                        padding: '10px 16px',
                        backgroundColor: ColorStyles.Foundation.baseColor.white,
                        minHeight: 130,
                        '.MuiFormControl-root': {
                            '.MuiInputBase-root': {
                                '&:before': {
                                    borderBottom: 'unset'
                                },
                                '&:after': {
                                    borderBottom: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`
                                },
                            },
                            '&.select-edit-value': {
                                '.MuiInputBase-root': {
                                    borderRadius: 0,
                                    border: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                                    height: 48,
                                    '.MuiSelect-select': {
                                        padding: '13.5px 14px',
                                        fontWeight: 500,
                                    },
                                    '.MuiOutlinedInput-notchedOutline': {
                                        borderWidth: 0,
                                    },
                                    '.MuiButton-default': {
                                        minWidth: '0px',
                                        padding: '5px 10px',
                                        svg: {
                                            color: ColorStyles.Foundation.Neutral[ 700 ]
                                        }
                                    }
                                }
                            }
                        },
                        '.MuiFormControlLabel-root': {
                            '.MuiButtonBase-root': {
                                color: ColorStyles.Foundation.YellowBrown[ 500 ]
                            },
                            '.MuiTypography-root.MuiTypography-body1': {
                                fontWeight: 300,
                                color: ColorStyles.Foundation.Black[ 900 ]
                            }
                        }
                    }
                },
                '.btn-my-profile': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    marginTop: 24,
                    '.MuiButton-btn-shopcart-1': {
                        height: 40,
                        width: 105,
                        fontSize: 14,
                        fontWeight: 400,
                        whiteSpace: 'nowrap',
                    },
                    '.MuiButton-btn-shop-2': {
                        height: 40,
                        width: 164,
                        fontSize: 14,
                        fontWeight: 400,
                        whiteSpace: 'nowrap',
                    }
                }
            },
            // page address AddressBook
            '.page-address-book': {
                '.MuiTypography-heading2': {
                    display: 'block',
                    marginBottom: 24,
                },
                '.MuiPaper-root': {
                    boxShadow: 'unset',
                    '.MuiTable-root': {
                        '.MuiTableHead-root': {
                            backgroundColor: ColorStyles.Foundation.brown[ 100 ],
                            '.MuiTableCell-root': {
                                padding: '8px 16px',
                                textAlign: 'center',
                                whiteSpace: 'nowrap',
                            }
                        },
                        '.MuiTableBody-root': {
                            '.MuiTableCell-root': {
                                textAlign: 'start',
                                [ MediaBreakpoints( Theme.down.md ) ]: {
                                    whiteSpace: 'nowrap',
                                    padding: '20px 16px',
                                },
                                a: {
                                    textAlign: 'center',
                                    '.MuiTypography-lable11': {
                                        display: 'block',
                                        width: 100,
                                    }
                                }
                            }
                        }
                    }
                },
                '.MuiPaper-root::-webkit-scrollbar-thumb': {
                    backgroundColor: ColorStyles.Foundation.YellowBrown[ 500 ],
                    borderRadius: 6,
                },
                '.MuiPaper-root::-webkit-scrollbar': {
                    height: 5,
                },
                '.MuiButton-btn-shopcart-1': {
                    marginTop: 32,
                    width: 160,
                    height: 40,
                    whiteSpace: 'nowrap',
                }
            },
            // page new address AddressBook
            '.page-new-address-book': {
                '.MuiTypography-heading2': {
                    display: 'block',
                    marginBottom: 10,
                },
                '.btn-save-submit': {
                    display: 'flex',
                    gap: 32,
                    alignItems: 'center',
                    marginTop: 32,
                    '.MuiButton-btn-shopcart-1': {
                        width: 130,
                        height: 40,
                        whiteSpace: 'nowrap',
                    },
                    '.MuiButton-btn-shop-2': {
                        width: 79,
                        height: 40,
                        whiteSpace: 'nowrap',
                    }
                }
            },
            // page edit address AddressBook
            '.page-edit-address-book': {
                '.MuiTypography-heading2': {
                    display: 'block',
                    marginBottom: 10,
                },
                '.MuiButton-default': {
                    padding: 16,
                    backgroundColor: 'transparent'
                },
                '.btn-save-submit': {
                    display: 'flex',
                    gap: 32,
                    alignItems: 'center',
                    marginTop: 32,
                    '.MuiButton-btn-shopcart-1': {
                        width: 130,
                        height: 40,
                        whiteSpace: 'nowrap',
                    },
                    '.MuiButton-btn-shop-2': {
                        width: 79,
                        height: 40,
                        whiteSpace: 'nowrap',
                    }
                }
            },
            // popup edit address content
            '.popup-edit-address-content': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                gap: 8,
                '.btn-save-edit': {
                    display: 'flex',
                    gap: 16,
                    alignItems: 'center',
                    marginTop: 8,
                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                        flexDirection: 'column',
                        gap: 16,
                        margin: 'auto'
                    },
                    '.MuiButton-btn-shopcart-1': {
                        width: 134,
                        height: 40,
                        whiteSpace: 'nowrap',
                    },
                    '.MuiButton-btn-shop-2': {
                        width: 134,
                        height: 40,
                        whiteSpace: 'nowrap',
                    }
                }
            },
            // page all-oder
            '.all-oder': {
                '.no-order': {
                    backgroundColor: ColorStyles.Foundation.baseColor.white,
                    height: 190,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                '.MuiButton-btn-shopcart-1': {
                    width: 163,
                    height: 40,
                    whiteSpace: 'nowrap',
                    marginTop: 32,
                },
                '.list-oder-product': {
                    borderBottom: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                    padding: 24,
                    backgroundColor: ColorStyles.Foundation.baseColor.white,
                    '.list-oder-product-item': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        [ MediaBreakpoints( Theme.down.md ) ]: {
                            flexDirection: 'column',
                            alignItems: 'start',
                            gap: 24,
                        },
                        a: {
                            height: 'fit-content',
                        }
                    },
                }
            },
            // page my return 
            '.my-Returns': {
                ///////////  
            },
            // page detail my Returns
            '.details-my-returns': {
                '.return-process': {
                    padding: 16,
                    backgroundColor: ColorStyles.Foundation.baseColor.white,
                    '.return-process-list': {
                        display: 'flex',
                        flexDirection: 'row',
                        [ MediaBreakpoints( Theme.down.md ) ]: {
                            flexDirection: 'column'
                        },
                        '.return-process-item': {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            gap: 13,
                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                flexDirection: 'row'
                            },
                            '.MuiTypography-root': {
                                width: '50%'
                            },
                            '.check-process': {
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'row',
                                [ MediaBreakpoints( Theme.down.md ) ]: {
                                    flexDirection: 'column'
                                },
                                '.process': {
                                    width: 24,
                                    height: 24,
                                    backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
                                    borderRadius: '50%',
                                    '&.process-active': {
                                        backgroundColor: ColorStyles.Foundation.Success[ 500 ],
                                    },
                                },
                                '.connect-processor-0': {
                                    width: 108,
                                    height: '2px',
                                    backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
                                    top: '26%',
                                    left: '80%',
                                    [ MediaBreakpoints( Theme.down.md ) ]: {
                                        width: 2,
                                        height: 50,
                                    },
                                    '&.connect-processor-0-active': {
                                        backgroundColor: ColorStyles.Foundation.Success[ 500 ],
                                    }
                                },
                                '.connect-processor-1': {
                                    width: 108,
                                    height: '2px',
                                    backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
                                    top: '26%',
                                    left: '101%',
                                    [ MediaBreakpoints( Theme.down.md ) ]: {
                                        width: 2,
                                        height: 50,
                                    },
                                    '&.connect-processor-1-active': {
                                        backgroundColor: ColorStyles.Foundation.Success[ 500 ],
                                    }
                                },
                                '.connect-processor-2': {
                                    width: 108,
                                    height: '2px',
                                    backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
                                    top: '26%',
                                    left: '101%',
                                    [ MediaBreakpoints( Theme.down.md ) ]: {
                                        width: 2,
                                        height: 50,
                                    },
                                    '&.connect-processor-2-active': {
                                        backgroundColor: ColorStyles.Foundation.Success[ 500 ],
                                    }
                                },
                                '.connect-processor-3': {
                                    width: 108,
                                    height: '2px',
                                    backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
                                    top: '26%',
                                    left: '101%',
                                    [ MediaBreakpoints( Theme.down.md ) ]: {
                                        width: 2,
                                        height: 50,
                                    },
                                    '&.connect-processor-3-active': {
                                        backgroundColor: ColorStyles.Foundation.Success[ 500 ],
                                    }
                                },
                                '.connect-processor-4': {
                                    width: 108,
                                    height: '2px',
                                    backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
                                    top: '26%',
                                    left: '101%',
                                    [ MediaBreakpoints( Theme.down.md ) ]: {
                                        width: 2,
                                        height: 50,
                                    },
                                    '&.connect-processor-4-active': {
                                        backgroundColor: ColorStyles.Foundation.Success[ 500 ],
                                    }
                                },
                                '.connect-processor-5': {
                                    display: 'none'
                                },
                            }

                        }
                    }
                },
                '.refund-details': {
                    padding: 16,
                    backgroundColor: ColorStyles.Foundation.baseColor.white,
                    marginTop: 32,
                    '.refund-details-item': {
                        display: 'flex',
                        gap: 24,
                        width: '80%',
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                            flexDirection: 'column',
                            gap: 16,
                        },
                    },
                    '.MuiButton-btn-shop-2': {
                        width: '100%',
                        height: 40,
                        marginTop: 24,
                    }
                }
            },
            // page request cancellation of page cancellation
            '.request-cancellation': {
                '.cancellation-process': {
                    padding: 16,
                    backgroundColor: ColorStyles.Foundation.baseColor.white,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '.cancellation-process-list': {
                        display: 'flex',
                        flexDirection: 'row',
                        [ MediaBreakpoints( Theme.down.md ) ]: {
                            flexDirection: 'column'
                        },
                        '.cancellation-process-item': {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            gap: 24,
                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                flexDirection: 'row'
                            },
                            '.MuiTypography-root': {
                                width: '50%'
                            },
                            '.check-process': {
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'row',
                                [ MediaBreakpoints( Theme.down.md ) ]: {
                                    flexDirection: 'column'
                                },
                                '.process': {
                                    width: 24,
                                    height: 24,
                                    backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
                                    borderRadius: '50%',
                                    '&.process-active': {
                                        backgroundColor: ColorStyles.Foundation.Success[ 500 ],
                                    },
                                },
                                '.connect-processor-0': {
                                    width: 340,
                                    height: '2px',
                                    backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
                                    top: '26%',
                                    left: '80%',
                                    [ MediaBreakpoints( Theme.down.md ) ]: {
                                        width: 2,
                                        height: 50,
                                    },
                                    '&.connect-processor-0-active': {
                                        backgroundColor: ColorStyles.Foundation.Success[ 500 ],
                                    }
                                },
                                '.connect-processor-1': {
                                    display: 'none',
                                },
                            }

                        }
                    }
                },
                '.cancellation-details': {
                    padding: 16,
                    backgroundColor: ColorStyles.Foundation.baseColor.white,
                    marginTop: 32,
                    '.cancellation-details-item': {
                        display: 'flex',
                        gap: 24,
                        width: '80%',
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                            flexDirection: 'column',
                            gap: 16,
                        },
                    },
                    '.MuiButton-btn-shop-2': {
                        width: '100%',
                        height: 40,
                        marginTop: 24,
                    }
                }
            },
            /***************************
         * page track my oder package
         ***************************/
            '.tracking-oder-package': {
                backgroundColor: ColorStyles.Foundation.Neutral[ 200 ],
                margin: '64px 0px 150px 0px',
            },
            '.content-tracking-oder': {
                padding: '44px 32px',
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    padding: '12px 8px',
                },
                '.header-oder-package': {
                    display: 'flex',
                    gap: 16,
                    flexDirection: 'column',
                    alignItems: 'start'
                },
                '.information-order-details': {
                    padding: 16,
                    backgroundColor: ColorStyles.Foundation.baseColor.white,
                    width: '100%',
                    margin: '32px 0px',
                },
                '.oder-tracking': {
                    padding: '24px 32px',
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 32,
                    },
                    backgroundColor: ColorStyles.Foundation.baseColor.white,
                    '.oder-tracking-list': {
                        display: 'flex',
                        [ MediaBreakpoints( Theme.down.md ) ]: {
                            flexDirection: 'column'
                        },
                        justifyContent: 'center',
                        '.oder-tracking-item': {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            gap: 21,
                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                alignItems: 'center',
                                gap: 0,
                            },
                            '.check-oder': {
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'row',
                                [ MediaBreakpoints( Theme.down.md ) ]: {
                                    flexDirection: 'column'
                                },
                                '.icon-oder': {
                                    minWidth: 'unset',
                                    width: 56,
                                    height: 56,
                                    backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
                                    '&.active-oder': {
                                        backgroundColor: ColorStyles.Foundation.Success[ 500 ],
                                        svg: {
                                            color: ColorStyles.Foundation.baseColor.white
                                        }
                                    },
                                },
                                '.connect-processor-0': {
                                    width: 143,
                                    height: '2px',
                                    backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
                                    top: '26%',
                                    left: '80%',
                                    [ MediaBreakpoints( Theme.down.md ) ]: {
                                        width: 2,
                                        height: 50,
                                    },
                                },
                                '.connect-processor-1': {
                                    width: 143,
                                    height: '2px',
                                    backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
                                    top: '26%',
                                    left: '101%',
                                    [ MediaBreakpoints( Theme.down.md ) ]: {
                                        width: 2,
                                        height: 50,
                                    },
                                },
                                '.connect-processor-2': {
                                    width: 143,
                                    height: '2px',
                                    backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
                                    top: '26%',
                                    left: '85%',
                                    [ MediaBreakpoints( Theme.down.md ) ]: {
                                        width: 2,
                                        height: 50,
                                    },
                                },
                                '.connect-processor-3': {
                                    display: 'none'
                                },
                            },
                        }
                    },
                    '.shipping-details': {
                        marginTop: 46,
                        display: 'flex',
                        marginLeft: 132,
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: 16,
                        [ MediaBreakpoints( Theme.down.lg ) ]: {
                            marginLeft: 10
                        },
                        '.MuiTypography-description': {
                            whiteSpace: 'nowrap',
                        },
                        '.shipping-details-text': {
                            display: 'flex',
                            gap: 24,
                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                flexDirection: 'column',
                                alignItems: 'start',
                            },
                        }
                    }
                },
                '.MuiButton-btn-shopcart-1': {
                    width: 202,
                    height: 48,
                    marginTop: 32,
                }
            },
            /***************************
            * page track my oder detail
            ***************************/
            '.order-detail': {
                margin: '64px 0px 150px 0px',
                '.MuiButton-btn-shopcart-1': {
                    width: 358,
                    height: 48,
                    marginTop: 64,
                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                        width: '100%',
                        marginTop: 32,
                    },
                },
            },
            '.content-order-detail': {
                backgroundColor: ColorStyles.Foundation.Neutral[ 200 ],
                padding: '44px 32px',
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    padding: '12px 8px',
                },
                '.header-order-detail': {
                    display: 'flex',
                    gap: 16,
                    flexDirection: 'column',
                    alignItems: 'start'
                },
                '.customer-information': {
                    border: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                    marginTop: 32,
                    '.customer-information-header': {
                        padding: '10px 16px',
                        borderBottom: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                    },
                    '.customer-information-content': {
                        backgroundColor: ColorStyles.Foundation.baseColor.white,
                        padding: 16,
                        '.MuiGrid-root.MuiGrid-item': {
                            [ MediaBreakpoints( Theme.down.sm ) ]: {
                                marginTop: 16,
                            },
                        }
                    }
                },
                '.payment-summary': {
                    border: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                    marginTop: 32,
                    '.payment-summary-header': {
                        padding: '10px 16px',
                        borderBottom: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                    },
                    '.payment-summary-price': {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                        padding: 16,
                        backgroundColor: ColorStyles.Foundation.baseColor.white
                    }
                }
            },
            /******************
             * page checkout payment
             ******************/
            '.page-payment': {
                '.purchase-information': {
                    padding: '20px 16px',
                    border: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 24,
                    '.MuiTypography-blog-date': {
                        whiteSpace: 'nowrap',
                    },
                    '.purchase-information-item': {
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                            flexDirection: 'column',
                            alignItems: 'start'
                        },
                    }
                },
                '.payment-check': {
                    marginTop: 32,
                    '.payment-warning-check-cart': {
                        minHeight: 64,
                        margin: '32px 0px',
                        padding: '0px 16px',
                        border: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
                        backgroundColor: ColorStyles.Foundation.YellowBrown[ 50 ],
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center'
                    },
                    '.payment-check-credit-cart': {
                        border: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
                        borderRadius: '4px',
                        '.MuiPaper-root.MuiAccordion-root': {
                            margin: 0,
                            borderRadius: '4px',
                            boxShadow: 'none',
                            overflow: 'hidden',
                            '.MuiButtonBase-root': {
                                flexDirection: 'row-reverse',
                                gap: '32px',
                                '&.AccordionSummary-readit-cart': {
                                    borderBottom: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
                                    backgroundColor: ColorStyles.Foundation.brown[ 100 ],

                                },
                                '&.AccordionSummary-paypal': {
                                    borderTop: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
                                    backgroundColor: ColorStyles.Foundation.brown[ 100 ],
                                },
                                '.MuiAccordionSummary-content': {
                                    margin: 0,
                                    '.header-creadit-cart': {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        width: '100%',
                                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                                            flexDirection: 'column',
                                            alignItems: 'start',
                                            gap: 8,
                                            padding: '16px 0px'
                                        },
                                    },
                                }
                            },
                            '.MuiCollapse-root': {
                                '.MuiAccordionDetails-root': {
                                    padding: '8px 154px',
                                    textAlign: 'center',
                                    minHeight: 172,
                                    gap: 20,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                                        padding: '8px 50px',
                                    },
                                    '.MuiButton-btn-shopcart-1': {
                                        width: 234,
                                        height: 40,
                                        whiteSpace: 'nowrap',
                                    }
                                }
                            }
                        },

                    }
                }
            },

            /******************
             * page my shipment
             ******************/
            '.my-shipment': {
                '.breadcrumbs-my-shipment': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 32,
                    gap: 10,
                },
                '.contact-information': {
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    gap: 6,
                    padding: '24px 0px',
                    borderTop: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                    borderBottom: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                    '.btn-shipping-active': {
                        backgroundColor: '#26231E',
                        color: '#FFFFFF',
                        paddingLeft: 32,
                        paddingRight: 32,
                        height: 44,
                        '.MuiTypography-root': {
                            fontFamily: "'Poppins'",
                        }
                    },
                    '.btn-shipping-diable': {
                        backgroundColor: '#ECECEB',
                        color: '#A9A7A3',
                        paddingLeft: 32,
                        paddingRight: 32,
                        height: 44,
                        '.MuiTypography-root': {
                            fontFamily: "'Poppins'",
                        }
                    }
                },
                '.delivery-method': {
                    display: 'flex',
                    flexDirection: "column",
                    paddingTop: '32px',
                    '.delivery-method-services': {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 48,
                        paddingTop: 16,
                    }
                },
                '.Shipping-address': {
                    display: 'flex',
                    flexDirection: 'column',
                    '.Shipping-address-form': {
                        paddingBottom: 32,
                        '.MuiStepper-root': {
                            width: '80%',
                            paddingTop: 16,
                            paddingBottom: 32,
                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                flexDirection: 'column'
                            },
                            '.MuiStep-root': {
                                '.MuiStepConnector-root': {
                                    display: 'none'
                                },
                                '.MuiStepLabel-root': {
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 10,
                                    justifyContent: 'around',
                                    '.MuiStepLabel-labelContainer': {
                                        width: 'unset',
                                        '.MuiStepLabel-label': {
                                            margin: 0,
                                        },
                                        '.MuiStepLabel-label.Mui-disabled': {
                                            color: ColorStyles.Foundation.Success[ 500 ]
                                        },
                                        '.MuiStepLabel-label.Mui-active': {
                                            color: ColorStyles.Foundation.Success[ 500 ],
                                            fontWeight: 'unset',
                                        },
                                        '.MuiStepLabel-label.Mui-completed': {
                                            color: ColorStyles.Foundation.Success[ 500 ],
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                '.payment-sumary': {
                    '.cart-list': {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 24,
                        '.mini-cart-list-item': {
                            border: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                            borderRadius: 4,
                            padding: 16,
                            '.cart-detail': {
                                [ MediaBreakpoints( Theme.down.md ) ]: {
                                    display: 'flex',
                                    gap: 20,
                                },
                            },
                            '.image-cart': {
                                width: 138,
                                height: '100%',
                                border: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                                position: 'relative',
                                '.quantity-cart': {
                                    position: 'absolute',
                                    top: '-17%',
                                    right: '-16%',
                                    borderRadius: '50%',
                                    width: 24,
                                    height: 24,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    backgroundColor: ColorStyles.Foundation.Neutral[ 700 ]
                                },
                                img: {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                },
                            },
                        },
                        '.cart-detail': {
                            display: 'flex',
                            [ MediaBreakpoints( Theme.down.sm ) ]: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 10,
                            },
                            '.cart-detail-text': {
                                display: 'flex',
                                flexDirection: 'column',
                            },
                            '.cart-detail-total': {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                [ MediaBreakpoints( Theme.down.sm ) ]: {
                                    display: 'flex',
                                    flexDirection: 'row',
                                },
                            }
                        },
                    },
                    '.checkout': {
                        padding: '24px',
                        width: '100%',
                        height: '100%',
                        marginTop: 32,
                        backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
                        '.MuiTypography-title2': {
                            paddingBottom: 24,
                            borderBottom: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                            display: 'block',
                            width: '100%'
                        },
                        '.total-price': {
                            paddingBottom: '24px',

                            '.total-price-item': {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '24px',
                            }
                        }
                    },
                }
            },
            /*********************
             * page forgot-password
             **********************/
            '.forgot-reset-password': {
                margin: '64px 0px',
                backgroundColor: ColorStyles.Foundation.Neutral[ 200 ],
                '.MuiTypography-heading': {
                    paddingLeft: 16,
                    paddingBottom: 12,
                },
                '.forgot-reset-password-content': {
                    padding: '44px 32px',
                    maxWidth: 788,
                    margin: 'auto',
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        padding: '24px 0px',
                    },
                    form: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16,
                        '.MuiFormControl-root': {
                            backgroundColor: ColorStyles.Foundation.brown[ 50 ],
                            padding: '10px 16px',
                            '.MuiInputBase-root': {
                                border: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                                height: 42,
                                '.MuiOutlinedInput-notchedOutline': {
                                    borderWidth: '0px',
                                },
                            }
                        },
                        '.MuiButton-btn-shopcart-1': {
                            margin: ' 24px 0px',
                            height: 40,
                            width: 217,
                        }
                    }
                }
            },
            /***********
             * mini-cart
             ***********/
            '.content-mini-cart': {
                padding: "28px 32px 60px 32px",
                width: 550,
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    width: '100%',
                    padding: "10px 16px",
                    minHeight: '150vh',
                },
                '.Notification-header': {
                    backgroundColor: ColorStyles.Foundation.YellowBrown[ 500 ],
                    width: '100%',
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingLeft: 10,
                    paddingRight: 20,
                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                        height: 56,
                    },
                    span: {
                        fontSize: 20,
                    },
                    svg: {
                        cursor: 'pointer',
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                            width: 32,
                            height: 32,
                        },
                    }
                },

            },
            '.mini-cart-list': {
                padding: '32px 0px',
                borderBottom: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                '.mini-cart-list-item': {
                    '.image-cart': {
                        width: 138,
                        height: '100%',
                        border: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                        img: {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        },
                    },
                    '.cart-detail': {
                        display: 'flex',
                        gap: 130,
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10,
                        },
                        '.cart-detail-text': {
                            display: 'flex',
                            flexDirection: 'column',
                        },
                        '.cart-detail-total': {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            [ MediaBreakpoints( Theme.down.sm ) ]: {
                                display: 'flex',
                                flexDirection: 'row',
                            },
                        }
                    },
                    button: {
                        width: '100%',
                        marginTop: 12,
                        marginBottom: 24,
                    },
                }
            },
            '.checkout': {
                '.total-price': {
                    padding: '24px 0px',
                    '.total-price-item': {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 24,
                    },
                },
                button: {
                    width: '100%',
                    height: 56,
                },
                a: {
                    display: 'contents',
                }
            },
            /***************
             * page-work-shop
             ***************/
            '.page-work-shop': {
                padding: '64px 0px',
                '.page-work-shop-news': {
                    paddingTop: 45,
                    paddingBottom: 64,
                    '.page-work-shop-item': {
                        width: 276,
                        minHeight: 256,
                        width: '100%',
                        '.page-work-shop-item-image': {
                            height: '100%',
                            width: '100%',
                            marginBottom: 16,
                            img: {
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }
                        }
                    }
                },
                '.panigation': {
                    display: 'flex',
                    justifyContent: 'center',
                    '.MuiPagination-root': {
                        '.MuiPagination-ul': {
                            gap: 32,
                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                gap: 10,
                            },
                            '.MuiButtonBase-root': {
                                '&.Mui-selected': {
                                    backgroundColor: ColorStyles.Foundation.brown[ 500 ],
                                },
                                '&.Mui-disabled': {
                                    display: 'none',
                                },
                                minWidth: 48,
                                minHeight: 48,
                                borderRadius: 0,
                                backgroundColor: ColorStyles.Foundation.Neutral[ 200 ],
                                borderWidth: 0,
                            }
                        }
                    }
                },
            },
            '.content-work-shop': {
                '.banner-image': {
                    height: 341,
                    width: '100%',
                    img: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }
                },
                '.content-work-shop-text': {
                    padding: '64px 0'
                },
                '.content-work-shop-social': {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    marginBottom: 64,
                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: 32,
                    },
                    button: {
                        width: 210,
                        height: 48,
                    }
                }
            },
            /**************
             * page-about-us
             ***************/
            '.about-us': {
                padding: '64px 0px',
                '.about-us-vision': {
                    paddingTop: 45,
                    paddingBottom: 64,
                    maxWidth: 581,
                    margin: 'auto',
                    '.about-us-vision-item': {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        gap: 20,
                    },
                },
                '.about-us-image': {
                    '.slick-about-us': {
                        '.slick-list': {
                            '.slick-track': {
                                display: 'flex',
                                gap: 24,
                                [ MediaBreakpoints( Theme.down.md ) ]: {
                                    display: 'flex',
                                    gap: 0,
                                },
                                '.slick-slide': {
                                    img: {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }
                                }
                            }
                        }
                    }
                },
            },

            /**************
           * Contact
           **************/
            '.contact': {
                [ MediaBreakpoints( Theme.down.md ) ]: {
                    display: 'flex !important',
                    flexDirection: 'column-reverse !important'
                },
                '.gridItemContact': {
                    '.MuiTypography-root.MuiTypography-lable17': {
                        color: ColorStyles.Change.Base.black,
                    },
                    '.MuiButton-root.MuiButton-btn-shopcart-1': {
                        maxWidth: '100%',
                        width: '40%',
                        '.MuiTypography-root': {
                            color: ColorStyles.Change.Base.white,
                        },
                        '&:hover': {
                            backgroundColor: ColorStyles.Change.YellowBrown[ 500 ],
                            '.MuiTypography-root': {
                                color: ColorStyles.Change.Base.white,
                            }
                        }
                    }
                },
                '.banner-home': {
                    width: '100%',
                    margin: 'auto',
                    paddingTop: '1rem',
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        width: '70%',
                    },
                    img: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    },
                },
            },
            /******************
            * FAQ
            ******************/
            '.faq': {
                padding: '64px 0',
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    paddingTop: '32px',
                    paddingBottom: '135px',
                },
                '.faq-content': {
                    maxWidth: 735,
                    margin: 'auto',
                    '.faq-title': {
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16,
                    },
                    '.faq-content-questions': {
                        padding: '32px 0px',
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                            padding: 0,
                        },
                        '.MuiPaper-root': {
                            borderBottom: `1px solid ${ ColorStyles.Foundation.Black[ 600 ] }`,
                            margin: 0,
                            paddingTop: 24,
                            paddingBottom: 32,
                            boxShadow: 'none',
                            ':last-of-type': {
                                borderRadius: '0px'
                            },
                            '.MuiButtonBase-root': {
                                margin: 0,
                                padding: 0,
                                '.MuiAccordionSummary-content': {
                                    margin: 0,
                                }
                            },
                            '.MuiCollapse-root': {
                                '.MuiAccordionDetails-root': {
                                    padding: 0,
                                }
                            }
                        },

                    }
                },
            },
            '.faq-content-botom': {
                textAlign: 'center',
                backgroundColor: ColorStyles.Foundation.Neutral[ 200 ],
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '32px 0px',
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    margin: '32px 16px',
                },
                button: {
                    width: 121,
                    height: 40,
                    marginTop: 32,
                    padding: '9px 12px',
                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                        marginTop: 16,
                    },
                }
            },
            /***********************
             * my shipment
             ***********************/
            '.myshipment': {
                '.myshipment-container': {
                    padding: '64px 0',
                    width: 646,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: 'auto',
                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                        width: '100%',
                    },
                    '.myshipment-confirmation': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        padding: '24px 0',
                        backgroundColor: ColorStyles.Foundation.Neutral[ 200 ],
                        width: '100%',
                        '.MuiTypography-body8': {
                            margin: '20px 0px 16px 0px'
                        }
                    },
                    '.myshipment-confirmed': {
                        padding: '47px 50px',
                        display: 'flex',
                        textAlign: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 24,
                        '.MuiButton-btn-shop-2 ': {
                            width: 197,
                            height: 48,
                        },
                        '.MuiTypography-heading': {
                            padding: '0px 20px'
                        }
                    },
                    '.myshipment-customer-information': {
                        border: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                        borderRadius: 2,
                        width: '100%',
                        marginBottom: 47,
                        '.customer-information-header': {
                            borderBottom: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                            height: 48,
                            width: '100%',
                            backgroundColor: ColorStyles.Foundation.Neutral[ 200 ],
                            padding: '10px 16px',
                        },
                        '.myshipment-customer-information-visa': {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'start',
                            padding: '16px 18px',
                            gap: 36,
                            [ MediaBreakpoints( Theme.down.sm ) ]: {
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 20,
                            },
                            '.myshipment-customer-information-visa-item': {
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 36,
                                minWidth: '100%',
                                gap: 136,
                                [ MediaBreakpoints( Theme.down.sm ) ]: {
                                    margin: 0,
                                    gap: 14,
                                    flexDirection: 'column',
                                },
                                '.visa': {
                                    border: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                                    color: '#142688',
                                    borderRadius: 3,
                                    width: 36,
                                    height: 22,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: 10,
                                    fontWeight: 900,
                                }
                            },
                        },
                    },
                    '.MuiButton-btn_black': {
                        borderRadius: 'unset',
                        padding: '13px 0',
                        width: 255,
                        height: 48,
                    }
                }
            },

            /***************
             * privacy-policy
             ***************/
            '.privacy-policy': {
                paddingTop: 96,
                paddingBottom: 130,
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    padding: '64px 0px',
                },
                '.privacy-policy-content': {
                    maxWidth: 800,
                    margin: 'auto',
                    '.privacy-policy-content-heading': {
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '.MuiTypography-root.MuiTypography-description10': {
                            marginTop: 24,
                            display: 'block',
                        }
                    }
                }
            },
            /**********
             * page 404
             **********/
            '.page-404': {
                padding: '64px 0px',
                '.image-404': {
                    margin: 'auto',
                    maxWidth: 450,
                    img: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }
                },
                '.btn-404': {
                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                        flexDirection: 'column',
                        gap: 16,
                    },
                    marginTop: 48,
                    '.btn-back': {
                        width: 210,
                        height: 48,
                    },
                    '.btn-home': {
                        width: 210,
                        height: 48,
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                            margin: 0,
                        },
                    },
                }
            },

            /**********
             * drawer filter by category
             **********/
            '&.drawer-filter': {
                '.MuiPaper-root': {
                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                        width: '100%',
                        minHeight: 862,
                    },
                    '.content-filter': {
                        padding: '32px 56px',
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                            width: '100%',
                            padding: '32px 16px',
                        },
                        '.title-filter': {
                            '.MuiTypography-root': {
                                [ MediaBreakpoints( Theme.down.sm ) ]: {
                                    fontSize: 25,
                                }
                            },
                            paddingTop: 88,
                            paddingBottom: 24,
                            svg: {
                                cursor: 'pointer',
                            }
                        },
                        '.availabily-filter': {
                            padding: '12px 0',
                            '.availabily-check': {
                                '.MuiButtonBase-root': {
                                    padding: 0,
                                    margin: 0,
                                    color: ColorStyles.Foundation.YellowBrown[ 500 ],
                                    '.MuiSvgIcon-root': {
                                        fontSize: 30,
                                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                                            fontSize: 24,
                                        }
                                    },
                                },
                                '.MuiTypography-root': {
                                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                                        fontSize: 14,
                                    },
                                },
                            }
                        },
                        '.price-fliter': {
                            '.MuiSlider-root.MuiSlider-colorPrimary': {
                                color: ColorStyles.Foundation.YellowBrown[ 500 ],
                                marginLeft: 8,
                                width: '95%',
                                '.MuiSlider-thumb': {
                                    height: 16,
                                    width: 16,
                                }
                            },
                            '.price-btn-filter': {
                                [ MediaBreakpoints( Theme.down.sm ) ]: {
                                    justifyContent: 'space-between',
                                },
                                '.price-count-filter': {
                                    padding: '10px 0',
                                    width: 160,
                                    height: 48,
                                    color: ColorStyles.Foundation.baseColor.black,
                                    border: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                                    borderRadius: 1,
                                    textAlign: 'center',
                                }
                            }
                        },
                        '.MuiButtonBase-root': {
                            width: '100%',
                            marginTop: 24,
                            borderRadius: 'unset',
                        }
                    },
                },

            },


            /****************
             * popup-checkout-guest && login && sigin in && check code email
             ****************/
            '.form-login': {
                button: {
                    width: '100%',
                    height: 48,
                },
                '.btn-checkout-sign-up': {
                    padding: '32px 0px 64px',
                },
                '.text-forgot-password': {
                    margin: '16px 0',
                    width: 'fit-content',
                    float: 'right',
                },
                '.checkout-guest': {
                    height: '100%',
                    button: {
                        width: 158,
                        height: 48,
                        marginTop: 32,
                    }
                }
            },
            '.form-sigin-in': {
                button: {
                    width: '100%',
                    height: 48,
                },
                '.check-conditions': {
                    paddingTop: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    '.check-conditions-item': {
                        '.MuiButtonBase-root.MuiCheckbox-root': {
                            padding: 0,
                            // color: ColorStyles.Foundation.YellowBrown[ 500 ],
                        }
                    }
                },
                '.btn-create-acount': {
                    padding: '32px 0px'
                },
            },
            '.check-code-verify-input': {
                '.MuiTypography-root.MuiTypography-description8': {
                    [ MediaBreakpoints( Theme.up.sm ) ]: {
                        display: 'block',
                        width: '60%',
                    },
                },
                '.check-code-input': {
                    padding: '32px 0',
                    '.react-code-input.check-code-verify': {
                        display: 'flex !important',
                        gap: 16,
                        marginBottom: 32,
                        input: {
                            width: 60,
                            height: 60,
                            fontFamily: "'Domine'",
                            fontWeight: 400,
                            fontSize: 25,
                            lineHeight: '155%',
                            letterSpacing: '1.8%',
                            margin: 'auto',
                            textAlign: 'center',
                            border: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
                            color: ColorStyles.Foundation.YellowBrown[ 500 ],
                            borderRadius: '4px',
                            boxShadow: ShadowBakery.Small,
                            [ MediaBreakpoints( Theme.down.sm ) ]: {
                                width: '100%',
                                height: '100%',
                            },
                        }
                    }
                },
                '.button-next-prev': {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    '.MuiButton-btn-shopcart-1': {
                        width: 173,
                        height: 48,
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                            width: '100%',
                            margin: '0px 10px'
                        },
                    },
                    '.MuiButton-default': {
                        width: 173,
                        height: 48,
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                            width: '100%',
                            margin: '0px 10px',
                        },
                    }
                }
            },
            /*************************
            * popup add cart succsess 
            *************************/
            '&.Dialog-popup.popup-cart': {
                '.MuiDialog-container': {
                    '.MuiPaper-root': {
                        width: '757px !important',
                        '.popup': {
                            '.circle': {
                                backgroundColor: `${ ColorStyles.Change.Base.white } !important`,
                                '&:hover': {
                                    backgroundColor: `${ ColorStyles.Change.YellowBrown[ 500 ] } !important`,
                                    svg: {
                                        color: `${ ColorStyles.Change.Base.white } !important`
                                    }
                                }
                            },
                            '.popup-content': {
                                '.popup-add-cart': {
                                    padding: 48,
                                    [ MediaBreakpoints( Theme.down.md ) ]: {
                                        padding: 32,
                                    },
                                    '.add-cart-succsess': {
                                        '.MuiStack-root': {
                                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                                alignItems: 'center',
                                                textAlign: 'center'
                                            },
                                            '.MuiBox-root': {
                                                '.MuiTypography-root.MuiTypography-lable8': {
                                                    color: ColorStyles.Change.Base.black
                                                }
                                            }
                                        }
                                    },
                                    '.popup-btn': {
                                        '.btn-continue': {
                                            height: 44,
                                            width: '30%',
                                            backgroundColor: ColorStyles.Change.Base.white,
                                            border: `1px solid ${ ColorStyles.Change.YellowBrown[ 500 ] }`,
                                            borderRadius: 3,
                                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                                width: '100%',
                                            },
                                        },
                                        '.btn-checkout-product': {
                                            height: 44,
                                            borderRadius: 3,
                                            '&:hover': {
                                                backgroundColor: ColorStyles.Change.YellowBrown[ 500 ]
                                            },
                                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                                width: '100%',
                                            },
                                        },
                                        '.btn-checkout': {
                                            height: 44,
                                            width: '20%',
                                            borderRadius: 3,
                                            '&:hover': {
                                                backgroundColor: ColorStyles.Change.YellowBrown[ 500 ]
                                            },
                                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                                width: '100%',
                                            },
                                        }
                                    }
                                },
                            }
                        }
                    }
                }
            },

            /***********************
             * popup - time - message
             ***********************/
            '.popup-time': {
                minHeight: 547,
                padding: '64px 0px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                '.popup-title-date-select': {
                    marginBottom: 32,
                },
                '.popup-checked-time': {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 48,
                    margin: '64px 0',
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        flexDirection: 'column',
                        margin: '32px 0',
                    },
                    '.popup-checked-time-item': {
                        height: '56px',
                        padding: '12px 24px',
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 24,
                        border: `1px solid  ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                        '.MuiButtonBase-root.MuiCheckbox-root': {
                            padding: 0,
                        },
                    },
                },
                '.popup-select-date-time': {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 48,
                    marginBottom: 64,
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        flexDirection: 'column',
                        marginBottom: 32,
                    },
                    '.MuiFormControl-root': {
                        width: 228,
                        height: 56,
                        '.MuiInputBase-root': {
                            height: 56,
                            border: `1px solid  ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                            '.MuiSelect-select': {
                                paddingRight: 114
                            },
                            '.MuiOutlinedInput-notchedOutline': {
                                borderWidth: 0,
                            }
                        }
                    },
                },
            },
            '.popup-message': {
                minHeight: 636,
                padding: '64px 0px',
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    padding: '101px 0px',
                },
                '.popup-message-item': {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%',
                    '.popup-content-message': {
                        marginBottom: 32,
                        marginTop: 64,
                        [ MediaBreakpoints( Theme.down.md ) ]: {
                            marginTop: 32,
                        },
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                            padding: ' 0px 15px'
                        },
                        '.popup-content-message-checkbox': {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 64,
                            marginBottom: 32,
                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                flexDirection: 'column',
                            },
                            [ MediaBreakpoints( Theme.down.sm ) ]: {
                                gap: 32
                            },
                            '.popup-content-message-checkbox-item': {
                                border: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                                display: 'flex',
                                width: '100%',
                                alignItems: 'start',
                                flexDirection: 'row',
                                gap: 24,
                                padding: '12px 24px',
                                '.checkbox-item-text': {
                                    textAlign: 'left',
                                    span: {
                                        whiteSpace: 'nowrap',
                                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                                            whiteSpace: 'unset',
                                        },
                                    }
                                },
                            }
                        },
                        '.MuiFormControl-root': {
                            width: '100%',
                            border: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                            '.MuiInputBase-root': {
                                fontFamily: "'Poppins'",
                                fontWeight: 300,
                                fontSize: 20,
                                lineHeight: "155%",
                                letterSpacing: "1.8%",
                                color: ColorStyles.Foundation.Neutral[ 700 ],
                                padding: '20px 14px',
                            },
                            '.MuiOutlinedInput-notchedOutline': {
                                borderWidth: 0,
                            }
                        },
                    },
                    button: {
                        width: 215,
                        height: 56,
                        borderRadius: 0,
                    }
                },
            },
            /**************
             *cart shoping
             **************/
            '.breadcrumbs-my-shipment': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 48,
                gap: 10,
            },
            '.cart-shopping': {
                paddingBottom: 32,
                '.cart-item': {
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        position: 'relative'
                    },
                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                        border: 'unset',
                    },
                    img: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    },
                    padding: '32px 14px',
                    border: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                    '.cart-item-image': {
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                            border: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                        },
                        marginBottom: 24,
                    },
                    '.cart-shopping-info': {
                        paddingBottom: 12,
                        borderBottom: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                        '.cart-shopping-info-item': {
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                flexDirection: 'column',
                                alignItems: 'start'
                            },
                            '.price-cart': {
                                [ MediaBreakpoints( Theme.down.md ) ]: {
                                    position: 'absolute',
                                    bottom: '4%',
                                    left: '4%',
                                },
                            }
                        }
                    },
                    '.cart-service': {
                        '.border-cart-service-bottom': {
                            borderBottom: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`
                        },
                        '.border-cart-service-top': {
                            borderTop: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`
                        }
                    },
                    '.setting-count-shopping': {
                        [ MediaBreakpoints( Theme.down.md ) ]: {
                            flexDirection: 'column',
                            gap: 24,
                            alignItems: 'start',
                        },
                        '.setting-count-shopping-extra': {
                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                flexDirection: 'column',
                                gap: 24,
                                alignItems: 'start',
                                width: '100%',
                            },
                            '.count-item-cart': {
                                [ MediaBreakpoints( Theme.down.md ) ]: {
                                    margin: 0,
                                    width: '100%',
                                    justifyContent: 'center'
                                },
                                button: {
                                    width: 'unset',
                                }
                            }
                        },
                        '.delete-item': {
                            cursor: 'pointer',
                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-end',
                            },
                        }
                    }
                },
                '.enter-code': {
                    padding: '24px',
                    width: '100%',
                    minHeight: 139,
                    backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
                    '.MuiFormControl-root': {
                        '&.enter-code-form': {
                            width: '100%',
                            margin: 0,
                            paddingTop: 24,
                            border: 'unset',
                            '.MuiInputBase-root': {
                                fontFamily: 'Poppins',
                                fontstyle: 'normal',
                                fontSize: '14px',
                                lineHeight: '155%',
                                paddingBottom: '14px',
                                '&:after': {
                                    borderBottom: 'none'
                                },
                                '.MuiInputAdornment-root': {
                                    cursor: 'pointer'
                                }
                            },
                        }
                    }
                },
                '.MuiTable-root': {
                    '.MuiTableHead-root': {
                        '.MuiTableRow-root': {
                            '.MuiTableCell-root': {
                                textAlign: 'center',
                                '&:first-child': {
                                    textAlign: 'unset',
                                    paddingLeft: 0
                                },
                                '&:last-child': {
                                    textAlign: 'unset',
                                    paddingRight: 0
                                },
                            }
                        }
                    },
                    '.MuiTableBody-root': {
                        '.MuiTableRow-root': {
                            '.MuiTableCell-root': {
                                paddingTop: 32,
                                paddingBottom: 32,
                                textAlign: 'center',
                                verticalAlign: 'top',
                                '&:first-child': {
                                    paddingLeft: 0,
                                    textAlign: 'unset',
                                },
                                '.cart-shopping-info': {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    marginLeft: 20,
                                    width: 340,
                                },
                                '.MuiIconButton-root': {
                                    padding: 0
                                },
                                '.setting-count-shopping': {
                                    justifyContent: 'center',
                                    '.count-item-cart': {
                                        minWidth: 120,
                                        height: 32,
                                        '.MuiButtonBase-root': {
                                            '&:first-child': {
                                                marginLeft: 24,
                                            },
                                            '&:last-child': {
                                                marginRight: 24,
                                            },
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                '.MuiGrid-root': {
                    '&:last-child': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 32,
                        '.MuiFormControl-root': {
                            width: '35%',
                        },
                        '.checkout': {
                            width: '20%',
                            height: '100%',
                            '.total-price': {
                                padding: '10px 0px',
                                '.total-price-item': {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '24px',
                                }
                            },
                            button: {
                                width: '100%',
                            },
                        },
                        [ MediaBreakpoints( Theme.down.md ) ]: {
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: 24,
                            '.MuiFormControl-root': {
                                width: '100%',
                            },
                            '.checkout': {
                                width: '100%',
                                height: '100%',
                                '.total-price': {
                                    padding: '10px 0px',
                                    '.total-price-item': {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '24px',
                                    }
                                },
                                button: {
                                    width: '100%',
                                },
                            },
                        },
                    },
                },
                '.cart-shopping-mobile': {
                    border: `1px solid ${ ColorStyles.Foundation.Black[ 200 ] }`,
                    borderRadius: 6,
                    marginBottom: 24,
                    padding: '24px 16px',
                    '.divider': {
                        marginTop: 24,
                        marginBottom: 12,
                    },
                    '.divider2': {
                        marginTop: 12,
                        marginBottom: 24,
                    },
                    '.count-item-cart-mobile': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 24,
                        '.count-item-cart': {
                            minWidth: 120,
                            height: 32,
                            '.MuiButtonBase-root': {
                                '&:first-child': {
                                    marginLeft: 24,
                                },
                                '&:last-child': {
                                    marginRight: 24,
                                },
                            }
                        }
                    }
                }
            },
            '.continue-shoping': {
                width: 379,
                height: 48,
                display: 'flex',
                justifyContent: 'center',
                border: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
                [ MediaBreakpoints( Theme.down.md ) ]: {
                    margin: 'auto',
                },
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    width: '100%',
                },
            },
            /****************
             *product detail && slick product detail
             *****************/
            '.slick-detail': {
                '.slick-list': {
                    height: '100%',
                    '.slick-track': {
                        height: '100%',
                        '.slick-slide': {
                            height: '100%',
                            '.product-detail-slick': {
                                width: '100%',
                                height: "400px !important",
                                position: 'relative',
                                border: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                                img: {
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                }
                            },
                        },
                    }
                },
                '.slick-dots': {
                    li: {
                        button: {
                            backgroundColor: '#C5C3C1',
                            height: '20px !important',
                            width: '20px !important',
                            '&:before': {
                                color: 'transparent !important',
                            }
                        }
                    },
                    '& li.slick-active button::before': {
                        backgroundColor: ColorStyles.Change.YellowBrown[ 500 ],
                        color: `${ ColorStyles.Change.YellowBrown[ 500 ] } !important`,
                        fontSize: '14px !important',
                        top: '0px !important'
                    }
                },
            },
            '.product-detail ': {
                [ MediaBreakpoints( Theme.down.md ) ]: {
                    padding: '0 16px',
                },
                '.product-detail-item': {
                    position: 'relative',
                    '.MuiBox-root': {
                        '.arows-items-white.arows-items-gap': {
                            position: 'relative',
                            justifyContent: 'space-between',
                            bottom: 190,
                            padding: '0 10px',
                            [ MediaBreakpoints( Theme.down.sm ) ]: {
                                padding: 0,
                            },
                            '.arrow-left': {
                                '.MuiButtonBase-root': {
                                    backgroundColor: ColorStyles.Change.Base.white,
                                    borderRadius: 0,
                                    height: 48,
                                    '&:hover': {
                                        backgroundColor: ColorStyles.Change.YellowBrown[ 500 ],
                                        svg: {
                                            color: ColorStyles.Change.Base.white
                                        }
                                    }
                                }
                            },
                            '.arrow-right': {
                                '.MuiButtonBase-root': {
                                    backgroundColor: ColorStyles.Change.Base.white,
                                    borderRadius: 0,
                                    height: 48,
                                    '&:hover': {
                                        backgroundColor: ColorStyles.Change.YellowBrown[ 500 ],
                                        svg: {
                                            color: ColorStyles.Change.Base.white
                                        }
                                    }
                                }
                            }
                        }
                    },
                    '.social-item-link': {
                        position: 'absolute',
                        top: 310,
                        left: 45,
                        padding: 8,
                        backgroundColor: ColorStyles.Change.Base.black,
                        opacity: '50%',
                        borderRadius: 3,
                        a: {
                            lineHeight: 0,
                        },
                        [ MediaBreakpoints( Theme.down.md ) ]: {
                            paddingTop: 0,
                        },
                    },
                },
                '.slick-slide.slick-active.slick-current': {
                    '.product-detail-image': {
                        border: `3px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
                    },
                },
                '.slider-slick': {
                    position: 'relative',
                    '.arows-items-white': {
                        padding: 0,
                        '.arrow-left': {
                            position: 'absolute',
                            top: '40%',
                            left: 15,
                            '.MuiButtonBase-root': {
                                backgroundColor: ColorStyles.Change.Base.white,
                                borderRadius: 3,
                                height: 32,
                                border: 0,
                                padding: 0,
                                width: '100% !important',
                                minWidth: 45,
                                '&:hover': {
                                    backgroundColor: ColorStyles.Change.YellowBrown[ 500 ],
                                    svg: {
                                        color: ColorStyles.Change.Base.white
                                    }
                                }
                            }
                        },
                        '.arrow-right': {
                            position: 'absolute',
                            top: '40%',
                            right: 15,
                            '.MuiButtonBase-root': {
                                backgroundColor: ColorStyles.Change.Base.white,
                                borderRadius: 3,
                                height: 32,
                                border: 0,
                                padding: 0,
                                width: '100% !important',
                                minWidth: 45,
                                '&:hover': {
                                    backgroundColor: ColorStyles.Change.YellowBrown[ 500 ],
                                    svg: {
                                        color: ColorStyles.Change.Base.white
                                    }
                                }
                            }
                        }
                    },
                    '.slick-image-item': {
                        paddingTop: '24px',
                        '.slick-list': {
                            '.slick-track': {
                                display: 'flex',
                                gap: 24,
                            }
                        }
                    },
                },
                '.product-detail-image': {
                    width: '100%',
                    // border: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                    borderRadius: 3,
                    img: {
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        margin: 'auto',
                        borderRadius: 3,
                    }
                },
                '.product-detail-image.index': {
                    width: '100%',
                    // border: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                    borderRadius: 3,
                    img: {
                        objectFit: 'cover',
                        width: '100%',
                        height: '350px',
                        margin: 'auto',
                        borderRadius: 3,
                    }
                },
                '.product-detail-title': {
                    '.MuiStack-root': {
                        '.MuiTypography-root.MuiTypography-description12': {
                            p: {
                                marginTop: 0,
                                marginBottom: 0,
                            }
                        },
                        '.product-detail-badges': {
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 12,
                            alignItems: 'center',
                            marginTop: 12,
                            '.MuiStack-root': {
                                border: `1px solid ${ ColorStyles.Change.Black[ 200 ] }`,
                                borderRadius: 3,
                                padding: '0 8px',
                                height: 24,
                                cursor: 'context-menu'
                            }
                        }
                    }
                },

                '.list-item-service-detail': {
                    display: 'flex',
                    gap: 24,
                    alignItems: 'center',
                    paddingTop: 24,
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: 12,
                    },
                    '.service': {
                        '.MuiBox-root': {
                            backgroundColor: '#F0F0EF',
                            borderRadius: '50%',
                            width: 48,
                            height: 48,
                            display: 'flex',
                            justifyContent: ' center',
                            alignItems: 'center',
                            svg: {
                                color: '#D7D7D6',
                            }
                        },
                        '.MuiTypography-root': {
                            color: '#D7D7D6',
                            textTransform: 'capitalize',
                            cursor: 'context-menu'
                        }
                    },
                    '.service-active': {
                        '.MuiBox-root': {
                            backgroundColor: ColorStyles.Change.YellowBrown[ 50 ],
                            svg: {
                                color: ColorStyles.Foundation.YellowBrown[ 500 ],
                            }
                        },
                        '.MuiTypography-root': {
                            color: ColorStyles.Foundation.YellowBrown[ 500 ],
                            textTransform: 'capitalize',
                            cursor: 'context-menu'
                        }
                    },
                },
                '.rating-points': {
                    width: 71,
                    height: 34,
                    borderRadius: 5,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: ColorStyles.Foundation.brown[ 500 ],
                    gap: 10,
                },
                '.price': {
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 4,
                    alignItems: 'center',
                    borderTop: `1px solid ${ ColorStyles.Change.Brown[ 500 ] }`,
                    borderBottom: `1px solid ${ ColorStyles.Change.Brown[ 500 ] }`,
                    padding: '8px 10px',
                    '.MuiTypography-root': {
                        marginBottom: 0,
                    },
                    span: {
                        // padding: '12px 0px',
                        color: ColorStyles.Change.YellowBrown[ 500 ],
                        ...TextStyles.Domine[ 'H4:23px' ].Bold,
                    }
                },
                '.product-select': {
                    marginTop: 0,
                    '.product-select-item': {
                        '.MuiBox-root': {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 16,
                            '.product-btn-default-no-active': {
                                padding: '0 8px',
                                color: ColorStyles.Change.White[ 600 ],
                                border: `1px solid ${ ColorStyles.Change.YellowBrown[ 500 ] }`,
                                borderRadius: 3,
                                height: 32,
                                whiteSpace: 'nowrap',
                                color: ColorStyles.Change.YellowBrown[ 500 ],
                                '.MuiTypography-root': {
                                    color: ColorStyles.Change.YellowBrown[ 500 ]
                                }
                            },
                            '.product-btn-default-active': {
                                border: `1px solid ${ ColorStyles.Change.YellowBrown[ 800 ] }`,
                                backgroundColor: ColorStyles.Change.YellowBrown[ 200 ],
                                color: ColorStyles.Change.YellowBrown[ 200 ],
                                '.MuiTypography-root': {
                                    color: ColorStyles.Change.YellowBrown[ 800 ]
                                }
                            },
                            '.product-btn-default-error': {
                                border: `1px solid #dc2626`,
                                backgroundColor: ColorStyles.Change.Base.white,
                                '.MuiTypography-root': {
                                    color: '#dc2626'
                                }
                            },
                            '.product-btn-default': {
                                color: ColorStyles.Change.White[ 600 ],
                                border: `0px solid ${ ColorStyles.Change.Black[ 500 ] }`,
                                backgroundColor: '#F0F0EF',
                                '.MuiTypography-root': {
                                    color: ColorStyles.Change.Black[ 200 ]
                                }
                            },
                        },

                    },
                    '.attribute-select': {
                        position: 'relative',
                        display: 'inline-block',
                    },
                    '.attribute-select-selected': {
                        border: `1px solid ${ ColorStyles.Change.YellowBrown[ 500 ] }`,
                    },
                    '.attribute-select-error': {
                        border: `1px solid #dc2626`,
                    },
                    '.attribute-select-error.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderWidth: '1px',
                        borderColor: '#dc2626',
                    },
                    '.submit-error': {
                        color: '#dc2626',
                        marginTop: 6,
                        marginBottom: 0,
                    },
                    '.submit-not-error': {
                        display: 'none',
                    }
                    // '.show-oder-select-detail': {

                    // },
                },

                '.product-detail-message': {
                    '.MuiFormControl-root.MuiFormControl-fullWidth': {
                        position: 'relative',
                        marginBottom: 12,

                        '.message-textarea': {
                            ...TextStyles.Domine[ 'H6:14px' ].Regular,
                            padding: '16.5px 14px',
                            borderRadius: 4,
                            resize: 'none',
                            '&:focus': {
                                borderWidth: 1,
                                borderColor: ColorStyles.Change.YellowBrown[ 500 ],
                                outline: 'none'
                            },
                        },
                        '.message-textarea-bordered': {
                            border: `1px solid ${ ColorStyles.Change.YellowBrown[ 500 ] }`,
                        },
                        '.message-textarea-error': {
                            border: `1px solid #dc2626`,
                            '&::placeholder': {
                                color: '#dc2626'
                            }
                        },
                        '.MuiTypography-root': {
                            position: 'absolute',
                            bottom: 0,
                            right: 10,
                        }
                    }
                },
                '.product-detail-notice': {
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 24,
                    alignItems: 'end',
                    // padding: '20px 0',
                    '.MuiStack-root': {
                        '.MuiBox-root': {
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 9,
                            alignItems: 'end',
                            'MuiTypography-root.MuiTypography-label19': {
                                color: ColorStyles.Change.Black[ 600 ]
                            },
                            svg: {
                                color: ColorStyles.Change.Black[ 600 ]
                            }
                        }
                    }
                },
                '.modal': {
                    '.modal-calendar': {
                        width: '100%',
                        justifyContent: 'start',
                        padding: '14px 0px',
                        cursor: 'pointer',
                    },
                    '.modal-letter': {
                        width: '100%',
                        borderTop: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                        justifyContent: 'start',
                        padding: '14px 0px',
                        cursor: 'pointer',
                    },
                },
                '.add-to-cart': {
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        gap: 24,
                    },
                    '.MuiButtonBase-root.btn-shop-cart': {
                        maxWidth: '100%',
                        width: 200,
                        height: 48,
                        borderRadius: 3,
                        [ MediaBreakpoints( Theme.down.md ) ]: {
                            margin: 0,
                            // width: "100%",
                        },
                        svg: {
                            color: ColorStyles.Change.Base.white,
                        },
                        '.MuiTypography-root': {
                            marginLeft: 16,
                            color: ColorStyles.Change.Base.white,
                            textTransform: 'capitalize'
                        },
                        '&:hover': {
                            backgroundColor: ColorStyles.Change.YellowBrown[ 500 ],
                        }
                    }
                },
                '.review-info': {
                    borderTop: `1px solid ${ ColorStyles.Foundation.Black[ 600 ] }`,
                    '.MuiPaper-root': {
                        borderBottom: `1px solid ${ ColorStyles.Foundation.Black[ 600 ] }`,
                        margin: 0,
                        padding: 0,
                        boxShadow: 'none',
                        ':last-of-type': {
                            borderRadius: '0px'
                        },
                        '.MuiButtonBase-root': {
                            minHeight: 50,
                            padding: 0,
                            '.MuiAccordionSummary-content': {
                                margin: 0,
                            }
                        },
                        '.MuiCollapse-root': {
                            '.MuiAccordionDetails-root': {
                                padding: '14px 0px',
                                '&.reviews-AccordionDetails': {
                                    padding: '0px',
                                    borderTop: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                                    borderLeft: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                                    borderRight: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                                    '.reviews-acount': {
                                        padding: '16px 14px',
                                        borderBottom: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                                        backgroundColor: ColorStyles.Foundation.Neutral[ 200 ]
                                    },
                                    '.write-reviews': {
                                        padding: '23px 14px',
                                        '.write-reviews-submitt-form': {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'start',
                                            gap: 16,
                                            margin: '32px 0px',
                                            span: {
                                                display: 'flex',
                                                marginBottom: 8,
                                            },
                                            '.MuiFormControl-root': {
                                                border: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                                                '.MuiInputBase-root': {
                                                    backgroundColor: ColorStyles.Foundation.Neutral[ 100 ],
                                                    fieldset: {
                                                        border: 'unset',
                                                    }
                                                }
                                            }
                                        },
                                        button: {
                                            marginTop: 32,
                                            width: 167,
                                            height: 40,
                                        }
                                    },
                                }
                            }
                        }
                    }
                },
            },
            '.Popup-item-image-detail': {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 800,
                height: 650,
                backgroundColor: ColorStyles.Foundation.baseColor.white,
                boxShadow: ShadowBakery.Medium,
                borderRadius: 3,
                [ MediaBreakpoints( Theme.down.md ) ]: {
                    width: 350,
                    height: 310,
                },
                '.popup-content': {
                    width: '100%',
                    height: '100%',
                    padding: 20,
                    position: 'relative',
                    '.popup-close': {
                        cursor: 'pointer',
                        svg: {
                            position: 'absolute',
                            right: -20,
                            top: -20,
                            backgroundColor: ColorStyles.Change.Base.white,
                            borderRadius: 100,
                            width: 40,
                            height: 40,
                            color: ColorStyles.Change.Base.black,
                            padding: 10,
                            [ MediaBreakpoints( Theme.down.md ) ]: {

                            }
                        },
                    },

                    img: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    },


                    '.popup-content-btn-prev': {
                        position: 'absolute',
                        top: '50%',
                        left: '5%',
                        transform: 'translateY(-50%)',
                        width: 40,
                        height: 40,
                        borderRadius: 3,
                        minWidth: 0,
                        backgroundColor: ColorStyles.Change.Base.white,
                    },
                    '.popup-content-btn-next': {
                        position: 'absolute',
                        top: '50%',
                        right: '5%',
                        transform: 'translateY(-50%)',
                        width: 40,
                        height: 40,
                        borderRadius: 3,
                        minWidth: 0,
                        backgroundColor: ColorStyles.Change.Base.white,
                    },
                    '.slider-slick': {
                        position: 'relative',
                        '.slider-modal': {
                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                '.slick-dots': {
                                    position: 'absolute',
                                    bottom: -105,
                                    li: {
                                        button: {
                                            backgroundColor: '#C5C3C1',
                                            height: '20px !important',
                                            width: '20px !important',
                                            '&:before': {
                                                color: 'transparent !important',
                                            }
                                        }
                                    },
                                    '& li.slick-active button::before': {
                                        backgroundColor: ColorStyles.Change.YellowBrown[ 500 ],
                                        color: `${ ColorStyles.Change.YellowBrown[ 500 ] } !important`,
                                        fontSize: '14px !important',
                                        top: '0px !important'
                                    }
                                }
                            }
                        },
                        '.arrows-items-modal': {
                            position: 'absolute',
                            bottom: 210,
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            '.arrow-left': {
                                '.MuiButtonBase-root': {
                                    borderRadius: 3,
                                    height: 48,
                                    backgroundColor: ColorStyles.Change.Base.white,
                                    '&:hover': {
                                        backgroundColor: ColorStyles.Change.YellowBrown[ 500 ],
                                        svg: {
                                            color: ColorStyles.Change.Base.white,
                                        }
                                    }
                                }
                            },
                            '.arrow-right': {
                                '.MuiButtonBase-root': {
                                    borderRadius: 3,
                                    height: 48,
                                    backgroundColor: ColorStyles.Change.Base.white,
                                    '&:hover': {
                                        backgroundColor: ColorStyles.Change.YellowBrown[ 500 ],
                                        svg: {
                                            color: ColorStyles.Change.Base.white,
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            /****************
           *components product-list-cake
           *****************/
            '.product-list-cake': {
                '.MuiGrid-root.MuiGrid-container': {
                    '.MuiGrid-root.MuiGrid-item': {
                        '.product-item': {
                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                flexDirection: 'column '
                            },
                            [ MediaBreakpoints( Theme.down.sm ) ]: {
                                flexDirection: 'unset'
                            },
                        }
                    },
                }
            },
            /****************
            *components block-title
            *****************/
            '.block-title': {
                margin: "auto",
                textAlign: "center",
                paddingBottom: '32px',
                '.MuiTypography-root': {
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '120px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderBottom: `2px solid ${ ColorStyles.Foundation.baseColor.black }`,
                        bottom: '-15px',
                    },
                }
            },
            /*************
             * banner hero
             *************/
            '.banner': {
                width: '100%',
                height: "564px",
                position: 'relative',
                img: {
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                },
                '.banner-text': {
                    position: 'relative',
                    margin: 'auto',
                    top: '-50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    [ MediaBreakpoints( Theme.down.lg ) ]: {
                        left: '5%',
                    },
                    button: {
                        marginTop: 40,
                    }
                },
                '.banner-textProduct': {
                    backgroundColor: ColorStyles.Foundation.brown[ 100 ],
                    position: 'absolute',
                    textAlign: 'center',
                    width: '90%',
                    height: 'fit-content',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    margin: 'auto',
                    bottom: '-46px',
                    padding: '64px 183px',
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        padding: '32px 10px',
                    },
                },
            },
            /****************
            * slick special && component special
            *****************/
            '.slick-products-cake': {
                height: '100%',
                '.slick-slider': {
                    height: '100%',
                    '.slick-list': {
                        height: '100%',
                        '.slick-track': {
                            height: '100%',
                            '.slick-products-cake-item': {
                                display: 'flex !important',
                                alignItems: 'start',
                                flexDirection: 'column',
                                gap: 16,
                                width: "100%",
                                height: '600px',
                                [ MediaBreakpoints( Theme.down.sm ) ]: {
                                    paddingBottom: '15px',
                                },
                                '.link-cake': {
                                    width: '100%',
                                    height: '100%',
                                }
                            },
                            button: {
                                padding: '6px 0px',
                                minWidth: '0px'
                            }
                        },
                        '.slick-slide .slick-center': {
                            height: '100%',
                        },
                    },
                    '.slick-dots': {
                        bottom: '-71px',
                    },
                },
            },
            '.product-cake': {
                '.product-cake-item': {
                    display: 'flex',
                    alignItems: 'start',
                    flexDirection: 'column',
                    gap: 12,
                    width: '100%',
                    button: {
                        padding: '6px 0px'
                    }
                },
                '.link-cake': {
                    width: '100%'
                },
            },
            /****************
            *SlickProductItem && components product-item && title-customer
            *****************/
            '.title-customer': {
                margin: "auto",
                textAlign: "center",
                paddingBottom: '64px',
                '.MuiTypography-root': {
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '120px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderBottom: `2px solid ${ ColorStyles.Foundation.baseColor.black }`,
                        bottom: '-15px',
                    },
                }
            },
            '.slick-product': {
                height: '100%',
                '.slick-product-item': {
                    height: '100%',
                    '.slick-list': {
                        height: '100%',
                        '.slick-track': {
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 24,
                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                display: 'flex',
                                gap: 0,
                            }
                        },
                        // [ MediaBreakpoints( Theme.down.md ) ]: {
                        //     '.slick-slide': {
                        //         padding: ' 0 20px',
                        //     },
                        // },
                        // [ MediaBreakpoints( Theme.up.md ) ]: {
                        //     '.slick-slide.slick-active.slick-current': {
                        //         paddingLeft: '32px',
                        //     },
                        // },
                    }
                },
                '.arows-items-default': {
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    bottom: 240,
                    '.MuiBox-root': {
                        '.MuiButtonBase-root': {
                            borderRadius: 0,
                            border: 0,
                            backgroundColor: ColorStyles.Change.Base.white,
                            '&:hover': {
                                backgroundColor: ColorStyles.Change.YellowBrown[ 500 ],
                                svg: {
                                    color: ColorStyles.Change.Base.white
                                },
                            }
                        }
                    }
                }
            },
            '.product-item': {
                width: '100%',
                // padding: '32px 14px',
                // border: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                zIndex: 100,
                '.product-item-image': {
                    img: {
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                    },
                    // '.MuiBox-root': {
                    //     img: {
                    //         objectFit: 'cover',
                    //         width: '100%',
                    //         height: '100%',
                    //     },
                    //     position: "relative",
                    //     // padding: "10px 5px",
                    //     '.product-item-discount': {
                    //         width: 49,
                    //         height: 49,
                    //         padding: 26,
                    //         borderRadius: "50%",
                    //         backgroundColor: ColorStyles.Foundation.Danger[ 500 ],
                    //         textAlign: 'center',
                    //         position: 'absolute',
                    //         display: 'flex',
                    //         justifyContent: 'center',
                    //         alignItems: 'center',
                    //         left: 6,
                    //         top: 15,
                    //     },
                    // }
                },
                '.product-item-infos': {
                    backgroundColor: ColorStyles.Change.Base.white,
                    '.product-item-info': {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: 16,
                        gap: 4,
                        '.MuiStack-root': {
                            '.MuiTypography-root': {
                                marginBottom: 0,
                                color: ColorStyles.Change.YellowBrown[ 500 ],
                                ...TextStyles.Poppins[ 'Body03:16px' ].Bold
                            },
                            span: {
                                // padding: '12px 0px',
                                color: ColorStyles.Change.YellowBrown[ 500 ],
                                ...TextStyles.Poppins[ 'Body03:16px' ].Medium,
                            }
                        }
                    },
                    '.product-item-services': {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: 20,
                        padding: "26px 0px",
                        borderTop: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`
                    },
                    '.MuiButton-btn_black': {
                        [ MediaBreakpoints( Theme.down.downMobileSm ) ]: {
                            width: '100%',
                        },
                    }
                },
                [ MediaBreakpoints( Theme.down.md ) ]: {
                    boxShadow: `0px 0px 8px -4px #10182803, 0px 0px 24px -4px #10182814`,
                    borderRadius: 3,
                },
            },
            '.block-module': {
                padding: '0 16px',
                '.MuiButtonBase-root.MuiButton-root': {
                    height: 48,
                    marginTop: 48,
                    padding: '4px 24px',
                    borderRadius: 3,
                    border: `1px solid ${ ColorStyles.Change.YellowBrown[ 500 ] }`,
                    backgroundColor: ColorStyles.Change.Base.white
                }
            },
            /**
             * slick-product-cake && components slider-item
             */
            '.slick-product-cake': {
                margin: 'auto',
                height: '100% ',
                '.slick-product-cake-item': {
                    height: '100%',
                    '.slick-list': {
                        height: '100%',
                        '.slick-track': {
                            height: '100%',
                            display: 'flex',
                            gap: 32,
                            [ MediaBreakpoints( Theme.down.sm ) ]: {
                                gap: 0,
                            },
                        },
                    }
                },
            },
            '.slider-item': {
                backgroundColor: ColorStyles.Foundation.baseColor.white,
                textAlign: 'center',
                width: '100%',
                minHeight: '536px',
                display: 'flex',
                flexDirection: 'column',
                gap: 32,
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    height: '100%',
                    paddingBottom: 20,
                },
                img: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                },
                span: {
                    padding: '0px 44px'
                }
            },

            /******************
             *components Reviews && slick-reviews
             *****************/
            '.reviews': {
                backgroundColor: ColorStyles.Foundation.YellowBrown[ 100 ],
                padding: '41px',
                maxWidth: 790,
                minHeight: 387,
                borderRadius: 10,
                '.reviews-content': {
                    position: 'relative',
                    width: '100%',
                    minHeight: '305px',
                    textAlign: 'center',
                    padding: '23px 0px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 61,
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        height: '80px',
                        width: '80px',
                        borderBottom: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
                        borderRight: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
                        right: '0px',
                        bottom: '0px',
                    },
                    ' &::before': {
                        content: '""',
                        position: 'absolute',
                        height: '80px',
                        width: '80px',
                        borderTop: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
                        borderLeft: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
                        left: '0px',
                        top: '0px',
                    },
                    '.reviews-content-boder': {
                        borderTop: `2px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
                        padding: '8px'
                    },
                },
            },
            '.slick-reviews': {
                height: '100%',
                '.slick-reviews-item': {
                    height: '100%',
                    '.slick-list': {
                        height: '100%',
                        '.slick-slide.slick-active.slick-current': {
                            padding: '0 32px',
                        },
                        [ MediaBreakpoints( Theme.up.lg ) ]: {
                            '.slick-slide.slick-active.slick-current': {
                                '.reviews': {
                                    '.reviews-content': {
                                        padding: '40px 0px'
                                    }
                                },
                                width: 'fit-content !important'
                            },
                        },
                        '.slick-slide: not(.slick-current)': {
                            opacity: 0.4,
                        },
                        '.slick-track': {
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                        }
                    },
                    '.slick-dots.MuiBox-root': {
                        bottom: '-102px',
                    },
                },
            },
            /****************
            *blog && components blog && slick Block
            *****************/
            '.Blog': {
                display: 'flex',
                alignItems: 'center',
                gap: 32,
            },
            ".blog-item": {
                maxWidth: 583,
                ".blog-item-image": {
                    width: "100%",
                    height: '100%',
                    objectFit: "cover",
                },
                ".blog-item-content": {
                    textAlign: "center",
                    maxWidth: "422px",
                    minHeight: 122,
                    position: "relative",
                    backgroundColor: ColorStyles.Foundation.baseColor.white,
                    left: "50%",
                    transform: "translateX( -50%)",
                    boxShadow: ShadowBakery.Small,
                    top: "-64px",
                    padding: "16px 44px",
                    zIndex: 999,
                }
            },
            '.slick-blog': {
                height: '100%',
                '.slick-blog-item': {
                    height: '100%',
                    '.slick-list': {
                        height: '100%',
                        '.slick-track': {
                            height: '100%',
                        }
                    }
                },
                '.slick-dots': {
                    bottom: '-71px',
                },
            },
            /****************
               *find us on instagam && slick on instagam
               *****************/
            '.on-instagram': {
                '.on-instagram-image': {
                    display: 'flex',
                    gap: 10,
                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                        flexDirection: 'column'
                    },
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                    },

                    '.on-instagram-item': {
                        width: '100%',
                        margin: 'auto',
                        height: '400px',
                        img: {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        },
                    }
                },
            },
            '.slick-on-instagram': {
                height: '100%',
                padding: '0px 16px',
                '.slick-slider': {
                    '.slick-list': {
                        height: '100%',
                        '.slick-track': {
                            height: '100%',
                            '.slick-on-instagram-item': {
                                width: '100%',
                                margin: 'auto',
                                height: '100%',
                                img: {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                },
                            }
                        }
                    }
                },
                '.slick-dots': {
                    bottom: '-71px',
                },
            },
            /****************
           * BOX ICON
           *****************/
            '.box-icon': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 32,
                cursor: 'pointer',
                paddingBottom: '64px',
                [ MediaBreakpoints( Theme.down.md ) ]: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                },
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                },
                '.box-icon-item': {
                    width: 276,
                    minHeight: 256,
                    backgroundColor: ColorStyles.Foundation.YellowBrown[ 50 ],
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 16,
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        margin: 'auto',
                    },
                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                        width: "100%",
                        height: 400,
                    },
                }
            },
            /******************
           *keep-browsing
           *****************/
            '.keep-browsing': {
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    paddingBottom: 8,
                },
                '.keep-browsing-item': {
                    display: 'flex',
                    alignItems: 'start',
                    flexDirection: 'column',
                    '.MuiTypography-blog-title': {
                        paddingTop: 24,
                    },
                    button: {
                        padding: '6px 0px'
                    }
                }
            },
            '.slick-keep-browsing': {
                '.slick-dots ': {
                    bottom: '-71px'
                }
            },
            /******************
         *cake-items
         *****************/
            '.link-cake': {
                textDecoration: 'none',
                width: '100%',
                '.cake-item': {
                    width: '100%',
                    position: 'relative',
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        height: '100%',
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        height: '90%',
                        width: '90%',
                        border: `1px solid ${ ColorStyles.Foundation.baseColor.white }`,
                        top: '5%',
                        left: '5%',
                    },
                    img: {
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                    },
                },

            },
            '.title-cake-item': {
                paddingTop: 15,
            },
            /******************
            *components Social Item
            *****************/
            '.social-item': {
                border: '1px solid',
                color: ColorStyles.Foundation.Black[ 900 ],
                width: 52,
                minWidth: 52,
                height: 52,
                borderRadius: '50%',
                display: 'block',
                textAlign: 'center',
                svg: {
                    marginTop: '25%',
                },
                '&:hover': {
                    background: ColorStyles.Foundation.YellowBrown[ 50 ],
                }
            },
            /**
            * @COMPONENTS
            * @CUSTOM_SLICK
            */
            /****************
            * components customs dots
            *****************/
            '.slick-slider': {
                '.slick-dots': {
                    '& li.slick-active button::before': {
                        color: ColorStyles.Foundation.brown[ 500 ],
                        fontSize: '23px',
                    },
                    li: {
                        zIndex: 999,
                        button: {
                            width: '100%',
                            height: '100%',
                            border: `1px solid ${ ColorStyles.Foundation.Neutral[ 600 ] }`,
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }
                    },
                    '& li.slick-active': {
                        button: {
                            border: 'unset'
                        }
                    },
                    '& li': {
                        '& button::before': {
                            // fontSize: "20px",
                            color: ColorStyles.Foundation.baseColor.white,
                            opacity: 1,
                            borderRadius: "50%",
                            top: '2px',
                            left: '-1px',
                        }
                    }
                },
            },
            /****************
            *CUSTOM DOTS AROWS
            *****************/
            '.arows-items-default': {
                display: "flex",
                justifyContent: "center",
                paddingTop: '32px',
                gap: 32,
                zIndex: 99,
                [ MediaBreakpoints( Theme.up.lg ) ]: {
                    paddingLeft: '50px',
                    paddingRight: '40px',
                },
            },
            '.arows-items-default.padding-top': {
                paddingTop: '64px',
            },
            '.arows-items-white.padding-top': {
                paddingTop: '64px',
            },
            '.arows-items-white.arows-items-gap': {
                gap: 32,
            },
            '.arows-items-white': {
                display: "flex",
                justifyContent: "center",
                paddingTop: '32px',
                gap: 100,
            },
            /****************
           * HEADER 
           *****************/
            '#header': {
                '.page-title': {
                    textAlign: 'center',
                    margin: 'auto',
                    height: 48,
                    maxWidth: '100%',
                    backgroundColor: ColorStyles.Foundation.brown[ 500 ],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                '.sub-menu-item': {
                    display: 'none !important'
                },
                '.content-header': {
                    margin: "auto",
                    '.content-header-list': {
                        display: 'flex',
                        alignItems: 'center',
                        paddingTop: 24,
                        paddingBottom: 16,
                        '.list-social-item': {
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }
                    }
                },
                '.menu-navbar': {
                    borderTop: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`,
                    margin: 'auto',
                    minHeight: 56,
                    [ MediaBreakpoints( Theme.down.lg ) ]: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTop: 'unset',
                        marginBottom: 26,
                    },
                    '.list-menu-navbar': {
                        margin: 'auto',
                        '.main-menu': {
                            '.main-menu-item': {
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',

                                li: {
                                    button: {
                                        gap: 12,
                                    }
                                }
                            },
                            position: 'unset !important',
                            backgroundColor: ColorStyles.Foundation.baseColor.white,
                            padding: '0px',
                            '.main-menu-toolbar': {
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '0px',
                                minHeight: '53px',
                                '.MuiList-root': {
                                    minHeight: '53px',
                                    flexDirection: 'row',
                                    [ MediaBreakpoints( Theme.down.md ) ]: {
                                        flexDirection: 'column',
                                    },
                                    '.MuiButtonBase-root.MuiMenuItem-root': {
                                        '.MuiButtonBase-root.MuiButton-root': {
                                            height: 53,
                                        }
                                    }
                                },
                                ul: {
                                    padding: '0px',
                                    li: {
                                        padding: 0,
                                        button: {
                                            padding: '6px 16px',
                                        }
                                    }
                                }
                            },
                        },
                    },
                },
                '.header-bottom': {
                    margin: 'auto',
                    height: 'fit-content',
                    padding: '15px',
                    maxWidth: '100%',
                    backgroundColor: ColorStyles.Foundation.Black[ 600 ],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '.MuiBox-root': {
                        display: 'flex',
                        alignItems: 'center',
                        width: 'fit-content',
                        backgroundColor: "transparent",
                        '& svg': {
                            margin: 4,
                        },
                        '& hr': {
                            margin: " 0 1rem",
                            borderColor: ColorStyles.Foundation.baseColor.white
                        },
                    },
                    '.list-header-bottom': {
                        '.MuiButtonGroup-root': {
                            '.MuiButtonBase-root.MuiButton-text': {
                                borderColor: ColorStyles.Foundation.baseColor.white,
                                minWidth: 'unset',
                                height: 'unset',
                                padding: '2px 32px',
                                '.MuiTouchRipple-root': {
                                    display: 'none'
                                }
                            }
                        },
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                            display: "flex",
                            overflowX: 'scroll',
                        },
                        '.MuiTypography-body1': {
                            whiteSpace: 'nowrap',
                            '&:hover': {
                                color: ColorStyles.Foundation.YellowBrown[ 200 ]
                            }
                        },
                    },
                    '.list-header-bottom::-webkit-scrollbar': {
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                            height: '1px'
                        },
                    },
                },
            },
            /****************
             * FOOTER
             ****************/
            '#footer': {
                '.footer-header': {
                    padding: '64px 24px',
                    width: '100%',
                    backgroundColor: ColorStyles.Foundation.YellowBrown[ 100 ],
                    '.MuiFormControl-root': {
                        maxWidth: '280px',
                        minWidth: '280px',
                        width: '280px',
                        margin: '0px',
                        '.MuiInputBase-root': {
                            input: {
                                padding: '6px 0px 20px',
                            }
                        },
                        '.MuiInputAdornment-root': {
                            paddingBottom: '14px'
                        }
                    },
                    '.list-menu-footer': {
                        padding: '32px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        '.MuiButtonBase-root': {
                            '&:hover': {
                                background: 'transparent',
                            },
                            'span:hover': {
                                color: ColorStyles.Foundation.Danger[ 500 ]
                            },
                        },
                        button: {
                            padding: '6px 0px',
                            minWidth: '0px',
                        }
                    }
                },
                '.footer-bottom': {
                    backgroundColor: ColorStyles.Foundation.Black[ 900 ],
                    width: '100%',
                    height: 'fit-content',
                    padding: '17px 0px',
                    textAlign: 'center',
                    marginTop: '-15px'
                },
            },

        },
    },


    /**========================
     * @OVERRIDES_MUI_MATERIAL
     */

    MuiCheckbox: {
        styleOverrides: {
            root: {
                '&.MuiCheckbox-root': {
                    color: ColorStyles.Foundation.YellowBrown[ 500 ],
                },
                '&.MuiCheckbox-root.Mui-checked': {
                    color: ColorStyles.Foundation.YellowBrown[ 500 ],
                }
            }
        }
    },
    MuiFormControlLabel: {
        styleOverrides: {
            root: {
                '.MuiTypography-root': {
                    color: ColorStyles.Foundation.baseColor.black
                }
            }
        }
    },
    MuiRadio: {
        styleOverrides: {
            root: {
                color: ColorStyles.Foundation.YellowBrown[ 500 ],
                '&.Mui-checked': {
                    color: ColorStyles.Foundation.YellowBrown[ 500 ],
                }
            }
        }
    },
    MuiRating: {
        styleOverrides: {
            root: {
                color: ColorStyles.Foundation.YellowBrown[ 500 ]
            }
        }
    },
    // custom mui alert
    MuiSnackbar: {
        styleOverrides: {
            root: {
                zIndex: '9999',
                '.MuiPaper-root.MuiAlert-filledSuccess': {
                    // backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
                    // boxShadow: 'none'
                }
            }
        }
    },
    MuiFab: {
        styleOverrides: {
            root: {
                textTransform: 'unset',
                '&.social-action': {
                    backgroundColor: ColorStyles.Foundation.baseColor.white,
                    boxShadow: 'none',
                    width: '50px',
                    height: '50px',
                    margin: '0px ',
                },
                '&.action-click': {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    width: 'fit-content',
                    height: 'fit-content',
                    margin: '0px',
                    borderRadius: 'unset',
                    padding: '5px 7px'
                }
            }
        }
    },
    // custom select data input
    MuiPaper: {
        styleOverrides: {
            root: {
                '.MuiList-root': {
                    '.MuiButtonBase-root.list-item-select': {
                        color: ColorStyles.Foundation.Neutral[ 700 ],
                        fontFamily: "'Poppins'",
                        fontWeight: 500,
                        fontSize: 16,
                        lineHeight: "155%",
                        '&:hover': {
                            backgroundColor: ColorStyles.Foundation.brown[ 500 ]
                        },
                        // '&.Mui-selected': {
                        //     backgroundColor: ColorStyles.Foundation.brown[ 500 ]
                        // },

                    },
                    '.MuiButtonBase-root.list-item-select-disabled': {
                        opacity: 0.38,
                        cursor: 'context-menu',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.08)',
                        }
                    },
                    '.MuiButtonBase-root.list-item-select-1': {
                        ...TextStyles.Poppins[ 'Body04:14px' ].SemiBold,
                        color: ColorStyles.Foundation.Black[ 900 ],
                        '&:hover': {
                            backgroundColor: ColorStyles.Foundation.brown[ 500 ]
                        },
                        '&.Mui-selected': {
                            backgroundColor: ColorStyles.Foundation.brown[ 500 ]
                        },
                    },
                }
            }
        }
    },
    MuiFormControl: {
        styleOverrides: {
            root: {
                width: '100%',
                '&.custom-form-validate': {
                    border: 'unet',
                    '.MuiInputBase-root': {
                        border: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                        height: 48,
                        backgroundColor: ColorStyles.Foundation.Neutral[ 200 ],
                        '.MuiOutlinedInput-notchedOutline': {
                            borderWidth: 0,
                        }
                    },
                    '.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderWidth: 0,
                    },
                },
                '&.custom-form-message-validate': {
                    '.MuiInputBase-root': {
                        border: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                        backgroundColor: ColorStyles.Foundation.Neutral[ 200 ],
                        '.MuiInputBase-input': {
                            padding: '14.5px 14px'
                        },
                        '.MuiOutlinedInput-notchedOutline': {
                            borderWidth: 0,
                        }
                    },
                    '.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderWidth: 0,
                    },
                },
                '&.custom-form-checkout-aguest': {
                    borderRadius: 0,
                    svg: {
                        marginRight: 12,
                    },
                    borderBottom: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                    '.MuiInputAdornment-root': {
                        cursor: 'pointer'
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                        borderWidth: 0,
                        '&.Mui-focused': {
                            borderWidth: 0,
                        }
                    },
                    '.MuiInputBase-input': {
                        padding: '10px 0px'
                    },
                    '.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderWidth: 0,
                    },
                },
                '&.custome-select-input-data': {
                    borderRadius: 0,
                    '.MuiInputBase-root.select-input-data': {
                        border: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                        height: 48,
                        backgroundColor: ColorStyles.Foundation.Neutral[ 200 ],
                        '.MuiSelect-select': {
                            padding: '13.5px 14px',
                        },
                        '.MuiOutlinedInput-notchedOutline': {
                            borderWidth: 0,
                        },
                        '.MuiSvgIcon-root': {
                            fontSize: '2.5rem',
                            borderLeft: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                            width: 30,
                            height: 30,
                            top: '50%',
                            transform: 'translateY(-50%)',
                        }
                    },
                    '.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderWidth: 0,
                    },
                },
                borderRadius: '4px',
                '.MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderWidth: '1px',
                    borderColor: ColorStyles.Foundation.YellowBrown[ 500 ],
                },
                '.MuiInputBase-input': {
                    fontFamily: 'Poppins',
                    fontSize: 14,
                    fontWeight: 300,
                    lineHeight: '155%',
                    letterSpacing: '0.06em',
                    color: ColorStyles.Foundation.Neutral[ 900 ]
                },
            }
        }
    },
    MuiContainer: {
        styleOverrides: {
            root: {
                [ MediaBreakpoints( Theme.up.lg ) ]: {
                    paddingLeft: '0px',
                    paddingRight: '0px',
                },
            }
        }
    },
    // custom modal popup message && popup time && Modal-CartInputUpload
    MuiDialog: {
        styleOverrides: {
            root: {
                '&.Dialog-popup': {
                    '.MuiBackdrop-root': {
                        backgroundColor: 'rgba(0, 0, 0, 0.7 )'
                    },
                    '.MuiDialog-container': {
                        '.MuiPaper-root.MuiDialog-paper': {
                            overflow: 'unset',
                            width: 1200,
                            boxShadow: 'unset',
                            maxWidth: 1200,
                            margin: '0px 14px',
                            [ MediaBreakpoints( Theme.down.lg ) ]: {
                                width: '95% !important',
                            },
                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                overflowY: 'scroll',
                                overflowX: 'clip'
                            },
                            '.popup': {
                                backgroundColor: ColorStyles.Foundation.baseColor.white,
                                border: 'unset',
                                width: '100%',
                                position: 'relative',

                                '.circle': {
                                    backgroundColor: `${ ColorStyles.Change.Black[ 100 ] } !important`,
                                    color: ColorStyles.Foundation.Black[ 900 ],
                                    borderRadius: '50%',
                                    height: 40,
                                    width: 40,
                                    position: 'absolute',
                                    top: 13,
                                    right: 12,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    [ MediaBreakpoints( Theme.down.md ) ]: {
                                        top: '1%',
                                        right: '2%'
                                    },
                                },
                                '.popup-content': {
                                    width: '100%',
                                }
                            }
                        },
                        '.MuiPaper-root.MuiDialog-paper::-webkit-scrollbar-thumb': {
                            backgroundColor: ColorStyles.Foundation.Success[ 500 ],
                            borderRadius: 6,
                        },
                        '.MuiPaper-root.MuiDialog-paper::-webkit-scrollbar': {
                            width: 4,
                        },
                    },

                },
                '&.Dialog-popup-edit-address': {
                    '.MuiBackdrop-root': {
                        backgroundColor: 'rgba(0, 0, 0, 0.7 )'
                    },
                    '.MuiDialog-container': {
                        '.MuiPaper-root.MuiDialog-paper': {
                            overflow: 'unset',
                            width: 500,
                            maxWidth: 500,
                            boxShadow: 'unset',
                            '.circle': {
                                backgroundColor: ColorStyles.Foundation.brown[ 500 ],
                                color: ColorStyles.Foundation.Black[ 900 ],
                                borderRadius: '50%',
                                height: 56,
                                width: 56,
                                position: 'absolute',
                                top: '-8%',
                                right: '-5%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                            },
                        }
                    }
                },
                '&.modal-cartinput-upload': {
                    '.MuiDialog-container': {
                        '.MuiPaper-root.MuiDialog-paper': {
                            overflow: 'unset',
                            maxWidth: '1200px !important',
                            width: '100%',
                            position: 'relative',
                            [ MediaBreakpoints( Theme.down.md ) ]: {
                                margin: 16,
                                width: '90%',
                            },
                            '.colse-cart': {
                                position: 'absolute',
                                top: '-4%',
                                right: '-2%',
                                width: 50,
                                height: 50,
                                backgroundColor: ColorStyles.Foundation.YellowBrown[ 500 ],
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            '.cartinput-upload-content': {
                                padding: 32,
                                overflowY: 'scroll',
                                overflowX: 'clip',
                                '.cartinput-upload-content-header': {
                                    width: "100%",
                                    borderBottom: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
                                    '.MuiTabs-scroller': {
                                        '.MuiTabs-flexContainer': {
                                            '.MuiButtonBase-root': {
                                                textTransform: 'none',
                                            },
                                            '.MuiButtonBase-root.MuiTab-root.Mui-selected ': {
                                                color: ColorStyles.Foundation.YellowBrown[ 500 ]
                                            },
                                        },
                                        '.MuiTabs-indicator': {
                                            backgroundColor: ColorStyles.Foundation.YellowBrown[ 500 ]
                                        }
                                    }
                                },
                                '.MuiTabPanel-root.cartinput-upload-content-1': {
                                    [ MediaBreakpoints( Theme.down.sm ) ]: {
                                        padding: '24px 0px'
                                    },
                                    '.dropzone-ui': {
                                        '.dz-ui-header': {
                                            [ MediaBreakpoints( Theme.down.sm ) ]: {
                                                // flexDirection: 'column',
                                                // alignItems: 'end',
                                                // justifyContent: 'unset',
                                                minHeight: 'auto',
                                                height: 'unset'
                                            },
                                            span: {
                                                alignItems: "center"
                                            }
                                        }
                                    }
                                }
                            },
                            '.cartinput-upload-content::-webkit-scrollbar-thumb': {
                                backgroundColor: ColorStyles.Foundation.YellowBrown[ 500 ],
                                borderRadius: 6,
                            },
                            '.cartinput-upload-content::-webkit-scrollbar': {
                                width: 4,
                            },
                        }
                    },

                },
            }
        }
    },
    // drawer mini cart 
    MuiDrawer: {
        styleOverrides: {
            root: {
                '&.drawer-slide-mini-cart': {
                    '.MuiPaper-root': {
                        border: "0 !important",
                        '.close-box-drawer': {
                            position: 'absolute',
                            top: '4%',
                            right: '8%',
                            width: 50,
                            height: 50,
                            cursor: 'pointer',
                            [ MediaBreakpoints( Theme.down.sm ) ]: {
                                right: '-1%',
                            },
                        }
                    },
                }
            }
        }
    },
    // drawer checkout Guest login, sigin up, CheckCodeVerify
    MuiDrawer: {
        styleOverrides: {
            root: {
                '&.drawer-slide-hiden': {
                    '.MuiPaper-root': {
                        border: "0 !important",
                        padding: "100px 60px",
                        width: 570,
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                            padding: "123px 16px",
                            width: '100%'
                        },
                        '.close-box-drawer': {
                            position: 'absolute',
                            top: '4%',
                            right: '8%',
                            width: 50,
                            height: 50,
                            cursor: 'pointer',
                            [ MediaBreakpoints( Theme.down.sm ) ]: {
                                right: '-1%',
                            },
                        },
                        '.checkout-guest-content': {
                            width: 570,
                            padding: "100px 30px",
                            [ MediaBreakpoints( Theme.down.sm ) ]: {
                                width: '100%',
                                padding: "123px 16px",
                            },
                        }
                    },
                },
                // drawer page layout My account
                '&.drawer-slide-menu-left': {
                    '.MuiPaper-root': {
                        border: "0 !important",
                        padding: "50px 16px",
                        width: 300,
                        [ MediaBreakpoints( Theme.down.downMobileSm ) ]: {
                            width: '100%'
                        },
                        '.close-box-drawer': {
                            position: 'absolute',
                            top: '2%',
                            right: 0,
                            width: 40,
                            height: 40,
                            backgroundColor: ColorStyles.Foundation.YellowBrown[ 500 ],
                            padding: '10px 0px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                            cursor: 'pointer',
                            [ MediaBreakpoints( Theme.down.downMobileSm ) ]: {
                                width: 30,
                                height: 30,
                            },
                        },
                    },
                }
            }
        }
    },
    // custom style menu navbar header 
    MuiPopover: {
        styleOverrides: {
            root: {
                '&.list-menu-navbar': {
                    '.MuiPaper-root': {
                        width: "100% !important",
                        padding: "0 16px",

                        [ MediaBreakpoints( Theme.down.lg ) ]: {
                            padding: '40px 0px 0px 0px',
                            top: '175px !important',
                        },
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
                            top: '152px !important',
                        },
                        left: '0px !important',
                        maxWidth: 'unset !important',
                        overflowY: 'scroll',
                        overflowX: 'clip',
                        '&:after': {
                            content: "''",
                            width: 0,
                            height: 0,
                            position: 'absolute',
                            borderLeft: '35px solid transparent',
                            borderRight: '35px solid transparent',
                            borderBottom: `35px solid ${ ColorStyles.Foundation.brown[ 500 ] }`,
                            top: '5px',
                            left: '-6px',
                        },
                        '.MuiList-root': {
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            padding: 0,
                            position: 'relative',
                            '.MenuItem-Mobile': {
                                padding: '0px 8px',
                                backgroundColor: ColorStyles.Foundation.brown[ 500 ],
                                borderBottom: `1px solid ${ ColorStyles.Foundation.baseColor.white }`,
                                '.MuiButton-btn-style-3': {
                                    '.MuiTouchRipple-root': {
                                        display: 'none !important'
                                    }
                                }
                            },
                            '.menu-dropdown-mobile': {
                                '.MuiCollapse-wrapper': {
                                    '.MuiCollapse-wrapperInner': {
                                        '.MuiList-root': {
                                            '.MuiButtonBase-root.MuiMenuItem-root': {
                                                paddingTop: 12,
                                                paddingBottom: 12,
                                                borderTop: `1px solid ${ ColorStyles.Foundation.Neutral[ 500 ] }`
                                            }
                                        }
                                    }
                                }
                            },

                        }
                    },
                },
                '.MuiPaper-root::-webkit-scrollbar-thumb': {
                    backgroundColor: ColorStyles.Foundation.brown[ 500 ],
                    borderRadius: 6,
                },
                '.MuiPaper-root::-webkit-scrollbar': {
                    width: 4,
                },
            }
        }
    },
    MuiBadge: {
        styleOverrides: {
            root: {
                span: {
                    backgroundColor: ColorStyles.Foundation.baseColor.black
                }
            }
        }
    },

    /******************
     *styles varial button  mui marterial
     *****************/
    MuiChip: {
        variants: [
            {
                props: {
                    variant: 'deactivated',
                    variant: 'activated',
                    variant: 'pending'
                },
                style: {}
            }
        ],
        styleOverrides: {
            deactivated: {
                backgroundColor: ColorStyles.Foundation.Danger[ 400 ],
                color: ColorStyles.Foundation.baseColor.white,
            },
            activated: {
                backgroundColor: ColorStyles.Foundation.Success[ 400 ],
                color: ColorStyles.Foundation.baseColor.white,
            },
            pending: {
                backgroundColor: ColorStyles.Foundation.YellowBrown[ 400 ],
                color: ColorStyles.Foundation.baseColor.white,
            }
        }
    },
    MuiButton: {
        variants: [
            {
                props: {
                    variant: 'default',
                    variant: 'primary',
                    variant: 'ThirdButon',
                    variant: "btn-slick-style1",
                    variant: "btn-slick-style2",
                    variant: 'btn-slick-style3',
                    variant: 'btn-filter-style1',
                    variant: 'btn-loadmore-style2',
                    variant: "ButtonShop",
                    variant: 'btn-shopcart-1',
                    variant: 'btn-shopcart-2',
                    variant: "btn_white",
                    variant: "btn_black",
                    variant: 'btn-shop-2',
                    variant: 'btn-disable',
                    variant: 'btn-input',
                    variant: 'btn-style-1',
                    variant: 'btn-style-2',
                    variant: 'btn-style-3',
                    variant: 'btn-style-4',
                    variant: 'btn-option',
                },
                style: {},
            },
        ],
        styleOverrides: {
            root: {
                textTransform: 'none',
                boxShadow: 'none',
                borderRadius: '4px',
                height: '48px',
                '&:hover': {
                    boxShadow: 'none',
                },
            },
            'btn-disable': {
                ...ButtonStyles.ButtonShop.style3
            },
            'btn-shop-2': {
                ...ButtonStyles.ButtonShop.style2,
            },
            'btn-style-1': {
                backgroundColor: ColorStyles.Foundation.Danger[ 400 ],
                ...TextStyles.Poppins[ 'Body04:14px' ].Light,
                color: ColorStyles.Foundation.baseColor.white,
                height: 40,
                ':hover': {
                    backgroundColor: ColorStyles.Foundation.baseColor.white,
                    border: `1px solid ${ ColorStyles.Foundation.Danger[ 400 ] }`,
                    color: ColorStyles.Foundation.baseColor.black,
                },
            },
            'btn-style-2': {
                backgroundColor: ColorStyles.Foundation.YellowBrown[ 500 ],
                ...TextStyles.Poppins[ 'Body04:14px' ].Light,
                color: ColorStyles.Foundation.baseColor.white,
                height: 40,
                ':hover': {
                    border: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
                    backgroundColor: ColorStyles.Foundation.baseColor.white,
                    color: ColorStyles.Foundation.baseColor.black,
                },
            },
            'btn-style-3': {
                ...TextStyles.Poppins[ 'Body03:18px' ].Regular,
                color: ColorStyles.Foundation.Black[ 900 ],
                backgroundColor: 'transparent',
                ':hover': {
                    a: {
                        color: ColorStyles.Foundation.baseColor.white,
                    },
                    color: ColorStyles.Foundation.baseColor.white,
                    backgroundColor: 'transparent',
                    svg: {
                        color: ColorStyles.Foundation.baseColor.white,
                        width: 25,
                        height: 25,
                    }
                },
            },
            'btn-style-4': {
                backgroundColor: ColorStyles.Foundation.Success[ 400 ],
                height: 30,
                ":hover": {
                    backgroundColor: ColorStyles.Foundation.Success[ 400 ]
                }
            },
            'btn-shopcart-1': {
                ...ButtonStyles.ButtonShop.style1,
                ':hover': {
                    ...ButtonStyles.ButtonShop.style1.hover,
                    svg: {
                        color: ColorStyles.Foundation.baseColor.black,
                    }
                },
                '&:active': {
                    color: ColorStyles.Foundation.baseColor.white,
                    backgroundColor: ColorStyles.Foundation.Black[ 900 ],
                    svg: {
                        color: ColorStyles.Foundation.baseColor.white,
                    }
                },
            },
            'btn-shopcart-2': {
                ...ButtonStyles.ButtonShop.style1,
                width: 222,
                height: 40,
                ...TextStyles.Poppins[ 'Body04:14px' ].Regular,
                ':hover': {
                    ...ButtonStyles.ButtonShop.style1.hover,
                    svg: {
                        color: ColorStyles.Foundation.baseColor.black,
                    }
                },
                '&:active': {
                    color: ColorStyles.Foundation.baseColor.white,
                    backgroundColor: ColorStyles.Foundation.Black[ 900 ],
                    svg: {
                        color: ColorStyles.Foundation.baseColor.white,
                    }
                },
            },
            'btn-option': {
                backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
                height: 40,
                ...TextStyles.Poppins[ 'Body04:14px' ].Regular,
                color: ColorStyles.Foundation.Black[ 600 ],
                ':hover': {
                    backgroundColor: ColorStyles.Foundation.Neutral[ 700 ],
                }
            },

            ButtonShop: {
                ...ButtonStyles.ButtonShop.default,
                position: "relative",
                borderRadius: 'unset',
                ':hover': {
                    ...ButtonStyles.ButtonShop.hover,
                },
                '&:active': {
                    color: ColorStyles.Foundation.Black[ 900 ],
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    height: '2px',
                    width: '60%',
                    borderBottom: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
                    bottom: '-3px',
                },
            },
            ButtonShop_1: {
                ...ButtonStyles.ButtonShop.default,
                position: "relative",
                borderRadius: 'unset',
                ':hover': {
                    ...ButtonStyles.ButtonShop.hover,
                },
                '&:active': {
                    color: ColorStyles.Foundation.Black[ 900 ],
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    height: '2px',
                    width: '100%',
                    borderBottom: `1px solid ${ ColorStyles.Foundation.YellowBrown[ 500 ] }`,
                    bottom: '-3px',
                },
            },
            default: {
                padding: '6px 0px',
                ...ButtonStyles.ButtonShop.default,
                '&:active': {
                    backgroundColor: ColorStyles.Foundation.baseColor.white
                },
            },
            primary: {
                ...ButtonStyles.primary.default,
                borderRadius: 'unset',
                ':hover': {
                    ...ButtonStyles.primary.hover,
                },
                ':disabled': {
                    ...ButtonStyles.primary.disabled,
                },
                '&:active': {
                    color: ColorStyles.Foundation.Black[ 900 ],
                },
            },
            ThirdButon: {
                ...ButtonStyles.ThirdButon.default,
                ':hover': {
                    ...ButtonStyles.ThirdButon.hover,
                },
                ':disabled': {
                    ...ButtonStyles.ThirdButon.disabled,
                },
                '&:active': {
                    backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
                },
            },
            'btn-slick-style1': {
                ...ButtonStyles.SlickButton.style1
            },
            'btn-slick-style2': {
                ...ButtonStyles.SlickButton.style2
            },
            'btn-slick-style3': {
                ...ButtonStyles.SlickButton.style3
            },
            'btn-filter-style1': {
                ...ButtonStyles.filterButton.style1
            },
            'btn-loadmore-style2': {
                ...ButtonStyles.filterButton.style2
            },
            btn_white: {
                ...ButtonStyles.btn_white.default,
                ':hover': {
                    ...ButtonStyles.btn_white.hover,
                },
                '&:active': {
                    color: ColorStyles.Foundation.Black[ 900 ],
                },
            },
            btn_black: {
                ...ButtonStyles.btn_black.default,
                ':hover': {
                    ...ButtonStyles.btn_black.hover,
                },
                '&:active': {
                    color: ColorStyles.Foundation.baseColor.white,
                    backgroundColor: ColorStyles.Foundation.Black[ 600 ],
                },
            },
            'btn-input': {
                ...ButtonStyles.btn_input.default,
                ':hover': {
                    ...ButtonStyles.btn_input.hover,
                },
                '&:active': {
                    ...ButtonStyles.btn_input.active
                },
            },
        },
    },
};

export default components;
