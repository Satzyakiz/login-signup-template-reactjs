import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Localstorage: " + localStorage.getItem("loggedIn"))
  }, [])

  const handleClick = async () => {
    console.log(username);
    console.log(password);
    var error = false;
    if (username.length == 0) {
      setUsernameErr("Please enter a username");
      error = true;
    }
    if (password.length < 8) {
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
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
      body: body
    })
      .then((response) => response.json())
      .then(data => data.data)
      .catch((err) => {
        console.log("error is " + err);
        console.log(err.stack)
      });
    console.log("Returned value is " + ret);
    setIsLoading(false);
    
    if(ret.length){
        localStorage.setItem("loggedIn", "yes");
        navigate("/landing");
    }else{
        setPasswordErr("Please enter a valid username and password");
    }
    
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
