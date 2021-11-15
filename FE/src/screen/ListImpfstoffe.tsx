import React, { useEffect } from 'react';
import moment from 'moment';
import AddIcon from '@mui/icons-material/Add';
import { Box, Table, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Button, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVaccineDoses, getVaccines } from '../reducers/vaccineDoses';
import { RootState } from '../store';

const ListImpfstoffe = () => {
    const dispatch = useDispatch();

    const loading = useSelector((state: RootState) => state.vaccineDosesState.loading);
    
    const vaccineDoses: VaccineDose[] = useSelector((state: RootState) => state.vaccineDosesState.vaccineDoses);
    const vaccines: Vaccine[] = useSelector((state: RootState) => state.vaccineDosesState.vaccines);
console.log(!!vaccineDoses.length  && !!vaccines.length);
    useEffect(() => {
        dispatch(getVaccineDoses());
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

            {!!vaccineDoses.length  && !!vaccines.length && (
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Dosierung</TableCell>
                                <TableCell>Herstellersdatum</TableCell>
                                <TableCell>Ablaufdatum</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {vaccineDoses.map((vaccineDose, index) => {
                                const vaccine = vaccines.find(element => vaccineDose.vaccine === element.id);
                                return (
                                    <TableRow hover key={vaccineDose.id}>
                                        <TableCell>{vaccineDose.id}</TableCell>
                                        <TableCell>{vaccine.name}</TableCell>
                                        <TableCell>{vaccine.dosage}</TableCell>
                                        <TableCell>{moment.utc(vaccineDose.createAt).format('DD.MM.YYYY')}</TableCell>
                                        <TableCell>{moment.utc(vaccineDose.expiresAt).format('DD.MM.YYYY')}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            {/* TODO: edit dialog */}
        </Box>
    );
};

export default ListImpfstoffe;
