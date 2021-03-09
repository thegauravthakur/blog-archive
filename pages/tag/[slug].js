import Nav from "../../components/nav";
import React, { Fragment, useState } from "react";
import RecentPostArticle from "../../components/RecentPostArticle";
import Footer from "../../components/Footer";
import firebase from "../../firebase/clientApp";
import TagCanvas from "../../components/TagCanvas";
import DefaultErrorPage from "next/error";

export default function IndexPage({ posts, errorCode }) {
  const [loading, setLoading] = useState(true);
  if (errorCode !== 200) return <DefaultErrorPage statusCode={errorCode} />;
  return (
    <Fragment>
      <div className="flex min-h-screen flex-col">
        <Nav />
        <div className="lg:grid lg:grid-cols-4 px-2 md:px-10 lg:px-20 gap-10 flex-1 mt-16 md:mt-20 md:mb-6 max-w-10xl mx-auto">
          {errorCode === 200 ? (
            <TagCanvas
              posts={posts}
              loading={loading}
              setLoading={setLoading}
            />
          ) : (
            <p>No article found with such error code</p>
          )}
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
  let errorCode = 200;
  const { res } = context;
  const { slug } = context.query;
  const db = firebase.firestore();
  const usersReference = await db.collection("posts").get();
  const temp = [];
  usersReference.forEach((userDoc) => {
    const userDocData = userDoc.data();
    let { lastUpdated } = userDocData;
    if (userDocData.tag?.main === slug) {
      temp.push({ ...userDocData, lastUpdated: lastUpdated.toString() });
    } else
      userDocData.tag?.others.forEach((tag) => {
        if (tag === slug)
          temp.push({ ...userDocData, lastUpdated: lastUpdated.toString() });
      });
    // if (userDocData.tag?.others.forEach((tag) => {
    //   if (tag === slug)
    // }) {
    //   temp.push({ ...userDocData, lastUpdated: lastUpdated.toString() });
    // }
  });
  if (temp.length === 0) {
    res.statusCode = 404;
    errorCode = 404;
  }

  return { props: { posts: temp, errorCode } };
}
