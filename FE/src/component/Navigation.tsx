import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropDown from './DropDown';
import { AppBar, Toolbar, Box, Button, MenuItem } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import { logout, getProfile } from '../reducers/profile';
import { RootState } from '../store';

const Navigation = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const logoutHandler = () => {
        dispatch(logout());
    };

    const profile = useSelector((state: RootState) => state.profileState.profile);
    const isLoggedIn = useSelector((state: RootState) => state.profileState.isLoggedIn);

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    if (!isLoggedIn) {
        history.push('/login');
        return <></>;
    }

    return (
        <Box>
            <AppBar color="inherit">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Button component={Link} to="/" color="inherit">
                            <img src="/logo.png" width="50" alt="logo"></img>
                        </Button>
                        <Button component={Link} to="/appointment" color="inherit">
                            Neuer Termin
                        </Button>
                        <Button component={Link} to="/newpatient" color="inherit">
                            Neuer Patient
                        </Button>

                        <Button component={Link} to="/listappointments" color="inherit">
                            Terminliste
                        </Button>

                        <Button component={Link} to="/listpatients" color="inherit">
                            Patientsliste
                        </Button>
                        <Button component={Link} to="/listimpfstoffe" color="inherit">
                            Impfstoffliste
                        </Button>

                        {profile.isAdmin && (
                            <Button component={Link} to="/listusers" color="inherit">
                                Benutzliste
                            </Button>
                        )}
                    </Box>
                    <Box>
                        <DropDown name={`${profile.firstname} ${profile.lastname} `}>
                            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                        </DropDown>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
