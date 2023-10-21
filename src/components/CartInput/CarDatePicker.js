import { Stack, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";

export const CarDatePicker = ( { name, label, defaultValue, ...props } ) => {

    const [ value, setValue ] = useState( dayjs( defaultValue ? defaultValue : new Date() ) );

    const handleChange = ( newValue ) => {
        setValue( newValue );
    };

    return (
        <Stack direction='column' spacing={ 1 } alignItems='start' mb={ 2 } >
            { label && label !== '' && <Typography variant="lable1">{ label }</Typography> }
            <LocalizationProvider dateAdapter={ AdapterDayjs } >
                <DatePicker
                    views={ [ 'year', 'month', 'day' ] }
                    defaultValue={ value }
                    onChange={ handleChange }
                    renderInput={ ( params ) => <TextField name={ name } { ...params } /> }
                    { ...props }
                />
            </LocalizationProvider>
        </Stack>
    );
};