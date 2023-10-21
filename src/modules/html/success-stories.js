import SvgIcon from "@components/SvgIcon";
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Pagination, Stack, Typography, experimentalStyled, styled } from "@mui/material";
import { ColorStyles, TextStyles } from "@theme/Designs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SuccessStories = () => {

    const MainBanner = experimentalStyled( Box )( ( { theme } ) => ( {
        backgroundColor: '#FFFFFF',
        '.MuiContainer-root': {
            padding: '128px 0',
            '.MuiGrid-root.MuiGrid-container': {
                '.success-category': {
                    '.MuiBox-root': {
                        borderRadius: 4,
                        border: '1px solid #B9BEC7',
                        '.MuiTypography-root.MuiTypography-subtitle1': {
                            padding: '8px 16px 16px',
                            borderBottom: '1px solid #B9BEC7'
                        },
                        '.MuiFormControlLabel-root': {
                            padding: '11px 10px',
                            marginRight: 0,
                            '.MuiButtonBase-root': {
                                padding: 0,
                            },
                            '.MuiButtonBase-root.MuiCheckbox-root': {
                                width: 20,
                                height: 20,
                                color: '#98A0AD',
                                // '& .MuiSvgIcon-root': {
                                //     color: '#02A04B',
                                // },
                                '&.Mui-checked': {
                                    backgroundColor: '#E6F6ED',
                                }
                            },
                            '.MuiTypography-root.MuiTypography-body1': {
                                ...TextStyles.textMd.medium,
                                color: ColorStyles.gray[ 700 ],
                                marginLeft: 12,
                                minWidth: '100%',
                            },

                        }
                    }
                },
                '.success-content': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 32,
                    '.MuiBox-root': {
                        paddingBottom: 32,
                        '.MuiGrid-container': {
                            '.success-content-image': {
                                img: {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: 4,
                                }
                            },
                            '.success-content-description': {
                                '.MuiStack-root': {
                                    '.success-tag': {
                                        '.MuiBox-root': {
                                            padding: '0 8px',
                                            backgroundColor: ColorStyles.primary[ 50 ],
                                            '.MuiTypography-text16': {
                                                color: ColorStyles.primary[ 500 ]
                                            }
                                        }
                                    },
                                    a: {
                                        '.MuiButtonBase-root': {
                                            padding: '8px 14px',
                                            backgroundColor: '#B4D524',
                                            borderRadius: 4,
                                        }
                                    }
                                }
                            }
                        },
                    },
                    '.MuiPagination-root': {
                        display: 'flex',
                        justifyContent: 'center',
                        '.MuiPagination-ul': {
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 20,
                            li: {
                                border: '1px solid #98A0AD',
                                borderRadius: 4,
                                '.MuiPaginationItem-root': {
                                    color: '#48505E',
                                    ...TextStyles.textSm.medium,
                                    width: 36,
                                    margin: 0,
                                },
                                '.MuiPaginationItem-root.Mui-selected': {
                                    backgroundColor: '#02A04B',
                                    color: '#FFFFFF',
                                    ...TextStyles.textSm.medium,
                                    borderRadius: 0,
                                    margin: 0,
                                    width: 36
                                }
                            }
                        }
                    }
                }
            }
        }
    } ) );

    const CustomIcon = styled( 'span' )( ( { theme } ) => ( {
        borderRadius: 6,
        width: 20,
        height: 20,
        border: '1px solid #98A0AD',
    } ) );


    const listCategory = [
        {
            id: 1,
            name: 'Social Media marketing'
        },
        {
            id: 2,
            name: 'Dealership Websites'
        },
        {
            id: 3,
            name: 'Customer Booking'
        },
        {
            id: 4,
            name: 'Direct Buy'
        }
    ];

    const listSuccess = [
        {
            images: '/image/success_1.png',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut et massa mi.',
            description: 'Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi....'
        },
        {
            images: '/image/success_2.png',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut et massa mi.',
            description: 'Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi....'
        },
        {
            images: '/image/success_3.png',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut et massa mi.',
            description: 'Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi....'
        },
        {
            images: '/image/success_4.png',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut et massa mi.',
            description: 'Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi....'
        },
    ];

    const [ checked, setChecked ] = useState( false );

    const handleCheck = ( event ) => {
        setChecked( event.target.checked );
    };

    const itemsPerPage = 4;
    const [ page, setPage ] = useState( 1 );

    const startIndex = ( page - 1 ) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;


    const currentItems = listSuccess.slice( startIndex, endIndex );
    const handleChange = ( event, value ) => {
        setPage( value );
    };

    return (
        <MainBanner>
            <Container>
                <Grid container spacing={ 4 }>
                    <Grid item xs={ 12 } md={ 12 } lg={ 3 } className="success-category">
                        <Box direction='column' px={ 3 } py={ 3 } spacing={ 2 }>
                            <Typography variant="subtitle1" paragraph>Category</Typography>
                            {
                                listCategory.map( ( item, index ) => (
                                    <FormControlLabel
                                        key={ `success-category-${ index }` }
                                        control={
                                            <Checkbox
                                                name={ item.name }
                                                value={ item.id }
                                            // checked={ checked }
                                            // id={ item.id }
                                            // icon={ <CustomIcon /> }s
                                            // className="checkbox"
                                            // onChange={ ( e ) => isCheckboxChecked( index, e.target.checked ) }
                                            />
                                        }
                                        label={ item.name }
                                    />
                                ) )
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={ 12 } md={ 12 } lg={ 9 } className="success-content">
                        {
                            currentItems.map( ( item, index ) => (
                                <Box sx={ { borderBottom: '1px solid #D0D3D9', } } key={ `success-content-${ index }` }>
                                    <Grid container spacing={ 4 } >
                                        <Grid item xs={ 12 } md={ 12 } lg={ 3 } className="success-content-image">
                                            <Image src={ item.images } width={ 176 } height={ 176 } alt="" />
                                        </Grid>

                                        <Grid item xs={ 12 } md={ 12 } lg={ 9 } className="success-content-description">

                                            <Stack direction='column' spacing={ 1 }>
                                                <Stack direction='row' alignItems='center' spacing={ 0.5 }>
                                                    <Typography variant="text16">Henry Ford</Typography>
                                                    <SvgIcon icon='ellipse' />
                                                    <Typography variant="text16">CEO</Typography>
                                                    <SvgIcon icon='ellipse' />
                                                    <Typography variant="text16">Ford</Typography>
                                                    <SvgIcon icon='ellipse' />
                                                    <Typography variant="text16">Published on July 16, 2022</Typography>
                                                </Stack>

                                                <Stack direction='row' spacing={ 1 } className="success-tag">
                                                    <Box>
                                                        <Typography variant="text16">Media marketing</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography variant="text16">Websites</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography variant="text16">Direct Buy</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography variant="text16">Booking</Typography>
                                                    </Box>
                                                </Stack>

                                                <Typography variant="body6">{ item.title }</Typography>
                                                <Typography variant="description1">{ item.description }</Typography>
                                                <Link href='/'>
                                                    <Button>
                                                        <Typography variant='text15'>Read more</Typography>
                                                    </Button>
                                                </Link>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Box>
                            ) )
                        }

                        <Pagination
                            count={ Math.ceil( listSuccess.length / itemsPerPage ) }
                            hidePrevButton
                            hideNextButton
                            shape="rounded"
                            page={ page }
                            onChange={ handleChange }
                        />
                    </Grid>
                </Grid>
            </Container>
        </MainBanner>
    );
};

export default SuccessStories;