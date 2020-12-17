import Nav from "../components/nav";
import React, { Fragment, useState } from "react";
import Canvas from "../components/Canvas";
import RecentPostArticle from "../components/RecentPostArticle";
import Footer from "../components/Footer";
import firebase from "../firebase/clientApp";
import Head from "next/head";

export default function IndexPage({ posts }) {
  const [loading, setLoading] = useState(true);

  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="Hi, welcome to my personal blog. I am a college student and a javascript enthusiast. In this blog, I'll share my knowledge related to various tech stack."
        />
        <title>Gaurav's Blog</title>
      </Head>
      <div className="flex min-h-screen flex-col">
        <Nav />
        <div className="lg:grid lg:grid-cols-4 px-2 md:px-10 lg:px-20 gap-10 flex-1 mt-16 md:mt-20 md:mb-6">
          <Canvas posts={posts} loading={loading} setLoading={setLoading} />
          <div className="rounded-lg">
            <div className="bg-white my-14 md:px-5 py-10 rounded-lg dark:bg-deepDarkGray ">
              <h1 className="text-xl pb-5 font-semibold text-center lg:text-left dark:text-gray-300">
                Recent Posts
              </h1>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 lg:gap-0 px-3 lg:px-0 ">
                {posts.slice(0, 2).map((post) => (
                  <RecentPostArticle key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
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

  return { props: { posts: temp } };
}
