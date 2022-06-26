import React, { Component, lagacy_componentWillReceiveProps } from "react";
import { fetchPosts } from "../actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Post extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.post.map((post) => {
      return (
        <div key={post.id}>
          <h3> {post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    });
    return <div>{postItems}</div>;
  }
}

Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  post: PropTypes.array.isRequired,
//   nextProps: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    post: state.post.items,
    // newPost: state.post.item,
  };
};

export default connect(mapStateToProps, { fetchPosts })(Post);
