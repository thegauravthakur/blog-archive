import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import lightTheme from "../styles/editor-styles-light";
import darkTheme from "../styles/editor-styles-dark";

const CodeSection = ({ lan, dark, domNode }) => {
  const body = domNode.children[0].children[0].data;
  const [hover, setHover] = useState(false);
  const [text, setText] = useState("copy");
  const onClickHandler = () => {
    onCopyHandler();
    setText("copied!");
    setTimeout(() => setText("copy"), 3000);
  };
  const onCopyHandler = () => {
    const dummy = document.createElement("input"),
      text = body;
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  };
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ position: "relative" }}
    >
      <button
        style={{
          visibility: hover ? "visible" : "hidden",
          border: dark ? "1px solid #EF4444" : "1px solid #3B82F6",
        }}
        className="absolute right-4 top-2 text-sm px-2 pt-1 pb-2 rounded-md dark:bg-deepDarkGray bg-gray-300 focus:outline-none"
        onClick={onClickHandler}
      >
        {text}
      </button>
      <div className="grid grid-cols-1">
        <SyntaxHighlighter
          className="w-full  break-words"
          style={dark ? lightTheme : darkTheme}
          language={lan}
        >
          {body}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSection;
