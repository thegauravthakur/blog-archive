function Comment({ avatar, name, time, comment }) {
  return (
    <div className="dark:text-gray-300 ring-1 ring-red-600 dark:ring-gray-600 py-5 px-5 mt-10 rounded">
      <div className="flex">
        <img
          className="w-12 h-12 rounded-full object-cover"
          alt={""}
          src={avatar}
        />
        <div className="ml-8">
          <p className="font-semibold text-lg">{name}</p>
          <p>{time}</p>
        </div>
      </div>
      <p className="mt-5">{comment}</p>
    </div>
  );
}

export function CommentSection() {
  return (
    <div className="mb-5">
      <Comment
        time="24th March, 2020"
        name="Gaurav Thakur"
        avatar="https://www.gravatar.com/avatar/5dab5059b885ef758fdd8f1b724d6434"
        comment={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem delectus deserunt doloremque eaque ex explicabo impedit ipsa iste nesciunt nostrum numquam omnis placeat qui quidem rerum, similique temporibus, ut veritatis vero. Ad culpa earum et facilis laudantium nemo officia perferendis placeat quaerat quibusdam quis quod recusandae velit, veniam vero!"
        }
      />
      <Comment
        time="24th March, 2020"
        name="Gaurav Thakur"
        avatar="https://www.gravatar.com/avatar/5dab5059b885ef758fdd8f1b724d6434"
        comment={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem delectus deserunt doloremque eaque ex explicabo impedit ipsa iste nesciunt nostrum numquam omnis placeat qui quidem rerum, similique temporibus, ut veritatis vero. Ad culpa earum et facilis laudantium nemo officia perferendis placeat quaerat quibusdam quis quod recusandae velit, veniam vero!"
        }
      />
      <Comment
        time="24th March, 2020"
        name="Gaurav Thakur"
        avatar="https://www.gravatar.com/avatar/5dab5059b885ef758fdd8f1b724d6434"
        comment={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem delectus deserunt doloremque eaque ex explicabo impedit ipsa iste nesciunt nostrum numquam omnis placeat qui quidem rerum, similique temporibus, ut veritatis vero. Ad culpa earum et facilis laudantium nemo officia perferendis placeat quaerat quibusdam quis quod recusandae velit, veniam vero!"
        }
      />
      <Comment
        time="24th March, 2020"
        name="Gaurav Thakur"
        avatar="https://www.gravatar.com/avatar/5dab5059b885ef758fdd8f1b724d6434"
        comment={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem delectus deserunt doloremque eaque ex explicabo impedit ipsa iste nesciunt nostrum numquam omnis placeat qui quidem rerum, similique temporibus, ut veritatis vero. Ad culpa earum et facilis laudantium nemo officia perferendis placeat quaerat quibusdam quis quod recusandae velit, veniam vero!"
        }
      />
    </div>
  );
}
