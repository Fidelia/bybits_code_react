import axios from "axios";
import { CookieStorage } from "cookie-storage";
import { setError, setLoading } from "./status";

export const LOG_IN_SUCCESS = "LOGIN_SUCCESS";
export const LOG_IN_FAIL = "LOG_IN_FAIL";

const API_URL = "https://api.bybits.co.uk";

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/token`,
      {
        username,
        password,
        type: "USER_PASSWORD_AUTH",
      },
      {
        headers: {
          environment: "mock",
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);
    const { access_token, refresh_token } = response.data;

    const cookieStorage = new CookieStorage();
    cookieStorage.setItem("refresh_token", refresh_token);

    dispatch({ type: LOG_IN_SUCCESS, payload: access_token });
    dispatch(getPolicyDetails(access_token));
  } catch (err) {
    console.log(err);
    dispatch({ type: LOG_IN_FAIL });
    dispatch(setError("oops... login failed"));
  }
};

export const getPolicyDetails = (token) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`${API_URL}/auth/token`, {
      headers: {
        environment: "mock",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log({ policy: response.data });
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(setLoading(false));
  }
};
