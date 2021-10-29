import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Table, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Button, InputBase } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { getUserList, deleteUser } from '../reducers/users';
import { RootState } from '../store';

const ListUsers = () => {
    const dispatch = useDispatch();

    const users: User[] = useSelector((state: RootState) => state.usersState.users);

    const deleteUserHandler = useCallback((id: number) => {
        console.log(id);
        dispatch(deleteUser({id}))
    },[]);


    useEffect(() => {
        dispatch(getUserList());
    }, []);

    return (
        <Box mr={2} mt={14}>
            <h2>Userliste</h2>

            <Link to="/newuser">
                <Button sx={{ marginBottom: '2rem' }} variant="outlined">
                    <AddIcon />
                    Neuer User
                </Button>
            </Link>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Vorname</TableCell>
                            <TableCell>Nachname</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Admin</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map((user, index) => {
                            return (
                                <TableRow hover key={user.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>
                                        <InputBase defaultValue={user.firstname} inputProps={{ 'aria-label': 'user.nachname' }} />
                                    </TableCell>
                                    <TableCell>
                                        <InputBase defaultValue={user.lastname} inputProps={{ 'aria-label': 'user.vorname' }} />
                                    </TableCell>
                                    <TableCell>
                                        <InputBase defaultValue={user.username} inputProps={{ 'aria-label': 'user.userName' }} />
                                    </TableCell>
                                    <TableCell>
                                        <InputBase defaultValue={user.isAdmin} inputProps={{ 'aria-label': 'user.password' }} />
                                    </TableCell>
                                    <TableCell>
                                        <Button>
                                            <SaveIcon />
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button onClick={e => deleteUserHandler(user.id)}>
                                            <DeleteIcon />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ListUsers;
