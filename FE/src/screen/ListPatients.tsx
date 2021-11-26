import React, { useEffect, useState } from 'react';
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
    CircularProgress,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { getPatients } from '../reducers/patients';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { deletePatient } from '../reducers/patients';
import EditPatient from '../component/EditPatient';

const ListPatients = () => {
    const dispatch = useDispatch();

    const patientsState = useSelector((state: RootState) => state.patientsState);

    const { patients, loading } = patientsState;

    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleClickOpen = (id: number) => {
        setSelectedId(id);
    };

    const handleClose = () => {
        setSelectedId(null);
    };

    const deleteHandler = (id: number) => {
        dispatch(deletePatient({ id }));
    };

    useEffect(() => {
        dispatch(getPatients());
    }, []);

    return (
        <Box mr={2} mt={10}>
            <h2>Patientsliste</h2>

            <Button component={Link} to="/newpatient" sx={{ marginBottom: '2rem' }} variant="outlined">
                <AddIcon />
                Neuer Patient
            </Button>

            {loading && <CircularProgress size={40} />}

            {!!patients.length && (
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
                        <TableBody>
                            {patients.map((patient, index) => {
                                return (
                                    <TableRow hover key={patient.insurance}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>
                                            <p>{patient.firstname}</p>
                                        </TableCell>
                                        <TableCell>
                                            <p>{patient.lastname} </p>
                                        </TableCell>
                                        <TableCell>
                                            <p>{patient.insurance} </p>
                                        </TableCell>
                                        <TableCell>
                                            <p>{patient.kkv} </p>
                                        </TableCell>
                                        <TableCell>
                                            <p>{patient.gender} </p>
                                        </TableCell>
                                        <TableCell>
                                            <p>{moment.utc(patient.dateOfBirth).format('DD.MM.YYYY')} </p>
                                        </TableCell>
                                        <TableCell>
                                            <p>{`${patient.address}, ${patient.zip}, ${patient.city}`}</p>
                                        </TableCell>
                                        <TableCell>
                                            <Button onClick={e => handleClickOpen(patient.id)}>
                                                <CreateIcon />
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button>
                                                <DeleteIcon onClick={e => deleteHandler(patient.id)} />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            {selectedId && (
                <Dialog open={Boolean(selectedId)} onClose={handleClose} fullWidth>
                    <DialogContent>
                        <EditPatient id={selectedId} />
                    </DialogContent>
                </Dialog>
            )}
        </Box>
    );
};

export default ListPatients;
