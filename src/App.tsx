import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
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
      <BrowserRouter>
      <Navigation />
        
        <Route path="/login" component={LoginScreen} />
        <Route path="/" component={HomeScreen} exact/>
        <Route path="/newuser" component={NewUser}/>
        <Route path="/appointment" component={Appointment}/>
        <Route path="/impfstoff" component={Impfstopff}/>
        <Route path="/newpatient" component={NewPatient}/>
        <Route path="/listappointments" component={ListAppointments}/>
        <Route path="/listpatients" component={ListPatients}/>
        <Route path="/listimpfstoffe" component={ListImpfstoffe}/>
        <Route path="/listusers" component={ListUsers}/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
