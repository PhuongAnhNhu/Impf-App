import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import DropDown from '../component/DropDown';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import user from '../dummydata/user';
import MenuItem from '@mui/material/MenuItem';

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
                                Impf App
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
                            <Link href="/impfstoff" color="inherit" underline="none">
                                Impfstoff
                            </Link>
                        </Button>
                        {/* TODO: Nur für Admin */}
                        {/* <Nav.Link href="/admin/newuser">Neuer Benutzer</Nav.Link> */}
                        {/* </Container>
                        </Navbar> */}
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
