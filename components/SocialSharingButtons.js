import React, { useState } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { MdContentCopy } from "react-icons/md";

const SocialSharingButtons = ({ postDetail }) => {
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const onCopyHandler = () => {
    const dummy = document.createElement("input"),
      text = window.location.href;
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    setShowCopyMessage(true);
    return setTimeout(() => setShowCopyMessage(false), 1000);
  };
  return (
    <div>
      <div>
        <h3 className="mb-5 font-semibold text-lg dark:text-gray-300">
          Sharing is Caring ❤
        </h3>
        <div className="grid grid-cols-4 gap-0.5 md:gap-5  max-w-xl">
          <button
            style={{ backgroundColor: "#3B5998" }}
            className="py-1"
            onClick={() =>
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                "_blank",
                "location=yes,  scrollbars=yes, status=yes, width=900, height=500 "
              )
            }
          >
            <TiSocialFacebook color={"white"} size={25} className={"mx-auto"} />
          </button>
          <button
            onClick={() =>
              window.open(
                `https://twitter.com/intent/tweet?text=${postDetail.title} via @gauravcodes&url=${window.location.href}`,
                "_blank",
                "location=yes,  scrollbars=yes, status=yes, width=900, height=500 "
              )
            }
            style={{ backgroundColor: "#1DA1F2" }}
            className="py-1"
          >
            <AiOutlineTwitter color={"white"} size={22} className={"mx-auto"} />
          </button>
          <button
            onClick={() =>
              window.open(
                `https://api.whatsapp.com/send?text=${window.location.href}`,
                "_blank",
                "location=yes,  scrollbars=yes, status=yes, width=900, height=500 "
              )
            }
            style={{ backgroundColor: "#1FB457" }}
            className="py-1"
          >
            <RiWhatsappFill color={"white"} size={18} className={"mx-auto"} />
          </button>
          <button
            onClick={onCopyHandler}
            style={{ backgroundColor: "#323B43" }}
            className="py-1 w-full h-full "
          >
            <MdContentCopy color={"white"} size={18} className={"mx-auto"} />
          </button>
          {showCopyMessage ? (
            <div className="z-20 fixed bottom-10 md:bottom-20 right-5 md:right-10 bg-red-600 text-white px-5 py-2 rounded-md animate-bounce">
              <p>Url Copied</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SocialSharingButtons;
