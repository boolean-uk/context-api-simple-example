import { useState, useContext, useEffect } from "react";
import { PostsContext } from "../App";

const INITIAL_POST = {
  title: "",
  content: "",
};

export default function CreatePost() {
  const [post, setPost] = useState(INITIAL_POST);
  const context = useContext(PostsContext);

  useEffect(() => {
    // On first load, check if there's any saved data in localStorage
    const savedPost = localStorage.getItem("draftPost");
    if (savedPost) {
      setPost(JSON.parse(savedPost));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
    localStorage.setItem(
      "draftPost",
      JSON.stringify({ ...post, [name]: value })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    context.setPosts([...context.posts, post]);
    localStorage.removeItem("draftPost");
    setPost(INITIAL_POST);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={post.title}
        ></input>
      </label>
      <br />
      <label>
        Content:
        <textarea
          name="content"
          onChange={handleChange}
          value={post.content}
          cols={50}
          rows={5}
        ></textarea>
      </label>
      <br />
      <input type="submit" value="Post!"></input>
    </form>
  );
}
