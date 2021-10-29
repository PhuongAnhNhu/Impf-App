import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, FormControl, TextField, FormGroup, Button } from '@mui/material';
import { login } from '../reducers/users';
import { RootState } from '../store';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    let history = useHistory();

    const onSubmit = useCallback(() => {
        dispatch(login({ username, password }));
    }, [dispatch, username, password]);

    const usersState = useSelector((state: RootState) => state.users);
    const { loading, loggedIn } = usersState;

    useEffect(() => {
        if (loggedIn) {
            history.push('/');
        }
    }, [history, loggedIn]);

    return (
        <FormGroup>
            {loading && <div>LoadingComponent</div>}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} mt={30}>
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
    );
};

export default LoginScreen;
