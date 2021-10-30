import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
import HomeScreen from "./screen/HomeScreen";
import NewUser from "./screen/NewUser";
import Appointment from "./screen/Appointment";
import Impfstopff from "./screen/Impfstoff";
import NewPatient from "./screen/NewPatient";
import ListAppointments from "./screen/ListAppointments";
import ListPatients from "./screen/ListPatients";
import ListImpfstoffe from "./screen/ListImpfstoffe";
import ListUsers from "./screen/ListUsers";
import Navigation from "./component/Navigation";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route path="/" component={HomeScreen} exact/>
        <Route path="/newuser" component={NewUser} exact/>
        <Route path="/appointment" component={Appointment} exact/>
        <Route path="/impfstoff" component={Impfstopff} exact/>
        <Route path="/newpatient" component={NewPatient} exact/>
        <Route path="/listappointments" component={ListAppointments} exact/>
        <Route path="/listpatients" component={ListPatients} exact/>
        <Route path="/listimpfstoffe" component={ListImpfstoffe} exact/>
        <Route path="/listusers" component={ListUsers} exact/>
       
        <Route path="/login" component={LoginScreen} exact/>
      
      </Router>
    </div>
  );
}

export default App;
