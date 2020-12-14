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
    return <h1>Page is Loading...</h1>;
  }
  if (!exist) {
    return <h1>Page Not Found</h1>;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="lg:grid lg:grid-cols-4 px-2 md:px-10 lg:px-20 gap-10 flex-1">
        <div className="bg-white  my-14  px-5 md:px-10 py-10 col-span-3 rounded">
          <h1 className="font-bold text-4xl">{postDetail.title}</h1>
          <div className={styles.content}>{parse(postDetail.body)}</div>
        </div>
        <div className="rounded">
          <div className="bg-white my-14 md:px-5 py-10 ">
            <h1 className="text-xl pb-5 font-semibold text-center lg:text-left">
              Recent Posts
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 lg:gap-0 px-3 lg:px-0">
              <RecentPostArticle />
              <RecentPostArticle />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
