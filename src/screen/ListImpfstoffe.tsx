import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Box, Table, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Button } from '@mui/material';
import impfstoffs from '../dummydata/impfstoff';

const ListImpfstoffe = ({ id, bezeichnung, dosierung, hersteller, zulassungsdatum }: ImpfstoffeProps) => {
    let data = impfstoffs.map((impfstoff, index) => {
        return (
            <TableRow hover key={impfstoff.id}>
                <TableCell>{impfstoff.id}</TableCell>
                <TableCell>{impfstoff.bezeichnung}</TableCell>
                <TableCell>{impfstoff.dosierung}</TableCell>
                <TableCell>{moment.unix(Number(impfstoff.hersteller)).format('DD-MM-YYYY')}</TableCell>
                <TableCell>{moment.unix(Number(impfstoff.zulassungsdatum)).format('DD-MM-YYYY')}</TableCell>
            </TableRow>
        );
    });
    return (
        <div>
            <Box mr={2}>
                <h2>Impfstoffe</h2>
                <Link to="/impfstoff" >
                    <Button sx={{ marginBottom: '1rem' }} variant="outlined">
                        <AddIcon /> Impfstoffe eintragen
                    </Button>
                </Link>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>Bezeichnung</TableCell>
                                <TableCell>Dosierung</TableCell>
                                <TableCell>Herstellersdatum</TableCell>
                                <TableCell>EU Zulassungsdatum</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{data}</TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    );
};

export default ListImpfstoffe;
