import {
  LOG_IN_SUCCESS,
  LOG_IN_FAIL,
  SET_USER_POLICY_DETAILS,
} from "../actions/api";

const apiState = {
  authenticated: false,
  token: null,
  userPolicyDetails: null,
};

const apiReducer = (state = apiState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return { ...state, authenticated: true, token: action.payload };
    case LOG_IN_FAIL:
      return { ...state, authenticated: false, token: null };
    case SET_USER_POLICY_DETAILS:
      return { ...state, userPolicyDetails: action.payload };
    default:
      return state;
  }
};

export default apiReducer;
