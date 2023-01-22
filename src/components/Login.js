import React, { useState, useEffect } from "react";
import Input from "./Input";
import CustomButton from "./Button";
import "../css/login.css";
import { baseURL, login } from "../routes";

const Login = (props) => {
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    console.log(username);
    console.log(password);
    var error = false;
    if (username.length == 0) {
      setUsernameErr("Please enter a username");
      error = true;
    }
    if (password.legnth < 8) {
      setPasswordErr("Please enter a valid password");
      error = true;
    }
    setIsLoading(true);
    if (error) {
      setIsLoading(false);
      return;
    }
    var obj = {}
    obj.username = username;
    obj.password = password;
    const body = JSON.stringify(obj);
    console.log("Body is " + body + " Type is " + typeof body);
    var ret = await fetch(baseURL + login, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      body: body
    })
      .then((response) => response.json())
      .then(data => data.data)
      .catch((err) => {
        console.log("error is " + err);
        console.log(err.stack)
      });
    setIsLoading(false);
    console.log(ret);
  };
  return (
    <div className="loginMainDiv">
      <Input
        type="input"
        label="Username"
        errorText={usernameErr}
        onChange={setUsername}
      />
      <Input
        type="password"
        label="Password"
        errorText={passwordErr}
        onChange={setPassword}
      />
      <CustomButton
        isLoading={isLoading}
        variant="dark"
        btnText="Login"
        style={styles.btnStyle}
        btnDivStyle={styles.btnDivStyle}
        onClick={handleClick}
      />
    </div>
  );
};
const styles = {
  inputField: {
    marginBottom: "5px",
  },
  inputDivStyle: {
    justifyContent: "center",
    width: "60vw",
  },
  btnStyle: {
    background: "green",
    width: "30%",
    margin: "10px",
  },
  btnDivStyle: {
    display: "flex",
    justifyContent: "center",
  },
};
export default Login;
