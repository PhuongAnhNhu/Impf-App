import React from 'react';
import { Box, Table, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Button, InputBase } from '@mui/material';
import users from '../dummydata/users';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom';

const ListUsers = ({ vorname, nachname,userName,istAdmin, password }: ListUsersProps)  => {
    let data = users.map((user, index) => {
        return (
            <TableRow hover key={user.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell><InputBase defaultValue={user.nachname} inputProps={{'aria-label':'user.nachname'}} /></TableCell>
                <TableCell><InputBase defaultValue={user.vorname} inputProps={{'aria-label':'user.vorname'}} /></TableCell>
                <TableCell><InputBase defaultValue={user.userName} inputProps={{'aria-label':'user.userName'}} /></TableCell>
                <TableCell><InputBase defaultValue={user.password} inputProps={{'aria-label':'user.password'}} /></TableCell>
                <TableCell><InputBase defaultValue={user.istAdmin} inputProps={{'aria-label':'user.password'}} /></TableCell>
                <TableCell><Button>Speichern</Button></TableCell>
                <TableCell><Button><DeleteIcon/></Button></TableCell>
            </TableRow>
        );
    });
    return (
        <Box mr={2}>
            <h2>Terminliste</h2>

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
                            <TableCell>Password</TableCell>
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
