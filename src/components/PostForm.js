import React, { Component } from "react";
import { addPost } from "../actions/postActions";
import {connect } from "react-redux"

 class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addPost(this.state);
    this.setState({ title: "", body: "" });
  }
  render() {
    return (
      <div>
        <h2>Add Post</h2>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div>
            <label> Title: </label> <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label> Body: </label> <br />
            <textarea
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <br />

          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}


export default connect(null, {addPost})(PostForm)