import React, { useEffect, useState } from 'react';
import moment from 'moment';
import AddIcon from '@mui/icons-material/Add';
import { Box, Table, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Button } from '@mui/material';
// import impfstoffs from '../dummydata/impfstoff';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVaccineDoses } from '../reducers/vaccineDoses';
import { RootState } from '../store';

const ListImpfstoffe = () => {
    const dispatch = useDispatch();

    const vaccineDoses: VaccineDose[] = useSelector((state: RootState) => state.vaccineDosesState.vaccineDoses);

    useEffect(() => {
        dispatch(getVaccineDoses());
    }, []);

    return (
        <Box mr={2} mt={10}>
            <h2>Impfstoffe</h2>

            <Link to="/impfstoff">
                <Button sx={{ marginBottom: '1rem' }} variant="outlined">
                    <AddIcon /> Impfstoffe eintragen
                </Button>
            </Link>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Bezeichnung</TableCell>
                            <TableCell>Herstellersdatum</TableCell>
                            <TableCell>Ablaufdatum</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {vaccineDoses.map((vaccineDose, index) => {
                            return (
                                <TableRow hover key={vaccineDose.id}>
                                    <TableCell>{vaccineDose.id}</TableCell>
                                    <TableCell>{vaccineDose.vaccine}</TableCell>
                                    <TableCell>{vaccineDose.createAt}</TableCell>
                                    <TableCell>{vaccineDose.expiresAt}</TableCell>
                                    {/* <TableCell>{moment.unix(Number(vaccineDose.createAt)).format('DD-MM-YYYY')}</TableCell>
                                    <TableCell>{moment.unix(Number(vaccineDose.expiresAt)).format('DD-MM-YYYY')}</TableCell> */}
                                    {/* TODO: checkedbox -> entfernen wenn es schon benutzt wurde.  */}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* TODO: edit dialog */}
        </Box>
    );
};

export default ListImpfstoffe;
