import { Box, TextField, Typography } from "@mui/material";
import InputMask from "react-input-mask";

const InputText = ( props ) => {
    const {
        label,
        placeholder,
        require,
        multiline,
        rows,
        value = "",
        onChange,
        type = "",
        error,
        isEmail,
    } = props;

    return (
        <Box pb={ "24px" }>
            <Typography>
                { label }
                <span
                    style={ {
                        color: "red",
                        fontSize: "14px",
                        fontFamily: "Poppins",
                    } }
                >
                    { require ? " *" : "" }
                </span>
            </Typography>
            { type === "phone" ? (
                <InputMask
                    mask="999-999-9999"
                    onChange={ ( e ) => onChange( e.target.value ) }
                    value={ value }
                    style={ {
                        color: "black",
                        height: "40px",
                        background: "white",
                    } }
                    fullWidth={ true }
                >
                    <TextField
                        id="outlined-error"
                        inputProps={ {
                            style: {
                                height: "40px !important",
                            },
                        } }
                        fullWidth={ true }
                        placeholder={ placeholder }
                    />
                </InputMask>
            ) : (
                <TextField
                    error={ error }
                    id="outlined-error"
                    value={ value }
                    onChange={ ( e ) => onChange( e.target.value ) }
                    placeholder={ placeholder }
                    inputProps={ {
                        style: {
                            height: "40px !important",
                            width: "100%",
                            background: "white",
                        },
                    } }
                    fullWidth={ true }
                    multiline={ multiline }
                    rows={ rows }
                    style={ {
                        background: "white",
                    } }
                    xs={ {
                        display: "block !important",
                        width: "100%",
                    } }
                    sm={ {
                        display: "inline-flex",
                        width: "100%",
                    } }
                />
            ) }

            <div>
                { error && (
                    <span

                        style={ {
                            color: "red",
                            fontSize: "12px",
                        } }
                    >
                        { isEmail ? "Email is inValid" : "This is field required" }
                    </span>
                ) }
            </div>
        </Box>
    );
};

export default InputText;
