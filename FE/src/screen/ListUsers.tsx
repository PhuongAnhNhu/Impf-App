import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Table, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Button, Link, InputBase } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { getUserList } from '../reducers/users';
import { RootState } from '../store';

export interface User {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    isAdmin: number;
}

const ListUsers = () => {

    const users : User[] = useSelector((state: RootState) => state.users.users.collection)

    let data = users.map((user, index) => {
        return (
            <TableRow hover key={user.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell><InputBase defaultValue={user.firstname} inputProps={{'aria-label':'user.nachname'}} /></TableCell>
                <TableCell><InputBase defaultValue={user.lastname} inputProps={{'aria-label':'user.vorname'}} /></TableCell>
                <TableCell><InputBase defaultValue={user.username} inputProps={{'aria-label':'user.userName'}} /></TableCell>
                <TableCell><InputBase defaultValue={user.isAdmin} inputProps={{'aria-label':'user.password'}} /></TableCell>
                <TableCell><Button>Speichern</Button></TableCell>
                <TableCell><Button><DeleteIcon/></Button></TableCell>
            </TableRow>
        );
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserList());
    },[dispatch])

    return (
        <Box mr={2}>
            <h2>Terminliste</h2>

            <Link href="/newuser">
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
                    <TableBody>{data}</TableBody>
                </Table>
            </TableContainer>
    
        </Box>
    );
};

export default ListUsers;
