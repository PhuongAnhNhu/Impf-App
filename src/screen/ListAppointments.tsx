import React from 'react';
import appointments from '../dummydata/appointments';
import moment from 'moment';
import { Box, Table, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody } from '@mui/material';

const ListAppointment = ({ vorname, nachname, versicherungsnummer, datum, artz }: ListAppointmentsProps) => {
    let data = appointments.map((appointment, index) => {
        return (
            <TableRow hover key={appointment.impfterminId}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{appointment.nachname}</TableCell>
                <TableCell>{appointment.vorname}</TableCell>
                <TableCell>{appointment.versicherungsnummer}</TableCell>
                <TableCell>{moment.unix(Number(appointment.datum)).format('DD-MM-YYYY')}</TableCell>
                <TableCell>{moment.unix(Number(appointment.datum)).format('HH:mm')}</TableCell>
                <TableCell>{appointment.arzt}</TableCell>
            </TableRow>
        );
    });

    return (
        <Box mr={2}>
            <h2>Terminliste</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
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

export default ListAppointment;
