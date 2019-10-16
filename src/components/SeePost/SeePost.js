import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./../../assets/img/loader.gif";

const SeePost = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://my-json-server.typicode.com/bahruzaydinli/jsonplaceholder/posts/${id}`
      );
      setLoading(false);
      res.json().then(res => {
        setPost(res);
        setLoading(false);
        document.title =
          res.title.charAt(0).toUpperCase() +
          res.title.substring(1, 15) +
          "...";
      });
    }
    fetchData();
  }, []);

  return isLoading ? (
    <div className="loaderHolder">
      <img alt="_just loader" src={Loader} />
    </div>
  ) : (
    <div className="b-post">
      <h3>
        {post.title
          ? post.title.charAt(0).toUpperCase() + post.title.substring(1)
          : post.title}
      </h3>
      <p>{post.body}</p>
    </div>
  );
};

export default SeePost;
