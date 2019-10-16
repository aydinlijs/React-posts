import React, { useEffect } from "react";
import Post from "./../Post/Post";
import Loader from "./../../assets/img/loader.gif";

const Posts = props => {
  useEffect(() => {
    document.title = "Posts";
  });

  return props.data.length === 0 ? (
    <div className="loaderHolder">
      <img alt="_just loader" src={Loader} />
    </div>
  ) : (
    <div className="b-posts">
      {props.data.map(p => (
        <Post key={p.id} data={p} />
      ))}
    </div>
  );
};

export default Posts;
