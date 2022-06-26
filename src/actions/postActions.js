import { FETCH_POST, NEW_POST } from "./index";

export const fetchPosts = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: FETCH_POST,
          payload: data,
        })
      );
  };
};

export const addPost = (state) => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(state),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((res) =>
        dispatch({
          type: NEW_POST,
          payload: res,
        })
      );
  };
};
