import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export const PopupContent = ( { inputs } ) => {
    return <Box>{ inputs }</Box>;
};

PopupContent.propTypes = {
    inputs: PropTypes.string
};