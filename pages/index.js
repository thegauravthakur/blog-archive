import Nav from "../components/nav";
import React, { useState } from "react";
import Canvas from "../components/Canvas";
import Image from "next/image";
import RecentPostArticle from "../components/RecentPostArticle";
import Footer from "../components/Footer";

export default function IndexPage() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <div className="lg:grid lg:grid-cols-4 px-2 md:px-10 lg:px-20 gap-10 flex-1">
        <Canvas loading={loading} setLoading={setLoading} />
        {!loading ? (
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
        ) : null}
      </div>
      <Footer />
    </div>
  );
}
