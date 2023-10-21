import { selectorMenuFrontend } from '@slices/menu';
import { useSelector } from 'react-redux';

function useGetMenu( menutype ) {
    const menutypes = useSelector( selectorMenuFrontend );
    const menuList = menutypes.filter( mt => mt.slug === menutype );
    const menus = menuList && menuList.length > 0 ? menuList[ 0 ].menus : [];
    return [ menus, menuList ];
}

export default useGetMenu;
