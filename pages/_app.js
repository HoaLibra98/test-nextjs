import { DisplayPopup } from "@components/Popup";
import axiosClient from "@configs/axios";
import { wrapper } from "@configs/store";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { selectorAuthUser } from "@slices/auth";
import { setFrontBlocks } from "@slices/block";
import { selectorCustomizer } from "@slices/customizer";
import { selectorLoading, setCloseLoading, setOpenLoading } from "@slices/loading";
import { setThemeFrontend } from "@slices/menu";
import RTL from "@theme/RTL";
import ThemeSettings from "@theme/ThemeSettings";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import createEmotionCache from "../src/createEmotionCache";
import "../styles/style.scss";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp( props ) {

    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const Gettheme = ThemeSettings();
    const customizer = useSelector( selectorCustomizer );
    const loading = useSelector( selectorLoading );


    useEffect( () => {
        document.body.className = pageProps.bodyClass ? pageProps.bodyClass : document.body.className;
    } );

    const dispatch = useDispatch();

    if ( typeof window && loading.first === true ) {
        setTimeout( () => dispatch( setCloseLoading() ), 3000 );
    }

    const router = useRouter();

    useEffect( () => {
        const handleStart = ( url ) => {
            if ( router.asPath !== url ) dispatch( setOpenLoading() );
        };
        const handleComplete = ( url ) => {
            if ( router.asPath === url ) dispatch( setCloseLoading() );
        };

        router.events.on( 'routeChangeStart', handleStart );
        router.events.on( 'routeChangeComplete', handleComplete );
        router.events.on( 'routeChangeError', handleComplete );

        return () => {
            router.events.off( 'routeChangeStart', handleStart );
            router.events.off( 'routeChangeComplete', handleComplete );
            router.events.off( 'routeChangeError', handleComplete );
        };
    }, [ dispatch, router ] );

    const user = useSelector( selectorAuthUser );

    // Get all blocks
    useEffect( () => {
        const fetchBlock = async () => {
            const [ getBlock, getMenus ] = await Promise.all( [
                axiosClient.get( '@/blocks', { params: { front: true } } ),
                axiosClient.get( '@/menutypes/getMenus' ),
            ] );

            if ( getBlock.success === true && getMenus.success === true ) {
                dispatch( setFrontBlocks( getBlock.data ) );
                dispatch( setThemeFrontend( getMenus.data ) );
            }
        };

        try {
            fetchBlock();
        } catch ( error ) {

        }

    }, [ dispatch ] );

    return (
        <CacheProvider value={ emotionCache }>
            <Head>
                <title>{ pageProps.titlePage ? pageProps.titlePage : "Hani Cake" }</title>
                <meta name='viewport' content='initial-scale=1, width=device-width' />
                <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
            </Head>
            <ThemeProvider theme={ Gettheme }>
                <RTL direction={ customizer.activeDir }>
                    <CssBaseline />
                    <SessionProvider session={ pageProps.session }>
                        <Component { ...pageProps } user={ user } />
                        <DisplayPopup />
                    </SessionProvider>
                </RTL>
            </ThemeProvider>
        </CacheProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux( MyApp );
