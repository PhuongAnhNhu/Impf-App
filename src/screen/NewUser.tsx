import React from 'react'
import { Box, FormControl, FormLabel, Input, InputLabel, Button } from '@mui/material';

const NewUser = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <FormControl>
                <FormLabel component="legend">Neuer Benutzer</FormLabel>
                <FormControl>
                    <InputLabel htmlFor="Vorname">Vorname</InputLabel>
                    <Input id="Vorname" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="Nachname">Nachname</InputLabel>
                    <Input sx={{ width: '25rem' }} id="Nachname" aria-describedby="my-helper-text" />
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
                    <InputLabel htmlFor="Artz">Password</InputLabel>
                    <Input id="Artz" aria-describedby="my-helper-text" />
                </FormControl>
                <Button sx={{ marginTop: '2rem' }} variant="outlined">
                    Speichern
                </Button>
            </FormControl>
        </Box>
    )
}

export default NewUser