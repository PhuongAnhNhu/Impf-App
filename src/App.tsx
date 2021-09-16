import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" component={LoginScreen} />
      </Router>
    </div>
  );
}

export default App;
