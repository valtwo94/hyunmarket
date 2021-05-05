import '../styles/globals.css'
import Layout from "../components/layout/layout";
import React from "react";
import {Responsive, ResponsiveProvider} from "react-responsive-ssr";

function MyApp({Component, pageProps}) {


    return (
        <>
        <ResponsiveProvider value={pageProps.responsive}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ResponsiveProvider>
    </>)
}

export async function getInitialProps(context) {
    let responsive
    if (context.req) {
        responsive = new Responsive(context.req)
    }

    return {
        responsive
    }
}

export default MyApp
