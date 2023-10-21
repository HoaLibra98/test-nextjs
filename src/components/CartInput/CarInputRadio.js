import axiosClient from '@configs/axios';
import { FormControlLabel, FormGroup, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';
import { setClose, setOpen } from '@slices/popup';
import { selectorFormProduct, setFormProduct } from '@slices/product';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import S from 'string';

function CarInputRadio( { label = '', defaultValue = false, note, attrs = {}, attrsGroup = {}, options = [], type = 'radio', ...props } ) {

    const { type: typeProduct } = useSelector( selectorFormProduct );

    const dispatch = useDispatch();
    const handleAddNew = ( event ) => {
        event.preventDefault();

        const component = props.button?.component || false;
        if ( component === false ) return;

        const paths = component.split( '/' );
        const taxonomy = S( paths[ paths.length - 1 ] ).replaceAll( 'AddNew', '' ).underscore().s;

        dispatch( setOpen( {
            icon: 'plus',
            content: props.button.component,
            title: props.button.label,
            inputs: [
                {
                    name: {
                        label: 'Name',
                    }
                }
            ],
            buttons: {
                close: false,
                submit: {
                    label: 'Add',
                    variant: 'btn-style-2',
                    onClick: async ( formRef ) => {
                        const formData = new FormData( formRef.current );
                        const data = Object.fromEntries( formData );

                        // Check if name is empty
                        if ( !data.name ) {
                            dispatch( setAlertOpen( { severity: 'error', message: 'Save not success' } ) );
                            return;
                        }

                        const dataPopup = {
                            name: data.name,
                            description: "",
                            metaDescription: "",
                            metaKeyword: "",
                            metaTitle: "",
                            slug: "",
                            taxonomy: taxonomy
                        };

                        const res = await axiosClient.post( `@/categories/save`, dataPopup );
                        if ( res.success === true ) {
                            const getForm = await axiosClient.get( `@/contents/${ typeProduct }/getForm` );
                            if ( getForm.success === true ) {
                                dispatch( setFormProduct( { formProduct: getForm.data, type: typeProduct } ) );
                            }
                            dispatch( setClose() );
                        }
                    }
                }
            }
        } ) );
    };

    return (
        <FormGroup { ...attrsGroup }>
            {/* Label group if multiple radio */ }
            { options.length > 0 && label && <FormLabel component="legend">{ label }</FormLabel> }

            <RadioGroup defaultValue={ defaultValue } { ...props }>
                {/* If only radio */ }
                { options.length === 0 && <FormControlLabel label={ label } control={ <Radio value={ defaultValue } { ...props } /> } { ...attrs } /> }
                {/* If have multiple radio */ }
                {
                    options.length > 0 && options.map( radio => (
                        <FormControlLabel key={ `multiple-radio-${ radio.label }-${ radio.value }` } value={ radio.value } label={ radio.label } control={ <Radio /> } { ...attrs } />
                    ) )
                }
            </RadioGroup>
            {
                props.add_new && props.add_new === 'true' && <Link href='#' onClick={ handleAddNew }>{ props.button.label }</Link>
            }
            {/* Note or Message error for input if have */ }
            { note && <FormHelperText>{ note }</FormHelperText> }
        </FormGroup>
    );
}

CarInputRadio.propTypes = {
    label: PropTypes.string,
    defaultValue: PropTypes.any,
    note: PropTypes.string,
    attrs: PropTypes.object,
    attrsGroup: PropTypes.object,
    options: PropTypes.array,
    type: PropTypes.string
};

export default CarInputRadio

