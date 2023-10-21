import { Checkbox, FormControl, FormControlLabel, FormGroup, Radio, Typography } from '@mui/material';
import { useState } from 'react';

const CheckboxGroup = ( props ) => {
    const { options,
        onChange,
        name,
        enableSelectAll = false,
        inputCheckBox = true,
        title,
        checkedValues,
        className } = props;

    const [ checkedItems, setCheckedItems ] = useState( checkedValues || [] );
    // console.log( checkedItems );
    const handleChange = ( event ) => {
        const { checked, value } = event.target;
        let newCheckedItems = checkedItems.slice();
        if ( checked ) {
            newCheckedItems.push( value );
        } else {
            newCheckedItems.splice( newCheckedItems.indexOf( value ), 1 );
        }
        setCheckedItems( newCheckedItems );
        onChange && onChange( newCheckedItems );
    };

    const handleSelectAll = () => {
        const newCheckedItems = options.map( option => typeof option.value === 'number' ? option.value.toString() : option.value );
        setCheckedItems( newCheckedItems );
        onChange && onChange( newCheckedItems );
    };

    return (
        <FormControl component="fieldset" className="custom-checkbox-group">
            { title && <Typography variant="body8">{ title }</Typography> }
            <FormGroup className={ className }>
                { options.map( ( option, index ) => {
                    const optionValue = typeof option.value === 'number' ? option.value.toString() : option.value;
                    return (
                        <FormControlLabel
                            key={ option.value }
                            control={
                                inputCheckBox ? (
                                    <Checkbox
                                        checked={ checkedItems.includes( optionValue ) }
                                        onChange={ handleChange }
                                        name={ `${ name }[${ index }]` }
                                        value={ option.value } />
                                ) : (
                                    <Radio
                                        checked={ checkedItems.includes( option.value ) }
                                        onChange={ handleChange }
                                        name={ `${ name }` }
                                        value={ option.value }
                                    />
                                )
                            }
                            label={ option.label }
                        />
                    );
                } ) }
            </FormGroup>
            { enableSelectAll && (
                <FormControlLabel
                    className="check-select-all"
                    control={ <Checkbox onChange={ handleSelectAll } checked={ checkedItems.length === options.length } /> }
                    label="Select All"
                />
            ) }
        </FormControl>
    );
};

export default CheckboxGroup;
