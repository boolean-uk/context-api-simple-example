import { useContext } from "react";
import { PostsContext } from "../App";

export default function Header({ appName }) {
  const context = useContext(PostsContext);
  return <h1>{context.appName}</h1>;
}
