import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Box, FormControl, FormLabel, Input, InputLabel, Button, Checkbox, FormControlLabel } from '@mui/material';
import { RootState } from '../store';
import { putUser } from '../reducers/users';

interface EditUserProps {
    id: number;
}

const EditUser = ({ id }: EditUserProps) => {
    const users: User[] = useSelector((state: RootState) => state.usersState.users);

    const user: User = users.find(element => id === element.id);

    const dispatch = useDispatch();

    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState('');
    const [admin, setIsAdmin] = useState(user.isAdmin);
    const [firstname, setFirstName] = useState(user.firstname);
    const [lastname, setLastName] = useState(user.lastname);


    const saveHandler = () => {
        const isAdmin = Boolean(admin);
        dispatch(putUser({id,username, password, isAdmin, firstname, lastname}))
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Box sx={{ width: '75%' }}>
                <FormControl fullWidth margin="normal">
                    <FormLabel component="legend">Bear Benutzer</FormLabel>

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

                    <FormControlLabel
                        control={<Checkbox checked={Boolean(admin)} onChange={e => setIsAdmin(e.target.checked ? 1 : 0)} name="gilad" />}
                        label="Admin"
                    />

                    <Button onClick={saveHandler} sx={{ marginTop: '2rem' }} variant="outlined">
                        Speichern
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
};

export default EditUser;
