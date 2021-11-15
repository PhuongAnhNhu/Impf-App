import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from './screen/LoginScreen';
import HomeScreen from './screen/HomeScreen';
import NewUser from './screen/NewUser';
import Appointment from './screen/Appointment';
import Impfstopff from './screen/Impfstoff';
import NewPatient from './screen/NewPatient';
import ListAppointments from './screen/ListAppointments';
import ListPatients from './screen/ListPatients';
import ListImpfstoffe from './screen/ListImpfstoffe';
import ListUsers from './screen/ListUsers';
import Navigation from './component/Navigation';
import ProtectedRoute from './component/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from './reducers/profile';
import { RootState } from './store';
import { CircularProgress } from '@mui/material';

function App() {
    const dispatch = useDispatch();
    const initialLoaded = useSelector((state: RootState) => state.profileState.initialLoaded);

    useEffect(() => {
        dispatch(getProfile());
    }, []);
    
    if (!initialLoaded) {
        return <CircularProgress size={40} />;
    }
    return (
        <div className="App">
            <Router>
                <Navigation />
                <ProtectedRoute path="/" exact>
                    <HomeScreen />
                </ProtectedRoute>
                <ProtectedRoute path="/newuser" exact>
                    <NewUser />
                </ProtectedRoute>
                <ProtectedRoute path="/appointment" exact>
                    <Appointment />
                </ProtectedRoute>
                <ProtectedRoute path="/impfstoff" exact>
                    <Impfstopff />
                </ProtectedRoute>
                <ProtectedRoute path="/newpatient" exact>
                    <NewPatient />
                </ProtectedRoute>
                <ProtectedRoute path="/listappointments" exact>
                    <ListAppointments />
                </ProtectedRoute>
                <ProtectedRoute path="/listpatients" exact>
                    <ListPatients />
                </ProtectedRoute>
                <ProtectedRoute path="/listimpfstoffe" exact>
                    <ListImpfstoffe />
                </ProtectedRoute>
                <ProtectedRoute path="/listusers" exact>
                    <ListUsers />
                </ProtectedRoute>

                <Route path="/login" component={LoginScreen} exact />
            </Router>
        </div>
    );
}

export default App;
