import React from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import DashBoardPage from "./components/DashBoardPage";
import EmployeeList from "./components/EmployeeList";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/" component={DashBoardPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/employee" component={EmployeeList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
