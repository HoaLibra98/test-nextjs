import { Box } from '@mui/material';
import { getEditorDefaults } from '@pqina/pintura';
import '@pqina/pintura/pintura.css';
import { PinturaEditor } from '@pqina/react-pintura';
import { selectorMediasImage } from '@slices/media';
import { useSelector } from 'react-redux';

const EditImage = () => {

    const imageUrl = useSelector( selectorMediasImage );
    const editorConfig = getEditorDefaults();

    const handleImageEditor = ( imageEditor ) => {
        // console.log( URL.createObjectURL( imageEditor.dest ) );
    };

    return (
        <Box sx={ { height: '600px' } }>
            <PinturaEditor
                { ...editorConfig }
                src={ imageUrl }
                onProcess={ handleImageEditor }
            ></PinturaEditor>
        </Box>
    );
};

export default EditImage;