import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Nav from "../components/nav";
import Canvas from "../components/Canvas";
import RecentPostArticle from "../components/RecentPostArticle";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import firebase from "../firebase/clientApp";
import parse from "html-react-parser";
import styles from "../styles/postContent.module.css";
import { useRecoilState } from "recoil";
import { PostsState } from "../recoil/atom";
import RecentPostList from "../components/RecentPostList";
import NProgress from "nprogress";

export default function IndexPage() {
  const router = useRouter();
  const pathname = router.query.slug;
  const [exist, setExist] = useState(true);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [postDetail, setPostDetail] = useState({});
  const [posts, setPosts] = useRecoilState(PostsState);

  const imageRef = useRef();
  useEffect(() => {
    if (posts.length === 0) {
      NProgress.start();
      const db = firebase.firestore();
      const usersReference = db.collection("posts");
      usersReference.get().then((querySnapshot) => {
        const temp = [];
        querySnapshot.forEach((userDoc) => {
          const userDocData = userDoc.data();
          temp.push(userDocData);
        });
        setLoading2(false);
        NProgress.done();
        setPosts(temp.reverse());
      });
    } else {
      setLoading2(false);
    }
  }, []);
  useEffect(() => {
    // console.log(window.location.href);
    if (pathname) {
      NProgress.start();
      const db = firebase.firestore();
      const ref = db.collection("posts").doc(pathname).get();
      ref.then((snap) => {
        if (!snap.exists) setExist(false);
        else {
          setPostDetail(snap.data());
        }
        setLoading(false);
        NProgress.done();
      });
    }
  }, [pathname]);

  if (loading || loading2) {
    return (
      <div className="flex flex-col min-h-screen">
        <Nav />
        <div className="flex-1 mt-10 text-center ">
          <h1 className="">Page is loading...</h1>
        </div>
        <Footer />
      </div>
    );
  }
  if (!exist) {
    return (
      <div className="flex flex-col min-h-screen">
        <Nav />
        <div className="flex-1 mt-10 text-center ">
          <h1 className="">Page Not Fount</h1>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="px-2 md:px-10 lg:px-20 gap-10 flex-1 max-w-5xl mx-auto">
        <div className="bg-white  my-14  px-3 sm:px-5 md:px-10 py-10 col-span-3 rounded-lg">
          <h1 className={styles.title}>{postDetail.title}</h1>
          <div className=" border-t-2 border-b-2 border-black">
            <div className="grid grid-cols-3 py-2 max-w-md text-center mx-auto">
              <p>Nov 20, 2020</p>
              <p>Gaurav Thakur</p>
              <p>No Comments</p>
            </div>
          </div>
          <div className={styles.content}>
            {parse(postDetail.body, {
              replace: (domNode) => {
                if (domNode.name === "p") {
                  if (domNode.children[0].name === "img") {
                    return (
                      <div className="my-2">
                        <Image
                          width={2000}
                          height={1000}
                          {...domNode.children[0].attribs}
                        />
                      </div>
                    );
                  }
                }
              },
            })}
          </div>
        </div>
        <div className="py-5 bg-white px-2 md:px-10 mb-20 rounded-lg">
          <h2 className="text-2xl font-semibold py-5">Related Articles</h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-10">
            {posts.slice(0, 2).map((post) => (
              <RecentPostArticle key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
