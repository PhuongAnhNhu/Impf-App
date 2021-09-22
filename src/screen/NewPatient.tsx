import React from 'react'
import { Box, FormControl, FormLabel, Input, InputLabel, Button, Autocomplete } from '@mui/material';

const NewPatient = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <FormControl>
                <FormLabel component="legend">Patient</FormLabel>
                <FormControl>
                    <InputLabel htmlFor="Vorname">Vorname</InputLabel>
                    <Input id="Vorname" aria-describedby="my-helper-text" />
                </FormControl>

                <FormControl>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="Nachname">Nachname</InputLabel>
                    <Input sx={{ width: '25rem' }} id="Nachname" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="Versicherungsnummer">Versicherungsnummer</InputLabel>
                    <Input id="Versicherungsnummer" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="Artz">Geschlecht</InputLabel>
                    <Input id="Artz" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="Artz">Geburtsdatum</InputLabel>
                    <Input id="Artz" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="Artz">Straße</InputLabel>
                    <Input id="Artz" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="Artz">PLZ</InputLabel>
                    <Input id="Artz" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="Artz">Ort</InputLabel>
                    <Input id="Artz" aria-describedby="my-helper-text" />
                </FormControl>
                <Button sx={{ marginTop: '2rem' }} variant="outlined">
                    Speichern
                </Button>
            </FormControl>
        </Box>
    )
}

export default NewPatient