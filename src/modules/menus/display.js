import { CustomMenuItem } from '@components/ConfigMenu/CustomMenuItem';
import useGetMenu from '@hooks/useGetMenu';
import { Box, MenuList, Typography, experimentalStyled } from '@mui/material';
import { ColorStyles, TextStyles } from '@theme/Designs';
import S from 'string';

const FooterMenus = experimentalStyled( Box )( ( { theme } ) => ( {
    '.list-menu-footer': {
        padding: 0,
        '.menuItem-desktop': {
            padding: 0,
            marginBottom: 10,
            '.menu-link': {
                a: {
                    '&:hover': {
                        span: {
                            color: ColorStyles.accent[ 500 ],
                        },
                    },
                },
            },
        },
        '.menuItem-mobile': {
            marginBottom: 4,
            '.menu-link': {
                padding: 0,
                borderTop: 'unset'
            },
        },
    },
    '.dealership-services-horizone': {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        flexWrap: 'wrap',
        '.MuiListItem-root': {
            width: 'auto',
            marginBottom: 0
        },
        '.menu-link': {
            gap: 0,
            span: {
                ...TextStyles.textMd.medium,
                color: ColorStyles.gray[ 200 ],
            }
        },
    },
    '.dealership-services-vertical': {

    },
    '.quick-links-horizone': {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        flexWrap: 'wrap',
        '.MuiListItem-root': {
            width: 'auto',
            marginBottom: 0
        },
        '.menu-link': {
            gap: 0,
            span: {
                ...TextStyles.textMd.medium,
                color: ColorStyles.gray[ 200 ],
            }
        },
    },
    '.quick-links-vertical': {

    },
    '.footer-menu-horizone': {
        display: 'flex',
        padding: 0,
        gap: 16,
        '.menuItem-desktop': {
            margin: 0
        }
    },
    '.footer-menu-vertical': {
        display: 'flex',
        flexDirection: 'column',
    }
} ) );

const DealershipServices = ( { module, options } ) => {

    const [ menus ] = useGetMenu( module.data.menutype );
    if ( menus && menus.length === 0 ) return;

    const className = `list-menu-footer ${ S( module.data.title ).slugify().s }-${ module.data.type }`;

    if ( options.warraper && typeof options.warraper === 'function' ) {
        return options.warraper(
            <FooterMenus>
                { !module.data.is_hidden && <Typography variant="subtitle6" paragraph>{ module.data.title }</Typography> }
                <MenuList className={ className }>
                    {
                        menus.map( ( menu, index ) => (
                            <CustomMenuItem key={ `footer-submenu-${ index }` } menu={ menu } type={ module.data.type } attributes={ {
                                menuItemText: {
                                    variant: module.data.type === 'horizone' ? 'text1' : 'footer'
                                }
                            } } />
                        ) )
                    }
                </MenuList>
            </FooterMenus>
        );
    }

    return (
        <FooterMenus>
            { !module.data.is_hidden && <Typography variant="subtitle6" paragraph>{ module.data.title }</Typography> }
            <MenuList className={ className }>
                {
                    menus.map( ( menu, index ) => (
                        <CustomMenuItem key={ `footer-submenu-${ index }` } menu={ menu } type={ module.data.type } attributes={ {
                            menuItemText: {
                                variant: module.data.type === 'horizone' ? 'text1' : 'footer'
                            }
                        } } />
                    ) )
                }
            </MenuList>
        </FooterMenus>
    );
};

export default DealershipServices;
