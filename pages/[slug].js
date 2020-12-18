import React, { Fragment, useState } from "react";
import Image from "next/image";
import Nav from "../components/nav";
import RecentPostArticle from "../components/RecentPostArticle";
import Footer from "../components/Footer";
import firebase from "../firebase/clientApp";
import parse from "html-react-parser";
import styles from "../styles/postContent.module.css";
import SocialSharingButtons from "../components/SocialSharingButtons";
import Head from "next/head";

export default function IndexPage({ postDetail, errorCode, posts }) {
  if (errorCode === 404) {
    return (
      <div className="flex flex-col min-h-screen">
        <Nav />
        <div className="flex-1 text-center mt-32">
          <h1 className="">Page Not Fount</h1>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <Fragment>
      <Head>
        <title>{postDetail.title}</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <div className="px-2 md:px-10 lg:px-20 gap-10 flex-1 max-w-5xl mx-auto mt-28">
          <div className="bg-white  mb-14  px-3 sm:px-5 md:px-10 py-10 col-span-3 rounded-lg dark:bg-deepDarkGray dark:text-gray-400">
            <h1 className="title">{postDetail.title}</h1>
            <div className="border-t-2 border-b-2 border-black dark:border-gray-500 dark:text-gray-400">
              <div className="grid grid-cols-3 py-2 max-w-md text-center mx-auto">
                <p>Nov 20, 2020</p>
                <p>Gaurav Thakur</p>
                <p>No Comments</p>
              </div>
            </div>
            <div className={styles.content}>
              {parse(postDetail.body, {
                replace: (domNode) => {
                  if (domNode.name === "h4") {
                    return (domNode.attribs.class = "h4");
                  }
                  if (domNode.name === "h2") {
                    return (domNode.attribs.class = "h2");
                  }
                  if (domNode.name === "p") {
                    const currentNode = domNode.children[0];
                    if (currentNode.name === "img") {
                      let heightCheck = false;
                      let widthCheck = false;
                      if ("width" in currentNode.attribs) widthCheck = true;
                      if ("height" in currentNode.attribs) heightCheck = true;
                      return (
                        <div className="my-2">
                          <Image
                            {...(!heightCheck && { height: 1000 })}
                            {...(!widthCheck && { width: 2000 })}
                            {...currentNode.attribs}
                          />
                        </div>
                      );
                    }
                  }
                },
              })}
            </div>
            <SocialSharingButtons postDetail={postDetail} />
          </div>
          <div className="py-5 bg-white dark:bg-deepDarkGray px-2 md:px-10 mb-14 md:mb-20 rounded-lg">
            <h2 className="text-2xl font-semibold py-5 dark:text-gray-300">
              Related Articles
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-10">
              {posts.slice(0, 2).map((post) => (
                <RecentPostArticle key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  let errorCode = 200;
  const { res } = context;
  const { slug } = context.query;
  res.statusCode = 200;
  const db = firebase.firestore();
  const usersReference = await db
    .collection("posts")
    .orderBy("lastUpdated", "desc")
    .get();
  const temp = [];
  usersReference.forEach((userDoc) => {
    const userDocData = userDoc.data();
    let { lastUpdated } = userDocData;
    temp.push({ ...userDocData, lastUpdated: lastUpdated.toString() });
  });

  const ref = await db.collection("posts").doc(slug).get();
  if (!ref.exists) {
    res.statusCode = 404;
    errorCode = 404;
    return {
      props: {
        posts: temp,
        postDetail: {},
        errorCode,
      },
    };
  } else
    return {
      props: {
        posts: temp,
        postDetail: {
          ...ref.data(),
          lastUpdated: ref.data().lastUpdated.toString(),
        },
        errorCode,
      },
    };
}
