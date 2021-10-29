import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, FormControl, FormLabel, Input, InputLabel, Button, Checkbox, FormControlLabel } from '@mui/material';
import { postUser } from '../reducers/users';

const NewUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');

    let dispatch = useDispatch();

    const onSubmit = useCallback(() => {
        dispatch(postUser({ username, password, isAdmin, firstname, lastname }));
    }, [username, password, isAdmin, firstname, lastname]);

    return (
        <Box mt={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Box sx={{ width: '75%' }}>
                <FormControl fullWidth margin="normal">
                    <FormLabel component="legend">Neuer Benutzer</FormLabel>

                    <FormControl margin="dense">
                        <InputLabel htmlFor="Vorname">Vorname</InputLabel>
                        <Input
                            id="Vorname"
                            aria-describedby="my-helper-text"
                            value={firstname}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </FormControl>

                    <FormControl margin="dense">
                        <InputLabel htmlFor="Nachname">Nachname</InputLabel>
                        <Input
                            id="Nachname"
                            aria-describedby="my-helper-text"
                            value={lastname}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </FormControl>

                    <FormControl margin="dense">
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input
                            id="username"
                            aria-describedby="my-helper-text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </FormControl>

                    <FormControl margin="dense">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            id="password"
                            aria-describedby="my-helper-text"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </FormControl>

                    <FormControlLabel control={<Checkbox checked={isAdmin} onChange={e => setIsAdmin(e.target.checked)} name="gilad" />} label="Admin" />

                    <Button onClick={onSubmit} sx={{ marginTop: '2rem' }} variant="outlined">
                        Speichern
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
};

export default NewUser;
