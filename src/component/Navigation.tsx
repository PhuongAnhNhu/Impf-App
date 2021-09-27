import React from 'react';
import user from '../dummydata/user';
import DropDown from '../component/DropDown'
import { AppBar, Toolbar, Box, Button, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const logoutHandler = () => {
        // dispatch(logout());
        console.log('logout');
    };

    return (
        <Box mb={10}>
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
                            <Link to="/newpatient">
                                Neuer Patient
                            </Link>
                            </Button>
                            <Button color="inherit">
                                <Link to="/listpatients">
                                    Patientsliste
                                </Link>
                            </Button>
                       
                        <Button color="inherit">
                            <Link to="/listappointments">
                                Terminliste
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/listimpfstoffe">
                                Impfstoff
                            </Link>
                        </Button>

                        {user.login && user.admin && (
                            <Button color="inherit">
                                <Link to="/listusers">
                                    Userlist
                                </Link>
                            </Button>
                        )}
                    </Box>
                    <Box>
                        {user.login ? (
                            <DropDown name={user.name}>
                                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                            </DropDown>
                        ) : (
                            <Button color="inherit">
                                <Link to="/login">
                                    Login
                                </Link>
                            </Button> 
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
