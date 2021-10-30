import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    Table,
    Paper,
    TableRow,
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    Button,
    Dialog,
    DialogContent,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { getUserList, deleteUser} from '../reducers/users';
import { RootState } from '../store';
import EditUser from '../component/EditUser';

const ListUsers = () => {
    const dispatch = useDispatch();
    const users: User[] = useSelector((state: RootState) => state.usersState.users);
    
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleClickOpen = (id: number) => {
        setSelectedId(id);
    };

    const handleClose = () => {
        setSelectedId(null);
    };



    const deleteUserHandler = useCallback((id: number) => {
        dispatch(deleteUser({ id }));
    }, []);

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
                                        <p>{user.firstname} </p>
                                    </TableCell>
                                    <TableCell>
                                        <p>{user.lastname} </p>
                                    </TableCell>
                                    <TableCell>
                                        <p>{user.username} </p>
                                    </TableCell>
                                    <TableCell>
                                        <p>{user.isAdmin} </p>
                                    </TableCell>
                                    <TableCell>
                                        <Button onClick={e => handleClickOpen(user.id)}>
                                            <CreateIcon />
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

            {selectedId && (
                <Dialog open={Boolean(selectedId)} onClose={handleClose} fullWidth>
                    <DialogContent>
                        <EditUser id={selectedId} />
                    </DialogContent>
                </Dialog>
            )}
        </Box>
    );
};

export default ListUsers;
