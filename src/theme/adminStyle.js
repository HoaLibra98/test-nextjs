import { ColorStyles, TextStyles } from "./Designs";
import { MediaBreakpoints, Theme } from "./MediaBreakpoints";

export const adminSyle = {

    '._admin': {
        // custom BlockHidden
        '.block-menu': {
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            padding: '24px 0px',
            '.block-hiden': {
                width: '100%',
                backgroundColor: ColorStyles.Foundation.baseColor.white,
                padding: '0px 0px',
            },
        },
        '.block-hiden': {
            width: '100%',
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            '.custom-checkbox-group': {
                overflowY: 'scroll',
                overflowX: 'clip',
                maxHeight: 250,
                '.MuiFormGroup-root': {
                    '.MuiFormControlLabel-root': {
                        width: '100%'
                    }
                }
            },
            '.custom-checkbox-group::-webkit-scrollbar-thumb': {
                backgroundColor: ColorStyles.Foundation.Black[ 300 ],
                borderRadius: 6,
            },
            '.custom-checkbox-group::-webkit-scrollbar': {
                width: 6,
                height: 6,
            },
        },
        //custom model form node config
        '.MuiDialog-root.form-config-node-model': {
            '.MuiDialog-container': {

                '.MuiDialog-paper': {
                    width: '450px'
                },

                '.MuiDialogContent-root.content-form': {
                    padding: 24,
                    borderTop: `1px solid ${ ColorStyles.Foundation.Black[ 500 ] }`,
                    borderBottom: `1px solid ${ ColorStyles.Foundation.Black[ 500 ] }`,
                },
                '.MuiDialogActions-root': {
                    '.action-node': {
                        margin: 16,
                    }
                }
            }
        },
        // custom form config node List
        '.form-config-node-list': {
            marginBottom: '16px',
            border: `1px solid ${ ColorStyles.Foundation.Black[ 300 ] }`,
            padding: 16,
            borderRadius: '0px 0px 5px 5px',
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            width: '100%',
            position: 'relative',
            top: '-0px',
            '> div': {
                marginBottom: '10px'
            },
            '.MuiButton-btn-style-4': {
                marginTop: 32,
            },
            '.MuiFormLabel-root': {
                color: ColorStyles.Foundation.Black[ 900 ],
                ...TextStyles.Poppins[ 'Body04:14px' ].Light,
            }
        },
        // custom drag review
        '.drag-preview': {
            backgroundColor: ColorStyles.Foundation.YellowBrown[ 100 ],
            minHeight: 35,
            width: '30%',
            borderRadius: 5,
            border: `1px solid ${ ColorStyles.Foundation.Black[ 300 ] }`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: "0px 10px",
        },
        // list render node List
        '.render-node-list': {
            padding: '15px 15px 0px 15px',
            ul: {
                margin: 0,
                padding: '16px 0',
                // paddingTop: 16,
                // paddingBottom: 16,
                // paddingLeft: 16,
                // backgroundColor: ColorStyles.gray[ 200 ],
                li: {
                    listStyleType: 'none',
                    position: 'relative',
                    marginLeft: "20px",
                    '.MuiButtonBase-root.MuiIconButton-root': {
                        padding: 2
                    },
                    ul: {
                        padding: 0
                    }
                }
            },
            '.custom-render-node': {
                marginBottom: 16,
                '.custom-render-node-item': {
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    minHeight: 35,
                    backgroundColor: ColorStyles.Foundation.YellowBrown[ 100 ],
                    borderRadius: '5px 5px 0px 0px',
                    padding: "0px 10px",
                    border: `1px solid ${ ColorStyles.Foundation.Black[ 300 ] }`,
                    //position: 'relative',
                    '.MuiTypography-root.MuiTypography-h6': {
                        maxWidth: '300px',
                        marginRight: 20,
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                    },
                    '.MuiTypography-heading': {
                        marginRight: 20
                    },
                    '.open-node-child': {
                        position: 'absolute',
                        left: '-25px',
                    },
                }
            },
            '.custom-render-module': {
                marginBottom: 16,
                '.custom-render-module-item': {
                    fontStyle: 'italic',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    minHeight: 35,
                    padding: "0px 10px",
                    backgroundColor: ColorStyles.Foundation.YellowBrown[ 100 ],
                    borderRadius: '5px 5px 0px 0px',
                    padding: "0px 10px",
                    border: `1px solid ${ ColorStyles.Foundation.Black[ 300 ] }`,
                    //position: 'relative',
                    '.MuiTypography-root.MuiTypography-h6': {
                        fontStyle: 'normal',
                        maxWidth: '250px',
                        overflow: 'hidden',
                        marginRight: 20,
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                    },
                    '.open-node-child': {
                        position: 'absolute',
                        left: '-25px',
                    },
                    '.MuiStack-root': {
                        '.MuiTypography-root': {
                            width: 'unset',
                            overflow: 'unset',
                            whiteSpace: 'nowrap',
                            textOverflow: 'unset',
                        }
                    },
                }
            },
            '&.list-block': {
                ul: {
                    li: {
                        margin: 0,
                        '.MuiButtonBase-root.MuiIconButton-root': {
                            padding: 2
                        }
                    }
                },
                '.custom-render-node': {
                    '.custom-render-node-item': {
                        width: '100%',
                    }
                },
            }
        },
        // render external node
        '.render-external-node': {
            padding: 15,
            display: 'flex',
            flexDirection: 'column',
            gap: 15,
            '.render-external-node-item': {
                fontStyle: 'italic',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                backgroundColor: ColorStyles.Foundation.YellowBrown[ 100 ],
                minHeight: 35,
                width: '100%',
                cursor: 'pointer',
                borderRadius: '5px 5px 0px 0px',
                padding: "0px 10px",
                border: `1px solid ${ ColorStyles.Foundation.Black[ 300 ] }`,
            }
        },
        // custom placeholder
        '.custom-placeholder': {
            background: ColorStyles.Foundation.YellowBrown[ 500 ],
            height: '3px',
            position: "absolute",
            right: 0,
            top: '50%',
            transform: 'translateY(-70%)'
        },
        // custom render drag layer
        '.drag-layer': {
            height: "100%",
            left: 0,
            pointerEvents: "none",
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 100
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
        // show select admin 
        '.show-select-admin': {
            [ MediaBreakpoints( Theme.down.md ) ]: {
                width: '100%',
            },
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            '.MuiFormControl-root': {
                borderRadius: 0,
                width: 272,
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    width: '100%',
                },
                '.MuiInputBase-root.show-oder-select': {
                    borderRadius: 5,
                    border: `1px solid ${ ColorStyles.Foundation.Neutral[ 700 ] }`,
                    height: 40,
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
        // Overrides MuiButtonGroup-root
        '.MuiButtonGroup-root': {
            display: 'flex',
            gap: 24,
            boxShadow: 'unset !important',
        },
        // menu popper user admin 
        '.menu-popper-admin': {
            '.MuiPaper-root.MuiMenu-paper': {
                width: "350px",
                right: 0,
                top: "70px !important",
                ".MuiList-padding": {
                    padding: "30px",
                    '.MuiButtonBase-root.MuiButton-root': {
                        backgroundColor: ColorStyles.Foundation.Black[ 900 ],
                        color: ColorStyles.Foundation.baseColor.white,
                        marginTop: 24,
                        width: "100%",
                        height: "48px",
                        borderRadius: '0px',
                        ...TextStyles.Poppins[ 'Body03:18px' ].Medium,
                        '&:hover': {
                            backgroundColor: ColorStyles.Foundation.brown[ 500 ],
                            color: ColorStyles.Foundation.baseColor.black,
                        },
                    }
                },
            },
        },
        //navbar menu admin
        '.MuiPaper-root.header-navbar-admin': {
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            '.MuiToolbar-root': {
            }
        },
        // drawer slider menu admin
        '.MuiDrawer-root.menu-left-admin': {
            '.MuiPaper-root': {
                width: 290,
                backgroundColor: ColorStyles.Foundation.brown[ 100 ],
                borderRight: `1px solid ${ ColorStyles.Foundation.Neutral[ 400 ] }`,
                [ MediaBreakpoints( Theme.down.downMobileSm ) ]: {
                    width: '100%'
                },
                '.list-menu-left': {
                    position: 'relative',
                    '.icon-click': {
                        position: 'absolute',
                        top: 20,
                        right: 0,
                        borderBottomLeftRadius: 10,
                        borderTopLeftRadius: 10,
                        backgroundColor: ColorStyles.Foundation.YellowBrown[ 200 ],
                        '.MuiButtonBase-root.MuiIconButton-root': {
                            padding: 2,
                            borderRadius: 0,
                            color: ColorStyles.Foundation.Black[ 900 ],
                        }
                    },
                    '.MuiList-root': {
                        '.list-menu-left-item': {
                            '.MuiListItem-root': {
                                '&.active-router': {
                                    backgroundColor: ColorStyles.Foundation.YellowBrown[ 100 ],
                                    '.MuiTypography-description': {
                                        color: ColorStyles.Foundation.YellowBrown[ 500 ]
                                    }
                                },
                                padding: '2px 0px',
                                '.MuiButtonBase-root': {
                                    '.MuiListItemIcon-root': {
                                        minWidth: '40px',
                                        color: ColorStyles.Foundation.Black[ 900 ]
                                    },
                                    '.MuiListItemText-root': {
                                        '.MuiTypography-root': {
                                            ...TextStyles.Poppins[ 'Body04:14px' ].SemiBold,
                                            color: ColorStyles.Foundation.Black[ 900 ],
                                        }
                                    }
                                }
                            },
                            '.menu-children': {
                                '.MuiCollapse-wrapper': {
                                    '.MuiCollapse-wrapperInner': {
                                        '.MuiList-root': {
                                            '.MuiListItem-root': {
                                                a: {
                                                    width: '100%',
                                                    '.MuiButtonBase-root': {
                                                        width: '100%',
                                                        paddingLeft: 30,
                                                        '.MuiListItemText-root': {
                                                            '.MuiTypography-root': {
                                                                ...TextStyles.Poppins[ 'Body04:14px' ].Medium,
                                                                color: ColorStyles.Foundation.Neutral[ 900 ],
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            '.MuiPaper-root.MuiDrawer-paper::-webkit-scrollbar-thumb': {
                backgroundColor: ColorStyles.Foundation.brown[ 500 ],
                borderRadius: 6,
            },
            '.MuiPaper-root.MuiDrawer-paper::-webkit-scrollbar': {
                width: 4,
            },
        },
        // custom color paper-root
        '.MuiPaper-root': {
            '.MuiList-root': {
                '.MuiButtonBase-root.MuiMenuItem-root': {
                    color: ColorStyles.Foundation.baseColor.black
                }
            }
        },
        '#admin': {
            '.TableList-Filter': {
                marginRight: '10px',
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                '.TableList-choose': {
                    '.MuiFormControl-root': {
                        '.MuiFormLabel-root': {
                            color: ColorStyles.Foundation.baseColor.black
                        }
                    },
                    display: 'flex',
                    '.MuiSelect-select': {
                        padding: '8px'
                    }
                },
                '.TableList-search': {
                    border: `1px solid ${ ColorStyles.Foundation.Black[ 100 ] }`,
                    borderRadius: '3px',
                    paddingLeft: '5px',
                    paddingLeft: '5px',
                    display: 'flex',
                    height: '40px',
                    alignSelf: 'center'
                }
            },
            '.MuiFormGroup-root.row': {
                flexDirection: "row",
            },
            '.MuiFormGroup-root': {
                '.MuiFormControlLabel-root': {
                    '.MuiButtonBase-root': {
                        '.MuiTypography-root': {
                            ...TextStyles.Domine[ "H6:14px" ].Regular,
                            color: ColorStyles.Foundation.Danger[ 900 ],
                        }
                    }
                }
            },
            // list manage product
            '.content-admin': {
                '.container-page': {
                    marginTop: 64,
                    padding: '0px 25px',
                    '.content-page': {
                        marginBottom: 64,
                        '&.color-background': {
                            backgroundColor: ColorStyles.Foundation.baseColor.white
                        },
                        '.MuiPaper-root': {
                            '.MuiTableContainer-root': {
                                '.MuiTable-root': {
                                    '.MuiTableBody-root': {
                                        '.MuiTableRow-root': {
                                            '.MuiTableCell-root': {
                                                padding: '0px 16px !important',
                                                whiteSpace: "nowrap"
                                            },
                                            '.MuiTableCell-root[data-field="action"]': {
                                                width: 200,
                                                textAlign: 'center'
                                            },
                                            '.MuiTableCell-root[data-field="options"]': {
                                                '.options-title': {
                                                    display: 'flex',
                                                    justifyContent: 'end',
                                                    '.MuiTypography-description7': {
                                                        cursor: 'pointer'
                                                    }
                                                },
                                                '.MuiButtonBase-root.MuiButton-btn-option': {
                                                    margin: '8px 0'
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            '.MuiTablePagination-root': {
                                '.MuiTablePagination-selectLabel': {
                                    ...TextStyles.Poppins[ 'Body04:14px' ].Medium,
                                    color: ColorStyles.Foundation.Black[ 900 ],
                                },
                                '.MuiInputBase-root': {
                                    ...TextStyles.Poppins[ 'Body04:14px' ].Medium,
                                    color: ColorStyles.Foundation.Black[ 900 ],
                                },
                                '.MuiTablePagination-displayedRows': {
                                    ...TextStyles.Poppins[ 'Body04:14px' ].Medium,
                                    color: ColorStyles.Foundation.Black[ 900 ],
                                },
                                '.MuiTablePagination-actions': {
                                    '.MuiButtonBase-root': {
                                        svg: {
                                            color: ColorStyles.Foundation.Black[ 900 ],
                                        }
                                    }
                                }
                            }
                        },

                    },
                    // tree view  page libary
                    '.page-libary': {
                        '.MuiGrid-root.MuiGrid-item': {
                            [ MediaBreakpoints( Theme.up.md ) ]: {
                                height: 800,
                            },
                            '.render-image': {
                                padding: 32,
                                flex: 1,
                                backgroundColor: ColorStyles.Foundation.baseColor.white,
                                '.list-image': {
                                    overflowY: 'scroll',
                                    overflowX: 'clip',
                                    height: 600,
                                    maxHeight: 600,
                                    '.render-image-item': {
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
                                        gap: 20,
                                        [ MediaBreakpoints( Theme.down.xl ) ]: {
                                            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                                        },
                                        [ MediaBreakpoints( Theme.down.lg ) ]: {
                                            gridTemplateColumns: '1fr 1fr 1fr',
                                        },
                                        [ MediaBreakpoints( Theme.down.md ) ]: {
                                            gridTemplateColumns: '1fr 1fr',
                                        },
                                        '.render-image-list': {
                                            border: `1px solid ${ ColorStyles.Foundation.Black[ 400 ] }`,
                                            borderRadius: 6,
                                            width: "100%",
                                            height: "100%",
                                            position: "relative",
                                            img: {
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: 6,
                                                objectFit: "cover"
                                            },
                                            '.setting': {
                                                position: 'absolute',
                                                top: 6,
                                                right: 0,
                                            }
                                        }
                                    },
                                },
                                '.list-image::-webkit-scrollbar-thumb': {
                                    backgroundColor: ColorStyles.Foundation.Success[ 500 ],
                                    borderRadius: 6,
                                },
                                '.list-image::-webkit-scrollbar': {
                                    width: 4,
                                },
                                '.no-data-image': {
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: ColorStyles.Foundation.baseColor.black
                                }
                            },
                            '.list-menu-folder': {
                                paddingBottom: 32,
                                marginBottom: 0,
                                backgroundColor: ColorStyles.Foundation.baseColor.white,
                                '.actions-folder': {
                                    backgroundColor: ColorStyles.Foundation.brown[ 100 ]
                                }
                            }
                        },
                        '.btn-add': {
                            width: 50,
                            height: 50,
                            svg: {
                                width: 20,
                                height: 20,
                            },
                            backgroundColor: ColorStyles.Foundation.YellowBrown[ 400 ],
                            ":hover": {
                                backgroundColor: ColorStyles.Foundation.YellowBrown[ 400 ],
                            }
                        },
                        '.btn-edit': {
                            width: 50,
                            height: 50,
                            svg: {
                                width: 20,
                                height: 20,
                            },
                            backgroundColor: ColorStyles.Foundation.Success[ 400 ],
                            ":hover": {
                                backgroundColor: ColorStyles.Foundation.Success[ 400 ],
                            }
                        },
                        '.btn-deleted': {
                            width: 50,
                            height: 50,
                            svg: {
                                width: 20,
                                height: 20,
                            },
                            backgroundColor: ColorStyles.Foundation.Danger[ 400 ],
                            ":hover": {
                                backgroundColor: ColorStyles.Foundation.Danger[ 400 ],
                            }
                        },
                        '.btn-upload': {
                            padding: '8px 16px',
                            borderRadius: '7px',
                            height: 30,
                            color: ColorStyles.Foundation.baseColor.black,
                            backgroundColor: ColorStyles.Foundation.YellowBrown[ 400 ],
                            ":hover": {
                                backgroundColor: ColorStyles.Foundation.YellowBrown[ 400 ],
                            }
                        },
                        '.MuiTreeView-root.tree-view-page-libary': {
                            margin: 20,
                            '.MuiTreeItem-root': {
                                '.MuiTreeItem-content': {
                                    padding: '16px 8px',
                                    borderBottom: `1px solid ${ ColorStyles.Foundation.Neutral[ 300 ] }`,
                                    ' &.Mui-selected': {
                                        backgroundColor: ColorStyles.Foundation.brown[ 100 ]
                                    },
                                    '.MuiTreeItem-iconContainer': {
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 20,
                                        height: 20,
                                    },
                                    '.MuiTreeItem-label': {
                                        ...TextStyles.Poppins[ 'Body04:14px' ].SemiBold,
                                        color: ColorStyles.Foundation.Black[ 900 ],
                                    }
                                },
                                '.MuiCollapse-root': {
                                    'MuiCollapse-wrapper': {
                                        '.MuiCollapse-wrapperInner': {
                                            '.MuiTreeItem-root': {
                                                '.MuiTreeItem-iconContainer': {
                                                    '.MuiTreeItem-label': {
                                                        ...TextStyles.Poppins[ 'Body04:14px' ].Light,
                                                        color: ColorStyles.Foundation.Black[ 900 ],
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                },
            },
        },
        // layout form submit, edit,add admin 
        '.container-admin-form': {
            padding: '0px 16px 0px 5px',
            //breadcrumbs-page
            '.breadcrumbs-page': {
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                marginTop: 64,
            },
            '.content-form': {
                marginBottom: 64,
                '.block-item-form': {
                    backgroundColor: ColorStyles.Foundation.baseColor.white,
                    marginBottom: 15,
                    '.MuiListItem-root': {
                        cursor: 'pointer',
                        backgroundColor: ColorStyles.Foundation.brown[ 100 ],
                    },
                    '.block-item-form-input': {
                        padding: '24px 24px 12px 24px',
                        '.MuiFormGroup-root': {
                            '.MuiFormLabel-root': {
                                color: ColorStyles.Foundation.baseColor.black
                            },
                            '.btn-add-product': {
                                width: '100%',
                                maxWidth: 150
                            }
                        },
                        '.MuiFormControl-root': {
                            marginBottom: 16
                        }
                    }
                },
                '.content-form-user': {
                    '.block-item-form': {
                        '&:first-child': {
                            '.block-item-form-input': {
                                '.MuiFormControl-root': {
                                    width: '50%',
                                    '&:nth-child( 2n+1 )': {
                                        paddingRight: 20,
                                    }
                                }
                            }
                        }
                    }
                },
                '.content-form-customer': {
                    '.block-item-form': {
                        '.block-item-form-input': {
                            '.MuiFormControl-root': {
                                width: '50%',
                                '&:nth-child( 2n+1 )': {
                                    paddingRight: 20,
                                }
                            },
                        },
                        '&:nth-child( 4 )': {
                            '.MuiFormControl-root': {
                                width: '50%',
                                '&:nth-child( 2n+1 )': {
                                    paddingRight: 20,
                                },
                                '&:last-child': {
                                    width: '100%',
                                }
                            },
                        }
                    },
                    '.MuiTablePagination-root': {
                        '.MuiTablePagination-selectLabel': {
                            ...TextStyles.Poppins[ 'Body04:14px' ].Medium,
                            color: ColorStyles.Foundation.Black[ 900 ],
                        },
                        '.MuiInputBase-root': {
                            ...TextStyles.Poppins[ 'Body04:14px' ].Medium,
                            color: ColorStyles.Foundation.Black[ 900 ],
                        },
                        '.MuiTablePagination-displayedRows': {
                            ...TextStyles.Poppins[ 'Body04:14px' ].Medium,
                            color: ColorStyles.Foundation.Black[ 900 ],
                        },
                        '.MuiTablePagination-actions': {
                            '.MuiButtonBase-root': {
                                svg: {
                                    color: ColorStyles.Foundation.Black[ 900 ],
                                }
                            }
                        }
                    }
                },
                '.content-form-email': {
                    '.block-item-form': {
                        '&:first-child': {
                            '.block-item-form-input': {
                                '.MuiFormControl-root': {
                                    width: '50%',
                                    '&:nth-child( 2n+1 )': {
                                        paddingRight: 20,
                                    },
                                    '&:nth-child( 5 )': {
                                        width: '100%',
                                        padding: 0,
                                    },
                                }
                            }
                        }
                    }
                },
            },
        },
        // show select admin 
        '.show-select-admin': {
            width: '100%',
            [ MediaBreakpoints( Theme.down.md ) ]: {
                width: '100%',
            },
            backgroundColor: ColorStyles.Foundation.baseColor.white,
            '.MuiFormControl-root': {
                borderRadius: 0,
                width: 272,
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    width: '100%',
                },
                '.MuiInputBase-root.show-oder-select': {
                    borderRadius: 5,
                    border: `1px solid ${ ColorStyles.Foundation.brown[ 700 ] }`,
                    // height: 40,
                    '.MuiSelect-select': {
                        padding: '6px 14px',
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

        // custom cartinput Upload
        '.cartinput-upload-content': {
            '.cartinput-upload-content-header': {
                width: "100%",
                borderBottom: `1px solid ${ ColorStyles.Foundation.brown[ 500 ] }`,
                '.MuiTabs-scroller': {
                    '.MuiTabs-flexContainer': {
                        '.MuiButtonBase-root': {
                            textTransform: 'none',
                        },
                        '.MuiButtonBase-root.MuiTab-root.Mui-selected ': {
                            color: ColorStyles.Foundation.brown[ 700 ]
                        },
                    },
                    '.MuiTabs-indicator': {
                        backgroundColor: ColorStyles.Foundation.brown[ 500 ]
                    }
                }
            },
            '.fui-dropzone-root': {
                height: '100%',
                borderRadius: "unset",
                minHeight: 392,
                [ MediaBreakpoints( Theme.down.md ) ]: {
                    minHeight: 300,
                },
            },
            '.MuiTabPanel-root': {
                height: "50%",
                padding: "24px 0px",
                '.fui-dropzone-root': {
                    height: '100%',
                    borderRadius: "unset",
                    minHeight: 392,
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        minHeight: 300,
                    },
                },
                '.files-ui-buttons-container': {
                    '.material-button-root': {
                        backgroundColor: ColorStyles.Foundation.Success[ 800 ]
                    }
                },
                '.list-image-file': {
                    width: "100%",
                    overflow: 'auto',
                    maxHeight: 392,
                    minHeight: 392,
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: ColorStyles.Foundation.Neutral[ 600 ],
                    },
                    '&::-webkit-scrollbar': {
                        width: 6,
                    },
                    [ MediaBreakpoints( Theme.down.md ) ]: {
                        maxHeight: 300,
                        minHeight: 300,
                    },
                    '.MuiGrid-root.MuiGrid-container': {
                        width: "100% !important",
                    },
                    '.MuiGrid-root.MuiGrid-item': {
                        position: 'relative',
                        '.setting': {
                            position: "absolute",
                            top: "29px",
                            right: "-4px",
                            '.MuiButtonBase-root.MuiButton-root': {
                                width: 25,
                                height: 25,
                                borderRadius: "50%",
                                minWidth: "unset",
                                padding: "unset",
                                zIndex: 999,
                            }
                        }
                    }
                },
                [ MediaBreakpoints( Theme.down.sm ) ]: {
                    padding: '24px 0px'
                },
                '.dropzone-ui': {
                    '.dz-ui-header': {
                        [ MediaBreakpoints( Theme.down.sm ) ]: {
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

        // custom  MuiDivider-root
        '.MuiDivider-root': {
            borderColor: ColorStyles.Foundation.Black[ 100 ]
        },
        // custom style quill ql-snow
        '.quill': {
            '.ql-container.ql-snow': {
                '.ql-editor.ql-blank': {
                    minHeight: '200px !important',
                }
            }
        },

        // upload file
        '.upload-file': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            borderStyle: 'dashed',
            backgroundColor: ColorStyles.Foundation.brown[ 500 ],
            width: 200,
            height: 200,
            margin: 'auto',
            marginBottom: 16,
            borderColor: '#101828',
            '&.size-upload-file': {
                width: 150,
                height: 150,
            },
            svg: {
                color: '#101828',
            }
        },

        // image multiple
        '.image-multiple': {
            position: "relative",
            width: 100,
            height: 100,
            overflow: "hidden",
            img: {
                cursor: 'default !important'
            },
            svg: {
                position: 'absolute',
                top: 0,
                right: 0,
                cursor: 'pointer',
                color: ColorStyles.Foundation.baseColor.black
            }
        },

        // custom attributes
        '.custom-attribute': {
            '.custom-attribute-option': {
                '.attribute-btn': {
                    '.MuiButtonBase-root': {
                        width: '100%',
                        maxWidth: 100,
                    },
                    '.show-select-admin': {
                        '.MuiStack-root': {
                            '.MuiFormControl-root': {
                                marginBottom: 0,
                                '.show-oder-select': {
                                    width: '100%',
                                    maxWidth: 200,
                                }
                            }
                        }

                    }
                },
                '.attribute-tree': {
                    ul: {
                        paddingLeft: 0,
                        marginBottom: 0,
                        li: {
                            listStyleType: 'none',
                            '.attribute-form': {
                                marginBottom: 9,
                                border: `1px solid ${ ColorStyles.Foundation.Black[ 100 ] }`,
                                borderRadius: 4,
                                borderBottom: 0,
                                '.MuiPaper-root': {
                                    margin: 0,
                                    borderBottom: `1px solid ${ ColorStyles.Foundation.Black[ 100 ] }`,
                                    '.MuiAccordionSummary-root': {
                                        '.MuiAccordionSummary-content': {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            margin: 0,
                                            alignItems: 'center',
                                            padding: '12px 16px 12px 0',
                                            '.MuiBox-root': {
                                                '.MuiButtonBase-root': {
                                                    padding: '0px 10px',
                                                },
                                                '.MuiButtonBase-root[aria-label="Sort"]': {
                                                    cursor: 'all-scroll'
                                                }
                                            }
                                        },
                                        '.MuiAccordionSummary-content.Mui-expanded': {
                                            borderBottom: `1px solid ${ ColorStyles.Foundation.Black[ 100 ] }`,
                                            margin: 0,
                                            padding: '8px 16px 8px 0',
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            },
            '.custom-attribute-variant': {
                '.variant-btn': {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottom: `1px solid ${ ColorStyles.Foundation.Black[ 100 ] }`,
                    marginBottom: 16,
                    padding: 10,
                    '.MuiTypography-root': {
                        marginRight: 40,
                    }
                },
                '.variant-option': {
                    border: `1px solid ${ ColorStyles.Foundation.Black[ 100 ] }`,
                    borderRadius: 4,
                    marginBottom: 16,
                    padding: '16px 0',
                    '.variant-tree': {
                        marginBottom: 16,
                        ul: {
                            paddingLeft: 0,
                            marginBottom: 0,
                            marginTop: 0,
                            li: {
                                listStyleType: 'none',
                                '.MuiPaper-root': {
                                    borderRadius: 0,
                                    // borderBottom: `1px solid ${ ColorStyles.Foundation.Black[ 100 ] }`,
                                    '.MuiButtonBase-root.MuiAccordionSummary-root': {
                                        '.MuiAccordionSummary-content': {
                                            margin: 0,
                                            marginBottom: 10,
                                            '.MuiGrid-root.MuiGrid-container': {
                                                paddingBottom: 10,
                                                borderBottom: `1px solid ${ ColorStyles.Foundation.Black[ 100 ] }`,
                                                '.variant-tree-select': {
                                                    '.MuiStack-root': {
                                                        flexWrap: 'wrap',
                                                        gap: 8,
                                                        '.show-select-admin': {
                                                            width: '100%',
                                                            maxWidth: '40%',
                                                            '.MuiStack-root': {
                                                                '.MuiFormControl-root': {
                                                                    marginBottom: 0,
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                '.variant-tree-btn': {
                                                    '.MuiStack-root': {
                                                        gap: 8,
                                                        '.MuiButtonBase-root': {
                                                            padding: 0
                                                        },
                                                        '.MuiButtonBase-root[aria-label="Sort"]': {
                                                            cursor: 'all-scroll'
                                                        }
                                                    }
                                                }
                                            },
                                        },
                                        '.MuiAccordionSummary-content.Mui-expanded': {
                                            // borderBottom: `1px solid ${ ColorStyles.Foundation.Black[ 100 ] }`,
                                        }
                                    },
                                    '.MuiCollapse-root': {
                                        '.MuiCollapse-wrapper': {
                                            '.MuiAccordion-region': {
                                                '.MuiAccordionDetails-root': {
                                                    '.MuiGrid-root.MuiGrid-container': {
                                                        '.MuiGrid-root.MuiGrid-item': {
                                                            '.upload-file': {
                                                                width: 85,
                                                                height: '100%',
                                                                margin: 'auto',
                                                                marginBottom: 0,
                                                                svg: {
                                                                    color: '#101828',
                                                                }
                                                            },
                                                            '.variant-tree-sale': {
                                                                '.MuiButtonBase-root': {
                                                                    height: 0,
                                                                    '.MuiTypography-root': {
                                                                        color: '#2271b1',
                                                                        textDecoration: 'underline'
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                }
            }
        },

        // order
        '.order_message_card': {
            ".MuiFormControl-root": {
                position: 'relative',
                '.MuiTypography-root': {
                    position: 'absolute',
                    bottom: 0,
                    right: 10,
                }
            },
        }
    },

};

