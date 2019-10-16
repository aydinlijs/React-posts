import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import View from "./../../assets/img/view.svg";

const Post = props => {
  return (
    <div className="b-post">
      <h3>
        {props.data.title.charAt(0).toUpperCase() +
          props.data.title.substring(1)}
      </h3>
      <p>{props.data.body.slice(0, 150)}</p>
      <Link to={`${props.data.id}/details`}>
        <img alt="_just view" src={View} />
      </Link>
    </div>
  );
};

export default Post;
