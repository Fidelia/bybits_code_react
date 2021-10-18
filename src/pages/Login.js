import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { login } from "../store/actions/api";

function Login() {
  const dispatch = useDispatch();

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  function handleLogin() {
    console.log("login clicked", {
      username,
      password,
    });
    if (username.length > 0 && password.length > 0) {
      console.log("input is valid");
      dispatch(login(username, password));
    }
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div class="container">
      <h1>Sign In</h1>
      <div>
        <div class="form-group">
          <label for="inputUsername">User Name</label>
          <input
            name="username"
            type="text"
            class="form-control"
            placeholder="Enter username"
            onChange={handleUsernameChange}
          />
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input
            name="password"
            type="password"
            class="form-control"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </div>
        <br />
        <div class="loginButton">
          <button type="button" class="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect((state) => state.api)(Login);
