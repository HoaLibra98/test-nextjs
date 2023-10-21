import axiosClient from '@configs/axios';
import { ROWS_PER_PAGE_OPTION } from '@configs/constants';
import { useState } from 'react';

export const usePagination = ( paging, ajaxTable, setContents ) => {
    const [ count, setCount ] = useState( paging?.count );
    const [ limit, setLimit ] = useState( paging?.limit );
    const [ page, setPage ] = useState( paging?.page - 1 );

    const pagingAjax = async ( limit, page ) => {
        const res = await axiosClient.get( ajaxTable.url, {
            params: {
                ...ajaxTable.options.params,
                limit,
                page
            }
        } );
        const content = res.success === true ? res.data : {};
        setContents( content );
        setCount( res.paging.count );
    };

    const onRowsPerPageChange = ( newRowsPerPage ) => {
        setLimit( parseInt( newRowsPerPage ) );
        setPage( 0 );
        pagingAjax( parseInt( newRowsPerPage ), 0 );
    };

    const onPageChange = ( event, newPage ) => {
        setPage( parseInt( newPage ) );
        pagingAjax( limit, parseInt( newPage ) + 1 );
    };

    return {
        rowsPerPageOptions: ROWS_PER_PAGE_OPTION,
        rowsPerPage: limit,
        count,
        page,
        onPageChange,
        onRowsPerPageChange
    };
};