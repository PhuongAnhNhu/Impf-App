import React from 'react';
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    return (
        <Box mr={2} mt={12}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Card sx={{ width: 550, height: 300 }}>
                    <Link to="/appointment">
                        <CardActionArea>
                            <CardMedia component="img" height="220" image="/termin.jpeg" alt="Paella dish"></CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Neuer Termin
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>

                <Card sx={{ width: 550, height: 300 }}>
                    <Link to="/listappointments">
                        <CardActionArea>
                            <CardMedia component="img" height="220" image="/arbeitplatz.jpeg" alt="green iguana" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Termin
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
            </Box>
            <Box mt={4} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Card sx={{ width: 550, height: 300 }}>
                    <Link to="/listpatients">
                        <CardActionArea>
                            <CardMedia component="img" height="220" image="/patient.jpeg" alt="green iguana" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Patient
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
                <Card sx={{ width: 550, height: 300 }}>
                    <Link to="/listimpfstoffe">
                        <CardActionArea>
                            <CardMedia component="img" height="220" image="/vaccines.jpeg" alt="green iguana" />
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
