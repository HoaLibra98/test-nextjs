import GenerateInputs from '@components/Admin/Forms/GenerateInputs';
import useForm from '@hooks/useForm';
import PropTypes from 'prop-types';

export const PopupForm = ( { inputs } ) => {
    const { formRef, form, valid, handleChange, hanldeBlur } = useForm();

    return <GenerateInputs inputs={ inputs } values={ form } inputProps={ { onChange: handleChange, onBlur: hanldeBlur } } />;
};

PopupForm.propTypes = {
    inputs: PropTypes.array
};