import { SET_ERROR, SET_LOADING } from "../actions/status";

const appStatusState = {
  error: null,
  loading: false,
};

const statusReducer = (state = appStatusState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default statusReducer;
