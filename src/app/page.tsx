import Post from "@/components/Post";
import { getPostsHaveAuthorInfo } from "@/helpers";
import { PostI } from "@/types";

async function Index() {
  const posts = await getPostsHaveAuthorInfo();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <main className="mx-auto max-w-4xl py-4">
      <h1 className="font-bold text-xl">MAQE Forum</h1>
      <p className="mt-4">Your current timezone is: {timezone}</p>

      <div className="flex flex-col mt-3 gap-4">
        {posts.map((post: PostI, index: number) => {
          return <Post data={post} key={post.id} isOdd={index % 2 === 1} />;
        })}
      </div>
    </main>
  );
}

export default Index;
