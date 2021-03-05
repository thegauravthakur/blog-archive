import React, { useState, useEffect } from "react";
import app from "../firebase/clientApp";
import { ImSpinner3 } from "react-icons/im";
import { uuidv4 } from "../lib/uuid";
import { BiReset } from "react-icons/bi";

export function AddComment({ id, comments, setComments }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [captchaVal, setCaptchaVal] = useState("");
  const [captcha, setCaptcha] = useState({
    q: "",
    a: [],
    correct: false,
  });
  const getData = async () => {
    const res = await fetch("/api/captcha");
    const { data } = await res.json();
    setCaptcha({ ...data, correct: false });
  };
  useEffect(() => {
    getData().then();
  }, []);

  const checkCaptcha = async () => {
    const rawResponse = await fetch("/api/checkAnswer", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answer: captcha.a, input: captchaVal }),
    });
    return await rawResponse.json();
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { correct } = await checkCaptcha();
    if (correct) {
      setLoading(true);
      const temp = [
        { name, email, comment, time: Date.now(), id: uuidv4() },
        ...comments,
      ];
      setEmail("");
      setComment("");
      setName("");
      setCaptchaVal("");
      await app
        .firestore()
        .collection("comments")
        .doc(id)
        .set({ comment: temp })
        .then(() => setComments(temp));
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          required
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className=" text-gray-200 w-full py-2 px-2 my-3  rounded-xl focus:outline-none ring-gray-700 focus:ring-red-600 dark:focus:ring-blue-600 ring-1 focus:ring-1 dark:bg-deepDarkGray"
          placeholder="Full Name"
        />
        <input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="text-gray-200 dark:bg-deepDarkGray  text-gray-200 w-full py-2 px-2 my-3  rounded-xl focus:outline-none ring-gray-700  ring-1 ring-gray-700 focus:ring-red-600 dark:focus:ring-blue-600 focus:ring-1 dark:bg-deepDarkGray"
          placeholder="Email Address"
        />
        <div className="flex items-center">
          <p className="text-gray-400 pl-2">Q: {captcha.q}</p>
          <BiReset
            onClick={() => getData()}
            className="text-2xl text-gray-500 ml-5 cursor-pointer hover:text-gray-600 transition duration-200"
          />
        </div>
        <input
          required
          type="text"
          value={captchaVal}
          onChange={(event) => setCaptchaVal(event.target.value)}
          className="text-gray-200 dark:bg-deepDarkGray  text-gray-200 w-full py-2 px-2 my-3  rounded-xl focus:outline-none ring-gray-700  ring-1 ring-gray-700 focus:ring-red-600 dark:focus:ring-blue-600 focus:ring-1 dark:bg-deepDarkGray"
          placeholder="Enter the answer here"
        />
        <textarea
          required
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          className="h-40 bg-gray-100 w-full py-2 px-2 my-3  rounded-xl focus:outline-none ring-1 dark:bg-deepDarkGray text-gray-200 ring-gray-700 focus:ring-red-600 dark:focus:ring-blue-600 focus:ring-1"
          placeholder="Enter your message"
        />
        <button
          type={"submit"}
          className="px-5 py-2 text-white rounded-md focus:outline-none hover:bg-blue-600 bg-blue-500 transform hover:-translate-y-1 duration-300 hover:scale-100 "
        >
          <div className="flex justify-evenly align-middle">
            {loading ? (
              <ImSpinner3 className="self-center mr-2 animate-spin" />
            ) : null}
            <div>Submit</div>
          </div>
        </button>
      </form>
    </div>
  );
}
