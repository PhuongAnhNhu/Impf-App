import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, FormControl, TextField, FormGroup, Button, CircularProgress } from '@mui/material';
import { login } from '../reducers/users';
import { RootState } from '../store';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    let history = useHistory();

    const onSubmit = useCallback(() => {
        dispatch(login({ username, password }));
    }, [username, password]);

    const usersState = useSelector((state: RootState) => state.usersState);
    const { loading, loggedIn } = usersState;

    useEffect(() => {
        if (loggedIn) {
            history.push('/');
        }
    }, [loggedIn]);

    return (
        <Box mt={20}>
            <FormGroup>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {loading && <CircularProgress size={100}/>}
                {!loggedIn && (
                        <Box>
                            <img src="/logo.png" width="100" alt="logo"></img>
                            <h2>Impf-App</h2>
                        </Box>
                )}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <FormControl fullWidth variant="standard">
                            <TextField label="Username" value={username} onChange={e => setUsername(e.target.value)} />
                        </FormControl>

                        <FormControl fullWidth variant="standard">
                            <TextField label="Password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
                        </FormControl>
                    </Box>
                    <Box mt={5}>
                        <Button onClick={onSubmit} variant="outlined">
                            Login
                        </Button>
                    </Box>
                </Box>
            </FormGroup>
        </Box>
    );
};

export default LoginScreen;
