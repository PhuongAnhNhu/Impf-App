import React from 'react'
import { Box, FormControl, FormLabel, Input, InputLabel, Button } from '@mui/material';
const Impfstopff = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <FormControl>
                <FormLabel component="legend">Impfstoffe</FormLabel>
                {/* TODO: Autocomplete if have time */}
                <FormControl>
                    <InputLabel htmlFor="Vorname">Bezeichnung</InputLabel>
                    <Input id="Vorname" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="Nachname">Herstelle</InputLabel>
                    <Input sx={{ width: '25rem' }} id="Nachname" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="Versicherungsnummer">Dosierung</InputLabel>
                    <Input id="Versicherungsnummer" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="Artz">EU Zulassungsdatum</InputLabel>
                    <Input id="Artz" aria-describedby="my-helper-text" />
                </FormControl>

                <Button sx={{ marginTop: '2rem' }} variant="outlined">
                    Speichern
                </Button>
            </FormControl>
        </Box>
    )
}

export default Impfstopff