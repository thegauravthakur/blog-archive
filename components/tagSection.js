import { useRouter } from "next/router";

function TagWidget({ name }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/tag/${name}`)}
      className="ring-red-600 dark:ring-blue-600 ring-1 max-w-max py-1 px-3 rounded-xl ring-offset-transparent text-sm cursor-pointer hover:bg-red-600 hover:text-gray-50 dark:hover:text-gray-300 dark:hover:bg-blue-600 transition duration-300"
    >
      {name}
    </div>
  );
}

export function TagSection({ posts }) {
  const tagsArray = [];
  const tags = new Set();
  posts.forEach((post) => {
    const { tag } = post;
    tags.add(tag.main);
    tag.others.forEach((other) => tags.add(other));
  });
  tags.forEach((tag) => tagsArray.push(tag));
  return (
    <div className="bg-white dark:bg-deepDarkGray p-5 dark:text-gray-300 rounded-lg max-w-md mb-14 mx-auto">
      <p className="text-xl pb-5 font-semibold text-center lg:text-left dark:text-gray-300">
        Tags
      </p>
      <div className="flex gap-3 flex-wrap">
        {tagsArray.map((tag) => (
          <TagWidget name={tag} />
        ))}
      </div>
    </div>
  );
}
