import React from "react";
import { Box, FormControl, FormLabel, Input, InputLabel, Button } from "@mui/material";

const NewPatient = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Box sx={{ width: "75%" }}>
                <FormControl fullWidth margin="normal">
                    <FormLabel>Patient</FormLabel>
                    <FormControl margin="dense">
                        <InputLabel htmlFor="Vorname">Vorname</InputLabel>
                        <Input id="Vorname" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl margin="dense">
                        <InputLabel htmlFor="Nachname">Nachname</InputLabel>
                        <Input id="Nachname" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl margin="dense">
                        <InputLabel htmlFor="Versicherungsnummer">Versicherungsnummer</InputLabel>
                        <Input id="Versicherungsnummer" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl margin="dense">
                        <InputLabel htmlFor="Artz">Geschlecht</InputLabel>
                        <Input id="Artz" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl margin="dense">
                        <InputLabel htmlFor="Artz">Geburtsdatum</InputLabel>
                        <Input id="Artz" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl margin="dense">
                        <InputLabel htmlFor="Artz">Straße</InputLabel>
                        <Input id="Artz" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl margin="dense">
                        <InputLabel htmlFor="Artz">PLZ</InputLabel>
                        <Input id="Artz" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl margin="dense">
                        <InputLabel htmlFor="Artz">Ort</InputLabel>
                        <Input id="Artz" aria-describedby="my-helper-text" />
                    </FormControl>
                    <Button sx={{ marginTop: "2rem" }} variant="outlined">
                        Speichern
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
};

export default NewPatient;
