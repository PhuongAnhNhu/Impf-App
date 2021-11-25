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
                        <Button color="inherit">
                            <Link to="/">
                                <img src="/logo.png" width="50" alt="logo"></img>
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link style={{ textDecoration: 'none' }} to="/appointment">
                                Neuer Termin
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/newpatient">Neuer Patient</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/listpatients">Patientsliste</Link>
                        </Button>

                        <Button color="inherit">
                            <Link to="/listappointments">Terminliste</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/listimpfstoffe">Impfstoff</Link>
                        </Button>

                        {profile.isAdmin && (
                            <Button color="inherit">
                                <Link to="/listusers">Userlist</Link>
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
