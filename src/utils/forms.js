
export const getFormData = ( form ) => {
    const formData = new FormData( form );
    const data = {};

    for ( let pair of formData.entries() ) {
        const [ name, value ] = pair;

        if ( name.indexOf( "[]" ) !== -1 ) {
            const key = name.replace( "[]", "" );

            if ( !data[ key ] ) {
                data[ key ] = [];
            }

            data[ key ].push( value );
        } else {
            data[ name ] = value;
        }
    }

    return data;
};