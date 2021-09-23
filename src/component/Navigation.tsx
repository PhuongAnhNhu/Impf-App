import React from 'react';
import user from '../dummydata/user';
import DropDown from '../component/DropDown'
import { AppBar, Toolbar, Box, Button, Link, MenuItem } from '@mui/material';

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
                            <Link href="/" color="inherit" underline="none">
                                <img src="/logo.png" width="50" alt="logo"></img>
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link href="/appointment" color="inherit" underline="none">
                                Neuer Termin
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link href="/newpatient" color="inherit" underline="none">
                                Neuer Patient
                            </Link>
                            </Button>
                            <Button color="inherit">
                                <Link href="/listpatients" color="inherit" underline="none">
                                    Patientsliste
                                </Link>
                            </Button>
                       
                        <Button color="inherit">
                            <Link href="/listappointments" color="inherit" underline="none">
                                Terminliste
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link href="/listimpfstoffe" color="inherit" underline="none">
                                Impfstoff
                            </Link>
                        </Button>

                        {user.login && user.admin && (
                            <Button color="inherit">
                                <Link href="/listusers" color="inherit" underline="none">
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
                                <Link href="/login" color="inherit" underline="none">
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
