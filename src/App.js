import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/login" component={Login}></Route>
          <Route></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
