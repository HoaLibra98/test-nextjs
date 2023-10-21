function _descendingComparator( a, b, orderBy ) {
    if ( b[ orderBy ] < a[ orderBy ] ) {
        return -1;
    }
    if ( b[ orderBy ] > a[ orderBy ] ) {
        return 1;
    }
    return 0;
}

export function stableSort( array, cmp ) {
    const stabilizedThis = array.map( ( el, index ) => [ el, index ] );
    stabilizedThis.sort( ( a, b ) => {
        const order = cmp( a[ 0 ], b[ 0 ] );
        if ( order !== 0 ) return order;
        return a[ 1 ] - b[ 1 ];
    } );

    return stabilizedThis.map( el => el[ 0 ] );
}

export function getComparator( order, orderBy ) {
    return order === 'desc'
        ? ( a, b ) => _descendingComparator( a, b, orderBy )
        : ( a, b ) => -_descendingComparator( a, b, orderBy );
}