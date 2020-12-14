import React, { useEffect, useState } from "react";
import Image from "next/image";
import Nav from "../components/nav";
import Canvas from "../components/Canvas";
import RecentPostArticle from "../components/RecentPostArticle";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import firebase from "../firebase/clientApp";
import parse from "html-react-parser";
import styles from "../styles/postContent.module.css";

export default function IndexPage() {
  const router = useRouter();
  const pathname = router.query.slug;
  const [exist, setExist] = useState(true);
  const [loading, setLoading] = useState(true);
  const [postDetail, setPostDetail] = useState({});
  useEffect(() => {
    // console.log(window.location.href);
    if (pathname) {
      const db = firebase.firestore();
      const ref = db.collection("posts").doc(pathname).get();
      ref.then((snap) => {
        if (!snap.exists) setExist(false);
        else setPostDetail(snap.data());
        setLoading(false);
      });
    }
  }, [pathname]);
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Nav />
        <h1 className="flex-1">Page is loading...</h1>
        <Footer />
      </div>
    );
  }
  if (!exist) {
    return (
      <div>
        <Nav />
        <h1>Page Not Found</h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <div className="px-2 md:px-10 lg:px-20 gap-10 flex-1 max-w-5xl mx-auto">
        <div className="bg-white  my-14  px-3 sm:px-5 md:px-10 py-10 col-span-3 rounded">
          <h1 className={styles.title}>{postDetail.title}</h1>
          <div className=" border-t-2 border-b-2 border-black">
            <div className="grid grid-cols-3 py-2 max-w-md text-center mx-auto">
              <p>Nov 20, 2020</p>
              <p>Gaurav Thakur</p>
              <p>No Comments</p>
            </div>
          </div>
          <div className={styles.content}>{parse(postDetail.body)}</div>
        </div>
        <div className="py-5 bg-white px-2 md:px-10  mb-20">
          <h2 className="text-2xl font-semibold py-5">Related Articles</h2>
          <div className="grid grid-cols-2 gap-10">
            <RecentPostArticle />
            <RecentPostArticle />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
