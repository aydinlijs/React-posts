import React from "react";
import axios from "axios";
import "./AddPost.css";
import Loader from "./../../assets/img/loader.gif";

class AddPost extends React.Component {
  state = {
    title: "",
    body: "",
    errorText: "",
    valid: true,
    loading: false
  };

  postPost = async () => {
    let message = "";
    let bodyCheck = this.state.body.trim().length === 0;
    let titleCheck = this.state.title.trim().length === 0;
    let type = 2;
    if (!bodyCheck && !titleCheck) {
      this.setState({
        loading: true
      });
      await axios
        .post(
          "https://my-json-server.typicode.com/bahruzaydinli/jsonplaceholder/posts",
          {
            title: this.state.title,
            body: this.state.body
          }
        )
        .then(function(response) {
          message = "Post successfully added";
          type = 1;
        })
        .catch(function(error) {
          message = "Something wrong happened";
        });
    } else {
      if (bodyCheck && titleCheck) {
        message = "Please insert valid title and text content";
      } else if (titleCheck) {
        message = "Please insert valid post title content";
      } else if (bodyCheck) {
        message = "Please insert valid post text content";
      }
    }
    this.props.message(message, type);
    this.setState({
      title: "",
      body: "",
      loading: false
    });
  };

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  handleBodyChange = e => {
    this.setState({
      body: e.target.value
    });
  };

  componentDidMount() {
    document.title = "Add Post";
  }

  render() {
    return this.state.loading ? (
      <div className="loaderHolder">
        <img alt="_just loader" src={Loader} />
      </div>
    ) : (
      <div id="addPost">
        <h2 className="pageHeader">Add a new post</h2>
        <div className="b-form-field">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </div>
        <div className="b-form-field">
          <label htmlFor="text">Text</label>
          <textarea
            rows="9"
            id="text"
            value={this.state.body}
            onChange={this.handleBodyChange}
          ></textarea>
        </div>
        <button type="button" onClick={this.postPost}>
          Add
        </button>
      </div>
    );
  }
}

export default AddPost;
