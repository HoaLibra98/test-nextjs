import { Box } from '@mui/material';
import '@pqina/pintura/pintura.css';
import { selectorMediasImage } from '@slices/media';
import { useSelector } from 'react-redux';
import { ImageOrFileIcon } from './CheckFileOrImage';

const ViewImage = () => {

    const imageUrl = useSelector( selectorMediasImage );

    return (
        <Box sx={ { height: '600px', position: "relative" } }>
            <ImageOrFileIcon src={ imageUrl } alt="picture" />
        </Box>
    );
};

export default ViewImage;