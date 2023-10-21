import { Box } from "@mui/material";
import S from "string";

const Displayhtml = ( { module, options } ) => {

    if ( options.warraper && typeof options.warraper === 'function' ) {
        return options.warraper(
            <Box className={ `module-custom-html-${ S( module.data.title ).slugify().s }` } dangerouslySetInnerHTML={ { __html: module.data.description } } />
        );
    }

    return <Box className={ `module-custom-html-${ S( module.data.title ).slugify().s }` } sx={ { color: '#000' } } dangerouslySetInnerHTML={ { __html: module.data.description } } />;
};

export default Displayhtml;