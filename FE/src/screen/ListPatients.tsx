import React from 'react';
import { Box, Table, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Button, Link, InputBase } from '@mui/material';
import patients from '../dummydata/patients';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


const ListPatients = () => {
    let data = patients.map((patient, index) => {
        return (
            <TableRow hover key={patient.versicherungsnummer}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                    <InputBase  sx={{
                            width: '5rem',
                            overflowWrap: 'break-word',
                        }} defaultValue={patient.vorname} inputProps={{ 'aria-label': 'patient.nachname' }} />
                </TableCell>
                <TableCell>
                    <InputBase defaultValue={patient.nachname} inputProps={{ 'aria-label': 'patient.vorname' }} />
                </TableCell>
                <TableCell>
                    <InputBase defaultValue={patient.versicherungsnummer} inputProps={{ 'aria-label': 'patient.patientName' }} />
                </TableCell>
                <TableCell>
                    <InputBase defaultValue={patient.kvNummer} inputProps={{ 'aria-label': 'patient.password' }} />
                </TableCell>
                <TableCell>
                    <InputBase defaultValue={patient.geschlecht} inputProps={{ 'aria-label': 'patient.password' }} />
                </TableCell>
                <TableCell>
                    <InputBase defaultValue={patient.gebDatum} inputProps={{ 'aria-label': 'patient.password' }} />
                </TableCell>
                <TableCell>
                    <InputBase
                        sx={{
                            width: '15rem',
                            overflowWrap: 'break-word',
                        }}
                        defaultValue={patient.adresse}
                        inputProps={{ 'aria-label': 'patient.password' }}
                    />
                </TableCell>
                <TableCell>
                    <Button>Speichern</Button>
                </TableCell>
                <TableCell>
                    <Button>
                        <DeleteIcon />
                    </Button>
                </TableCell>
            </TableRow>
        );
    });
    return (
        <Box mr={2}>
            <h2>Patientsliste</h2>
{/* TODO: Link must from react-router-dom */}
            <Link href="/newpatient">
                <Button sx={{ marginBottom: '2rem' }} variant="outlined">
                    <AddIcon />
                    Neuer Patient
                </Button>
            </Link>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Vorname</TableCell>
                            <TableCell>Nachname</TableCell>
                            <TableCell>Verischerungsnummer</TableCell>
                            <TableCell>kvNummer</TableCell>
                            <TableCell>Geschlecht</TableCell>
                            <TableCell>Geburtsdatum</TableCell>
                            <TableCell>Adresse</TableCell>
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

export default ListPatients;
