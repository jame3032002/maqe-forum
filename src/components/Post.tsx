import Image from "next/image";

import { PostI } from "@/types";
import { changeDateTimeFormat } from "@/helpers";

const Post = (props: { data: PostI; isOdd: boolean }) => {
  const { isOdd } = props;
  const { title, body, image_url, created_at, author } = props.data;
  const createdAt = changeDateTimeFormat(created_at);

  return (
    <div
      className="border shadow"
      style={{ background: isOdd ? "#e2f3fd" : "#ffffff" }}
    >
      <div className="flex justify-start border-b gap-1 items-center py-2 px-4">
        <Image
          alt={author?.name || ""}
          src={author?.avatar_url || ""}
          width={24}
          height={24}
          className="rounded-full shadow-sm"
        />

        <span className="text-orange-400 text-xs font-bold">
          {author?.name}
        </span>
        <span className="text-xs text-gray-500">posted on {createdAt}</span>
      </div>

      <div className="flex p-4 gap-4 flex-col sm:flex-row">
        <div>
          <Image
            alt={author?.name || ""}
            src={image_url}
            width={320}
            height={240}
            className="w-full sm:w-[320px]"
          />
        </div>

        <div className="w-full flex flex-col gap-4">
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="text-sm">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
