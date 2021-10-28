import React from "react";
import { Box, FormControl, FormLabel, Input, InputLabel, Button, TextField } from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const NewUser = () => {
    const [geburtsdatum, setGeburtsdatum] = React.useState<Date | null>(new Date());
    return (
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Box sx={{ width: "75%" }}>
                <FormControl fullWidth margin="normal">
                    <FormLabel component="legend">Neuer Benutzer</FormLabel>
                    <FormControl margin="dense">
                        <InputLabel htmlFor="Vorname">Vorname</InputLabel>
                        <Input id="Vorname" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl margin="dense">
                        <InputLabel htmlFor="Nachname">Nachname</InputLabel>
                        <Input id="Nachname" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl margin="dense">
                        <InputLabel htmlFor="Artz">Geschlecht</InputLabel>
                        <Input id="Artz" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl margin="dense">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Geburtsdatum"
                                value={geburtsdatum}
                                onChange={(newValue) => {
                                    setGeburtsdatum(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl margin="dense">
                        <InputLabel htmlFor="Artz">Password</InputLabel>
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

export default NewUser;
