import React from 'react';
import { Box, FormControl, FormLabel, Input, InputLabel, Button } from '@mui/material';
import patients from '../dummydata/patients';

const Appointment = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <FormControl>
                <FormLabel component="legend">Appointment</FormLabel>
                {/* TODO: Autocomplete if have time */}
                <FormControl>
                    <InputLabel htmlFor="Vorname">Vorname</InputLabel>
                    <Input id="Vorname" aria-describedby="my-helper-text" />
                </FormControl>

                <FormControl></FormControl>
                <FormControl>
                    <InputLabel htmlFor="Nachname">Nachname</InputLabel>
                    <Input sx={{ width: '25rem' }} id="Nachname" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="Versicherungsnummer">Versicherungsnummer</InputLabel>
                    <Input id="Versicherungsnummer" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="Artz">Artz</InputLabel>
                    <Input id="Artz" aria-describedby="my-helper-text" />
                </FormControl>

                <Button sx={{ marginTop: '2rem' }} variant="outlined">
                    Speichern
                </Button>
            </FormControl>
        </Box>
    );
};

export default Appointment;
