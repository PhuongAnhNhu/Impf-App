import React from "react";
import { Box, FormControl, FormLabel, Input, InputLabel, Button, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDateTimePicker from "@mui/lab/MobileDateTimePicker";

const Appointment = () => {
    const [value, setValue] = React.useState<Date | null>(new Date());

    return (
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Box sx={{ width: "75%" }}>
                <FormControl fullWidth>
                    <FormLabel component="legend">Appointment</FormLabel>
                    {/* TODO: Autocomplete if have time */}
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
                        <InputLabel htmlFor="Artz">Artz</InputLabel>
                        <Input id="Artz" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl margin="dense">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDateTimePicker
                                label="Uhrzeit"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                    <Button sx={{ marginTop: "2rem" }} variant="outlined">
                        Speichern
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
};

export default Appointment;
