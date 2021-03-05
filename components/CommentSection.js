import { useEffect } from "react";
import app from "../firebase/clientApp";
import { formattedDate } from "../lib/formattedDate";

function Comment({ avatar, name, time, comment }) {
  return (
    <div className="dark:text-gray-300 ring-1 ring-red-600 dark:ring-gray-600 py-5 px-5 mt-10 rounded">
      <div className="flex">
        <img
          className="w-12 h-12 rounded-full object-cover"
          alt={""}
          src={avatar}
        />
        <div className="ml-5">
          <p className="font-semibold text-lg">{name}</p>
          <p className="text-gray-400">{formattedDate(time)}</p>
        </div>
      </div>
      <p className="mt-5">{comment}</p>
    </div>
  );
}

export function CommentSection({ comments, setComments, id }) {
  useEffect(() => {
    const getData = async () => {
      const data = await app.firestore().collection("comments").doc(id).get();
      if (data.exists) {
        setComments(data.data().comment ? data.data().comment : []);
      }
    };
    getData().then();
  }, []);
  return (
    <div className="mb-5">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          time={comment.time}
          name={comment.name}
          avatar={`https://avatars.dicebear.com/api/bottts/${comment.id}.svg`}
          comment={comment.comment}
        />
      ))}
    </div>
  );
}
