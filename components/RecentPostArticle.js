import React from "react";
import Image from "next/image";

const RecentPostArticle = () => {
  return (
    <div className="pb-5">
      <img
        src={
          "https://picsum.photos/700/400/?random&t=" + new Date().getTime() + ""
        }
        width={700}
        height={400}
        alt={""}
      />
      <h2 className="col-span-2">Best JavaScript Framework to Learn in 2021</h2>
    </div>
  );
};

export default RecentPostArticle;
