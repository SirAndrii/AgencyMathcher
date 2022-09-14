import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import "../styles/globals.css";
import {ThemeProvider} from "@mui/material";
import lightTheme from "../styles/theme/lightTheme";

import createEmotionCache from "../styles/theme/createEmotionCache";
import {CacheProvider} from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp({
                                  Component,
                                  emotionCache = clientSideEmotionCache,
                                  pageProps,
                              }) {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={lightTheme}>
                <Layout>
                    <Header/>
                    <Component {...pageProps}/>
                </Layout>
            </ThemeProvider>
        </CacheProvider>
    )
}