import Image from "next/image";

function renderFileIcon( fileName ) {
    const name = fileName.substring( fileName.lastIndexOf( "/" ) + 1 );
    const fileExtension = name.split( '.' ).pop().toLowerCase();
    switch ( fileExtension ) {
        case 'pdf':
            return <Image
                src="/image/image-setting/pdf.svg"
                alt="" width={ 300 }
                height={ 300 }
                style={ { width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" } }
            />;
        case 'doc':
        case 'docx':
            return <Image
                src="/image/image-setting/doc.svg"
                alt=""
                width={ 300 }
                height={ 300 }
                style={ { width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" } }
            />;
        case 'xls':
        case 'xlsx':
            return <Image
                src="/image/image-setting/excel.svg"
                alt=""
                width={ 300 }
                height={ 300 }
                style={ { width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" } }
            />;
        default:
            return null;
    }
}

export function ImageOrFileIcon( { src, alt } ) {
    const isImage = /\.(gif|jpe?g|png|svg)$/i.test( src );
    const fileIcon = renderFileIcon( src );

    if ( isImage ) {
        return <Image
            src={ src }
            alt={ alt } width={ 609 }
            height={ 371 }
            sizes="(max-width: 768px) 100vw"
            style={ { width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" } }
        />;
    }

    if ( fileIcon ) {
        return fileIcon;
    }
    // Return null if the file type is not supported
    return null;
}
