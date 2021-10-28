import React from 'react';
import { Box, FormControl, InputLabel, Input, InputAdornment, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
export interface LoginScreenProps {
    username?: string;
    password: string;
}

const LoginScreen = ({ username, password }: LoginScreenProps) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} mt={30}>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        type="password"
                        startAdornment={
                            <InputAdornment position="start">
                                <PasswordIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Box>
            <Box mt={5}>
                <Button variant="outlined">Login</Button>
            </Box>
        </Box>
    );
};

export default LoginScreen;
