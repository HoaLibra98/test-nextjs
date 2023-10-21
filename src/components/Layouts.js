import { AppBar, Box, experimentalStyled, Toolbar, Typography } from '@mui/material';
import { ColorStyles } from '@theme/Designs';

export const MainWrapper = ( { children, ...props } ) => {
    const Main = experimentalStyled( 'div' )( ( { theme } ) => ( {
        minHeight: '100vh',
        overflow: 'hidden',
        width: '100%',
        margin: 'auto',
        ...props
    } ) );
    return <Main id="admin">{ children }</Main>;
};

export const PageWrapper = ( { children, ...props } ) => {
    const MainPage = experimentalStyled( 'div' )( ( { theme } ) => ( {
        overflow: 'hidden',
        height: 'fit-content',
        [ theme.breakpoints.up( 'lg' ) ]: {
            width: '100%'
        },
        [ theme.breakpoints.down( 'lg' ) ]: {
            width: "100%"
        },
        ...props
    } ) );
    return <MainPage id="content">{ children }</MainPage>;
};
export const WrapperAdmin = ( { children, ...props } ) => {
    const MainPage = experimentalStyled( 'div' )( ( { theme } ) => ( {
        overflow: 'hidden',
        height: 'fit-content',
        backgroundColor: ColorStyles.Foundation.Neutral[ 400 ],
        [ theme.breakpoints.up( 'lg' ) ]: {
            width: '100%'
        },
        [ theme.breakpoints.down( 'lg' ) ]: {
            width: "100%"
        },
        ...props
    } ) );
    return <MainPage className="content-admin">{ children }</MainPage>;
};
export const BlockMenuTop = ( { children, ...props } ) => {
    const BlockMenu = experimentalStyled( "div" )( ( { theme } ) => ( {
        ...props
    } ) );
    return <BlockMenu>{ children }</BlockMenu>;
};

export const BlockAppBar = ( { children, ...props } ) => {
    return <AppBar elevation={ 0 } { ...props }>
        <Toolbar className='main-menu-toolbar'>
            { children }
        </Toolbar>
    </AppBar>;
};
export const TitleLayout = ( { children, ...props } ) => {
    const Titlepage = experimentalStyled( 'div' )( ( { theme } ) => ( {
        marginTop: "64px",
        [ theme.breakpoints.down( "md" ) ]: {
            marginTop: "32px",
        },
        ...props
    } ) );
    return <Titlepage >{ children }</Titlepage>;
};

export const ContentAccount = ( { children, ...props } ) => {
    const MainContent = experimentalStyled( 'div' )( ( { theme } ) => ( {
        padding: "44px 32px",
        marginLeft: "32px",
        marginBottom: "64px",
        backgroundColor: ColorStyles.Foundation.Neutral[ 200 ],
        [ theme.breakpoints.down( "lg" ) ]: {
            padding: "32px 16px",
            marginLeft: "0px",
            marginBottom: '64px',
        },
        ...props
    } ) );
    return <MainContent >{ children }</MainContent>;
};

export const TabPanel = ( { children, value, index, ...other } ) => {

    return (
        <Box
            role="tabpanel"
            hidden={ value !== index }
            id={ `vertical-tabpanel-${ index }` }
            aria-labelledby={ `vertical-tab-${ index }` }
            { ...other }
            style={ { width: '100%' } }
        >
            { value === index && (
                <Box sx={ { padding: '0 0 0 24px' } }>
                    <Typography variant="heading">{ children }</Typography>
                </Box>
            ) }
        </Box>
    );

};