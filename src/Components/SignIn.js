import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { signIn, isAuthenticated } from "../auth/auth";
import Base from "./Base";

const Signin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const onChangeHandel = (name) => (event) => {
    if (name === "Username") {
      setUser(event.target.value);
    } else if (name === "Password") {
      setPassword(event.target.value);
    }
    setError(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (signIn(user, password)) {
      setUser("");
      setPassword("");
      setError(false);
    } else {
      setError(true);
    }
  };

  const ErrorMessage = () => {
    if (error) {
      toast.error("Wrong Username or Password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const onRedirect = () => {
    if (isAuthenticated()) {
      if (isAuthenticated().role === 0) {
        return <Redirect to="/colchart" />;
      } else if (isAuthenticated().role === 1) {
        return <Redirect to="/piechart" />;
      }
    }
  };
  return (
    <Base>
      <div className="main">
        <p className="sign" align="center">
          Sign in
        </p>
        <form className="form1">
          <input
            className="un "
            type="text"
            align="center"
            placeholder="Username"
            value={user}
            onChange={onChangeHandel("Username")}
          />
          <input
            className="pass"
            type="password"
            align="center"
            placeholder="Password"
            value={password}
            onChange={onChangeHandel("Password")}
          />
          <button onClick={onSubmit} className="submit" align="center">
            Sign in
          </button>
        </form>
        <p>
          {/* {user} {password} {error ? "true" : "false"}{" "} */}
          {/* {JSON.stringify(isAuthenticated())} */}
        </p>
      </div>
      {onRedirect()}
      {ErrorMessage()}
      <ToastContainer />
    </Base>
  );
};

export default Signin;
