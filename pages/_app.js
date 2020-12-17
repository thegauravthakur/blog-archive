import { useEffect } from "react";
import "../styles/index.css";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "../styles/npprogress.css";
import { RecoilRoot } from "recoil";
import Head from "next/head";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
