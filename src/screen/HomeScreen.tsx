import React from 'react';
import appointments from '../dummydata/appointments';
import moment from 'moment';
import { Box, Checkbox, Table, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody } from '@mui/material';

const HomeScreen = () => {
    let today = moment.unix(Date.now() / 1000).format('DD-MM-YYYY');

    let data = appointments.map((appointment, index) => {
        // Anzeige nur Termin für heute
        return (
            today === moment.unix(Number(appointment.datum)).format('DD-MM-YYYY') && (
                <TableRow key={appointment.impfterminId}>
                    {/* TODO: index */}
                    <TableCell>
                                <Checkbox></Checkbox>
                            </TableCell>
                    <TableCell>{appointment.nachname}</TableCell>
                    <TableCell>{appointment.vorname}</TableCell>
                    <TableCell>{appointment.versicherungsnummer}</TableCell>
                    <TableCell>{moment.unix(Number(appointment.datum)).format('DD-MM-YYYY')}</TableCell>
                    <TableCell>{moment.unix(Number(appointment.datum)).format('HH:mm')}</TableCell>
                    <TableCell>{appointment.arzt}</TableCell>
                </TableRow>
            )
        );
    });

    return (
        <Box mr={2}>
            <h1>Homepage</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Anwesenheit</TableCell>
                            <TableCell>Vorname</TableCell>
                            <TableCell>Nachname</TableCell>
                            <TableCell>Verischerungsnummer</TableCell>
                            <TableCell>Datum</TableCell>
                            <TableCell>Uhrzeit</TableCell>
                            <TableCell>Arzt</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{data}</TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default HomeScreen;
