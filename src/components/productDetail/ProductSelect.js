import { Box, Button, FormControl, Grid, MenuItem, Popper, Select, Typography } from "@mui/material";
import { selectorEmptyField } from "@slices/product";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProductSelect = ( { productDetail, setProductPrice } ) => {

    let parseProductDetail = JSON.parse( productDetail?.attributes ?? '[]' );
    let parseVariations = JSON.parse( productDetail?.variants ?? '[]' );

    const [ variantActive, setvariantActive ] = useState( [] );
    const [ selected, setSelected ] = useState( {} );
    const valueField = useSelector( selectorEmptyField );

    const [ anchorEl, setAnchorEl ] = useState( null );
    const handlePopoverOpen = ( event, select ) => {
        if ( select.disabled ) {
            setAnchorEl( event.currentTarget );
        }
    };

    const findPrice = ( selected1, variations ) => {
        const matchingVariation = variations.find( variation => {
            return Object.keys( selected1 ).every( key => variation[ key ] === selected1[ key ].toString() );
        } );

        return matchingVariation ? matchingVariation.price : false;
    };

    const handleSelect = ( attributeName, option ) => {
        // Get Price From variation
        if ( productDetail.type == 5 ) {
            const price = findPrice( {
                ...selected,
                [ attributeName.toLowerCase() ]: option,
            }, parseVariations );
            setProductPrice( !price ? productDetail.price : parseFloat( price ).toFixed( 2 ) + ' $' );
        }

        setSelected( {
            ...selected,
            [ attributeName.toLowerCase() ]: option,
        } );
    };

    // if ( Object.entries( selected ).length > 0 ) {
    //     Object.entries( selected ).map( variant => {
    //         console.log( variant[ 0 ], variant[ 1 ] );
    //         if ( variantActive.length > 0 ) {
    //             variantActive.map(vari => )
    //             variantActive[ variant[ 0 ] ] === variant[ 1 ];
    //         }
    //         const checkVariant = parseVariations.find( variant => variant[ variant[ 0 ] ] === variant[ 1 ] );
    //         if ( variantActive.length === 0 ) {
    //             setvariantActive( [ checkVariant ] );
    //         }

    //         console.log( 'checkVariant: ', checkVariant );
    //     } );
    // }

    return (
        <Grid container spacing={ 3 } className="product-select">
            {
                parseProductDetail.length > 0 && parseProductDetail.map( ( attribute, attributeIndex ) => {
                    const isEmpty = valueField[ attribute.name ] === '';
                    // const isNotValue = Object.values( valueField ).some( value => value !== '' );

                    if ( attribute.display === 'display' ) {
                        return (
                            <Grid item xs={ 12 } lg={ 12 } key={ `attribute-${ attributeIndex }` } className="product-select-item">
                                <Typography variant="body9" paragraph mb={ 0.5 }>{ attribute.name }</Typography>
                                <Box >
                                    {
                                        attribute.value.map( ( select, displayIndex ) => {
                                            const isActive = selected[ attribute.name.toLowerCase() ] === displayIndex;
                                            return (
                                                <Box key={ `select-${ displayIndex }` }>
                                                    <Button className={ `product-btn-default-no-active product-btn-default-${ isActive ? 'active' : ( isEmpty && !selected[ attribute.name.toLowerCase() ] ) ? 'error' : '' }` }
                                                        onClick={ () => handleSelect( attribute.name, displayIndex ) }
                                                    >
                                                        <Typography variant="lable18">{ select }</Typography>
                                                    </Button>
                                                    <input name={ attribute.name } type="hidden" defaultValue={ selected[ attribute.name.toLowerCase() ] } />
                                                </Box>
                                            );
                                        } )
                                    }
                                </Box>
                                <Typography className={ isEmpty && !selected[ attribute.name.toLowerCase() ] ? "submit-error" : "submit-not-error" } paragraph variant="label1">{ `Please select an option in this list` }</Typography>
                            </Grid>
                        );
                    }

                    return (
                        <Grid item xs={ 12 } lg={ 6 } key={ `attribute-${ attributeIndex }` }>
                            <Typography variant="body9" paragraph mb={ 0.5 }>{ attribute.name }</Typography>
                            <FormControl fullWidth>
                                <Select
                                    name={ attribute.name }
                                    displayEmpty
                                    className={ `attribute-select attribute-select-${ selected[ attribute.name.toLowerCase() ] ? 'selected' : isEmpty ? 'error' : '' } ` }
                                    value={ ( selected[ attribute.name.toLowerCase() ] ) || '' }
                                    onChange={ ( e ) => handleSelect( attribute.name, e.target.value ) }
                                    renderValue={ ( value ) => {
                                        console.log( 'value: ', value );
                                        const selectedOption = attribute.value[ value ];
                                        if ( !selectedOption ) {
                                            return (
                                                <Box>
                                                    <Typography variant="heading">{ `Choose ${ attribute.name }` }</Typography>
                                                </Box>
                                            );
                                        } else {
                                            return selectedOption;
                                        }
                                    } }
                                >
                                    { attribute.value.map( ( select, selectIndex ) => {
                                        return (
                                            <MenuItem
                                                className={ `list-item-select ` }
                                                key={ `select-${ selectIndex }` }
                                                value={ selectIndex }
                                            >
                                                { select }
                                                {
                                                    <Popper className="tooltip"
                                                        open={ Boolean( anchorEl ) }
                                                        anchorEl={ anchorEl }
                                                        placement="right"
                                                    >
                                                        <Typography>Choose a different seasoning to be selected for this one</Typography>
                                                    </Popper>
                                                }
                                            </MenuItem>
                                        );
                                    } ) }
                                </Select>
                                {/* { isEmpty && !isNotValue && <Typography paragraph mb={ 0 } mt='6px' variant="label1" color="#dc2626">{ `Please select an option in this list` }</Typography> } */ }
                                <Typography className={ isEmpty && !selected[ attribute.name.toLowerCase() ] ? "submit-error" : "submit-not-error" } paragraph mb={ 0 } variant="label1">{ `Please select an option in this list` }</Typography>
                            </FormControl>
                        </Grid>
                    );
                } )
            }
        </Grid >
    );
};
export default ProductSelect; 