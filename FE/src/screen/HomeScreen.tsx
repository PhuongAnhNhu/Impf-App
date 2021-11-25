import React from 'react';
import appointments from '../dummydata/appointments';
import moment from 'moment';
import {
    Box,
    Checkbox,
    Table,
    Paper,
    TableRow,
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

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
        <Box mr={2} mt={22}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Card sx={{ maxWidth: 345 }}>
                    <Link to="/listappointments">
                        <CardActionArea>
                            <CardMedia component="img" height="350"  image="/calendar.png" alt="green iguana" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Termin
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <Link to="/listpatients">
                        <CardActionArea>
                            <CardMedia component="img" height="350"   image="/people.png" alt="green iguana" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Patient
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <Link to="/listappointments">
                        <CardActionArea>
                            <CardMedia component="img" height="350"  image="/vaccines.png" alt="green iguana" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Impfstoff
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
            </Box>
        </Box>
    );
};

export default HomeScreen;
