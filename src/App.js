import Post from "./components/Post";
import React, { Component } from "react";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import store from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <header>
            <h1>REDUX CLASS-BASED</h1>
          </header>
          <PostForm />
          <hr />
          <Post />
        </div>
      </Provider>
    );
  }
}
