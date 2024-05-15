import { AuthorI, PostI, newAuthorsFormatI } from "@/types";
import axios from "axios";

async function getPosts() {
  try {
    const response = await axios({
      method: "get",
      url: "https://maqe.github.io/json/posts.json",
    });

    return response.data;
  } catch (error) {
    return [];
  }
}

async function getAuthors() {
  try {
    const response = await axios({
      method: "get",
      url: "https://maqe.github.io/json/authors.json",
    });

    return response.data;
  } catch (error) {
    return [];
  }
}

async function getPostsHaveAuthorInfo() {
  try {
    const [posts, authors] = await Promise.all([getPosts(), getAuthors()]);
    const newAuthorsFormat = authors.reduce(
      (store: newAuthorsFormatI, author: AuthorI) => {
        store[author.id] = author;
        return store;
      },
      {}
    );

    const postsHaveAuthorInfo: PostI[] = posts.map((post: PostI) => {
      post.author = newAuthorsFormat[post.author_id];

      return post;
    });

    return postsHaveAuthorInfo;
  } catch (error) {
    return [];
  }
}

async function changeDateTimeFormat(value: Date) {
  const date = new Date(value);
  const createdAt = date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  });

  const [_, time] = date
    .toLocaleString("en-US", { hourCycle: "h23" })
    .split(", ");
  const timeWithoutSecond = time.slice(0, 5);

  return `${createdAt}, ${timeWithoutSecond}`;
}

export { getPosts, getAuthors, getPostsHaveAuthorInfo, changeDateTimeFormat };
