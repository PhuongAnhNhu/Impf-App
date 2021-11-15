import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { Box, FormControl, FormLabel, Input, InputLabel, Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { postUser } from '../reducers/users';

const NewUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');

    let dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = useCallback(() => {
        dispatch(postUser({ username, password, isAdmin, firstname, lastname }));
        history.push('/listusers');
    }, [username, password, isAdmin, firstname, lastname]);

    return (
        <Box mt={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Box sx={{ width: '75%' }}>
                <FormControl fullWidth margin="normal">
                    <FormLabel component="legend">Neuer Benutzer</FormLabel>

                    <FormControl margin="dense">
                        <TextField
                            required
                            variant="standard"
                            label="Vorname"
                            value={firstname}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </FormControl>

                    <FormControl margin="dense">
                        <TextField
                            required
                            variant="standard"
                            label="Nachname"
                            value={lastname}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </FormControl>

                    <FormControl margin="dense">
                        <TextField
                            required
                            variant="standard"
                            label="Username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </FormControl>

                    <FormControl margin="dense">
                        <TextField
                            required
                            variant="standard"
                            label="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            helperText="Passwort muss mindestens 8 Zeichen sein."
                        />
                    </FormControl>

                    <FormControlLabel
                        control={<Checkbox checked={isAdmin} onChange={e => setIsAdmin(e.target.checked)} name="gilad" />}
                        label="Admin"
                    />

                    <Button onClick={onSubmit} sx={{ marginTop: '2rem' }} variant="outlined">
                        Speichern
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
};

export default NewUser;
