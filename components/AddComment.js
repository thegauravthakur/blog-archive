import React, {useState} from 'react';

export function AddComment() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <form>
        <input
          required
          type="text"
          // value={name}
          // onChange={(event) => setName(event.target.value)}
          className=" text-gray-200 w-full py-2 px-2 my-3  rounded-xl focus:outline-none ring-gray-700 focus:ring-red-600 dark:focus:ring-blue-600 ring-1 focus:ring-1 dark:bg-deepDarkGray"
          placeholder="Full Name"
        />
        <input
          required
          type="email"
          // value={email}
          // onChange={(event) => setEmail(event.target.value)}
          className="text-gray-200 dark:bg-deepDarkGray  text-gray-200 w-full py-2 px-2 my-3  rounded-xl focus:outline-none ring-gray-700  ring-1 ring-gray-700 focus:ring-red-600 dark:focus:ring-blue-600 focus:ring-1 dark:bg-deepDarkGray"
          placeholder="Email Address"
        />
        <textarea
          required
          // value={message}
          // onChange={(event) => setMessage(event.target.value)}
          className="h-40 bg-gray-100 w-full py-2 px-2 my-3  rounded-xl focus:outline-none ring-1 dark:bg-deepDarkGray text-gray-200 ring-gray-700 focus:ring-red-600 dark:focus:ring-blue-600 focus:ring-1"
          placeholder="Enter your message"
        />
        <button
          type="submit"
          className="px-5 py-2 text-white rounded-md focus:outline-none hover:bg-blue-600 bg-blue-500 transform hover:-translate-y-1 duration-300 hover:scale-100 "
        >
          <div className="flex justify-evenly align-middle">
            {/*{loading ? <div className="lds-dual-ring" /> : null}*/}
            <div>Submit</div>
          </div>
        </button>
      </form>
    </div>
  );
}
