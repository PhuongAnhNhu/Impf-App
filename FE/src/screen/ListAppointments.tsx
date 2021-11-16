import React, { useEffect, useState } from 'react';
// import moment from 'moment';
import { Box, Table, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Button, Dialog, DialogContent } from '@mui/material';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointments } from '../reducers/appointments';
import { RootState } from '../store';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

const ListAppointment = () => {
    const dispatch = useDispatch();

    const appointments: Appointment[] = useSelector((state: RootState) => state.appointmentsState.appointments);
    // const patients: Patient[] = useSelector((state: RootState) => state.patientsState.patients);
    //TODO: Find Patient nach Id

    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleClickOpen = (id: number) => {
        setSelectedId(id);
    };

    const handleClose = () => {
        setSelectedId(null);
    };

    useEffect(() => {
        dispatch(getAppointments());
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
                            <TableCell></TableCell>
                            <TableCell>Vorname</TableCell>
                            <TableCell>Nachname</TableCell>
                            <TableCell>Verischerungsnummer</TableCell>
                            <TableCell>Datum</TableCell>
                            <TableCell>Uhrzeit</TableCell>
                            <TableCell>Arzt</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((appointment, index) => {
                            return (
                                <TableRow hover key={appointment.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    {/* TODO: Name von Patient anziegen */}
                                    <TableCell>{appointment.id}</TableCell>
                                    <TableCell>{appointment.id}</TableCell>
                                    <TableCell>{appointment.patient}</TableCell>
                                    <TableCell>{appointment.date}</TableCell>
                                    <TableCell>{appointment.date}</TableCell>
                                    {/* <TableCell>{moment.unix(Number(appointment.datum)).format('DD-MM-YYYY')}</TableCell> */}
                                    {/* <TableCell>{moment.unix(Number(appointment.datum)).format('HH:mm')}</TableCell> */}
                                    {/* <TableCell>{appointment.arzt}</TableCell> */}
                                    <TableCell>
                                        <Button onClick={e => handleClickOpen(appointment.id)}>
                                            <CreateIcon />
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button>
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
                    {/* TODO: Edit Termin Dialog */}
                    <DialogContent>{/* <EditUser id={selectedId} /> */}</DialogContent>
                </Dialog>
            )}
        </Box>
    );
};

export default ListAppointment;
