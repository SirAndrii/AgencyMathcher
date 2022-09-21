import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import "../styles/globals.css";
import {Box, ThemeProvider} from "@mui/material";
import lightTheme from "../styles/theme/aclippTheme";

import createEmotionCache from "../styles/theme/createEmotionCache";
import {CacheProvider} from "@emotion/react";
import Footer from "../components/layout/Footer";

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

                        <Component  {...pageProps}/>

                    <Footer/>
                </Layout>
            </ThemeProvider>
        </CacheProvider>
    )
}