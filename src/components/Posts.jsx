import { useContext } from "react";
import { PostsContext } from "../App";

export default function Posts() {
  const context = useContext(PostsContext);
  return (
    <>
      {context.posts.map((post) => {
        return (
          <div className="card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        );
      })}
    </>
  );
}
