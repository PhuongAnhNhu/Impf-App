import React, { useEffect, useState } from 'react';
import moment from 'moment';
import AddIcon from '@mui/icons-material/Add';
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
    CircularProgress,
    DialogContent,
    Dialog,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVaccindosesNotAssigned } from '../reducers/vaccineDoses';
import { RootState } from '../store';
import CreateIcon from '@mui/icons-material/Create';
import EditVaccineDose from '../component/EditVaccineDose';
import { getVaccines } from '../reducers/vaccines';

const ListImpfstoffe = () => {
    const dispatch = useDispatch();

    const loading = useSelector((state: RootState) => state.vaccineDosesState.loading);

    // const vaccineDoses: VaccineDose[] = useSelector((state: RootState) => state.vaccineDosesState.vaccineDoses);
    const vaccineDoses: VaccineDose[] = useSelector((state: RootState) => state.vaccineDosesState.vaccineDosesNotAssigned);
    const vaccines: Vaccine[] = useSelector((state: RootState) => state.vaccinesState.vaccines);

    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleClickOpen = (id: number) => {
        setSelectedId(id);
    };

    const handleClose = () => {
        setSelectedId(null);
    };

    useEffect(() => {
        dispatch(getVaccindosesNotAssigned());
        dispatch(getVaccines());
    }, []);

    return (
        <Box mr={2} mt={10}>
            <h2>Impfstoffe</h2>
            <Link to="/impfstoff">
                <Button sx={{ marginBottom: '1rem' }} variant="outlined">
                    <AddIcon /> Impfstoffe eintragen
                </Button>
            </Link>

            {loading && <CircularProgress size={40} />}

            {!!vaccineDoses.length && !!vaccines.length && (
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Dosierung</TableCell>
                                <TableCell>Herstellersdatum</TableCell>
                                <TableCell>Ablaufdatum</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {vaccineDoses.map((vaccineDose, index) => {
                                const vaccine = vaccines.find(item => vaccineDose.vaccine === item.id);
                                return (
                                    <TableRow hover key={vaccineDose.id}>
                                        <TableCell>{vaccineDose.id}</TableCell>
                                        <TableCell>{vaccine.name}</TableCell>
                                        <TableCell>{vaccine.dosage}</TableCell>
                                        <TableCell>{moment.utc(vaccineDose.createdAt).format('DD.MM.YYYY')}</TableCell>
                                        <TableCell>{moment.utc(vaccineDose.expiresAt).format('DD.MM.YYYY')}</TableCell>
                                        <TableCell>
                                            <Button onClick={e => handleClickOpen(vaccineDose.id)}>
                                                <CreateIcon />
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
                        <EditVaccineDose id={selectedId} />
                    </DialogContent>
                </Dialog>
            )}
        </Box>
    );
};

export default ListImpfstoffe;
