import React from "react";
import Posts from "./Posts/Posts";
import AddPost from "./AddPost/AddPost";
import SeePost from "./SeePost/SeePost";
import Toast from "./Toast/Toast";
import "./../assets/css/global.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  state = {
    posts: [],
    toastText: "",
    toastType: null
  };

  fetchData = () => {
    fetch(
      "https://my-json-server.typicode.com/bahruzaydinli/jsonplaceholder/posts"
    )
      .then(data => data.json())
      .then(data =>
        this.setState({
          posts: data
        })
      );
  };

  toastOut = () => {
    this.setState({
      toastText: ""
    });
  };

  toastShow = (text, type) => {
    this.setState({
      toastText: text,
      toastType: type
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <Router>
        <div className="menu">
          <div className="b-container">
            <nav>
              <ul>
                <li>
                  <Link to="/add-post">Add</Link>
                </li>
                <li>
                  <Link to="/">Posts</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="content">
          <div className="b-container">
            <Switch>
              <Route exact path="/">
                <Posts data={this.state.posts} />
              </Route>
              <Route path="/add-post">
                <AddPost message={this.toastShow} />
              </Route>
              <Route path="/:id/details" component={SeePost} />
            </Switch>
            <Toast
              toastOut={this.toastOut}
              toastText={this.state.toastText}
              toastType={this.state.toastType}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
