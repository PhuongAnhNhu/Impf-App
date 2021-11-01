import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import user from '../dummydata/user';
import DropDown from './DropDown';
import { AppBar, Toolbar, Box, Button, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { logout } from '../reducers/users';
import { RootState } from '../store';

const Navigation = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const logoutHandler = () => {
        dispatch(logout());
    };

    const usersState = useSelector((state: RootState) => state.usersState);
    const { loggedIn } = usersState;

    useEffect(() => {
        if (!loggedIn) {
            history.push('/login');
        }
    }, [loggedIn]);

    return (
        <Box>
            {loggedIn && (
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

                            {user.admin && (
                                <Button color="inherit">
                                    <Link to="/listusers">Userlist</Link>
                                </Button>
                            )}
                        </Box>
                        <Box>
                            <DropDown name={user.name}>
                                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                            </DropDown>
                        </Box>
                    </Toolbar>
                </AppBar>
            )}
        </Box>
    );
};

export default Navigation;
