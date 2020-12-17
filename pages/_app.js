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
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hi, welcome to my personal blog. I am a college student and a javascript enthusiast. In this blog, I'll share my knowledge related to various tech stack."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Gaurav's Blog</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
