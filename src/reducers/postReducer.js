import { FETCH_POST, NEW_POST } from "../actions/index";
const initialState = {
  items: [],
  item: {},
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST: {
      return {
        ...state,
        items: action.payload,
      };
    }
    case NEW_POST: {
      return {
        ...state,
        items: state.items.concat(action.payload),
      };
    }
    default:
      return state;
  }
};

export default postReducer;
