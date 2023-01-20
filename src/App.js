import "./App.css";

import React, { Component, useState, useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function App() {
  const [key, setKey] = useState('login');

  return (
    <div className="App">
      <div className="mainComponentApp">
        <Tabs
          id="controlled-tab"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="myClass"
          justify
        >
          <Tab eventKey="login" title="Login" tabClassName="LoginTab">
            <Login />
          </Tab>
          <Tab eventKey="signup" title="Signup" tabClassName="SignupTab">
            <Signup />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;

const styles = {
  tabComponent: {
    color: "red",
  },
};
