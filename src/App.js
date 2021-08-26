import React, { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const [aboutStyle, setaboutStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [styl, setstyl] = useState({
    color: "black",
    textDecoration: "none",
  });

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setstyl({
        color: "white",
        textDecoration: "none",
      });
      setaboutStyle({
        color: "white",
        backgroundColor: "black",
      });
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark mode";
      setInterval(() => {
        document.title = "Hello everyone !";
      }, 2000);
      setInterval(() => {
        document.title = "It is a SPA";
      }, 1500);
    } else {
      setMode("light");
      setstyl({
        color: "black",
        textDecoration: "none",
      });
      setaboutStyle({
        color: "black",
        backgroundColor: "white",
      });
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light mode";
      setInterval(() => {
        document.title = "Hello everyone !";
      }, 2000);
      setInterval(() => {
        document.title = "It is a SPA";
      }, 1500);
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          style={styl}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About mode={mode} style={aboutStyle} />
          </Route>
          <Route exact path="/">
            <TextForm
              mode={mode}
              showAlert={showAlert}
              heading="Enter text to analyze."
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
