import React, { useEffect, useState } from 'react';
import { Box, Table, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Button, Dialog, DialogContent } from '@mui/material';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAppointment, getAppointments } from '../reducers/appointments';
import { RootState } from '../store';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import moment from 'moment';
import { getPatients } from '../reducers/patients';

const ListAppointment = () => {
    const dispatch = useDispatch();

    const appointments: Appointment[] = useSelector((state: RootState) => state.appointmentsState.appointments);
    const patients: Patient[] = useSelector((state: RootState) => state.patientsState.patients);

    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleClickOpen = (id: number) => {
        setSelectedId(id);
    };

    const handleClose = () => {
        setSelectedId(null);
    };

    const deleteHandler = (id: number) => {
        dispatch(deleteAppointment({id}));
    }

    useEffect(() => {
        dispatch(getAppointments());
        dispatch(getPatients());
    }, []);

    return (
        <Box mr={2} mt={10}>
            <h2>Terminliste</h2>
            <Link to="/appointment">
                <Button sx={{ marginBottom: '2rem' }} variant="outlined">
                    <AddIcon />
                    Neuer Termin
                </Button>
            </Link>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Vorname</TableCell>
                            <TableCell>Nachname</TableCell>
                            <TableCell>Verischerungsnummer</TableCell>
                            <TableCell>Datum</TableCell>
                            <TableCell>Uhrzeit</TableCell>
                            <TableCell>Bearbeiten</TableCell>
                            <TableCell>Löschen</TableCell>
                        </TableRow>
                    </TableHead>

                    {!!appointments.length && !!patients.length && (
                        <TableBody>
                            {appointments.map((appointment, index) => {
                                const patient: Patient = patients.find(element => Number(appointment.patient) === element.id);

                                return (
                                    <TableRow hover key={appointment.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{patient.firstname}</TableCell>
                                        <TableCell>{patient.lastname}</TableCell>
                                        <TableCell>{patient.insurance}</TableCell>
                                        <TableCell>{moment.utc(appointment.date).format('DD-MM-YYYY')}</TableCell>
                                        <TableCell>{moment.utc(appointment.date).format('HH:mm')}</TableCell>
                                        <TableCell>
                                            <Button onClick={e => handleClickOpen(appointment.id)}>
                                                <CreateIcon />
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button onClick={e => deleteHandler(appointment.id)}>
                                                <DeleteIcon />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    )}
                </Table>
            </TableContainer>

            {selectedId && (
                <Dialog open={Boolean(selectedId)} onClose={handleClose} fullWidth>
                    {/* TODO: Edit Termin Dialog */}
                    <DialogContent>{/* <EditUser id={selectedId} /> */}</DialogContent>
                </Dialog>
            )}
        </Box>
    );
};

export default ListAppointment;
