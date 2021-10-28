import React from "react";
import { Box, FormControl, FormLabel, Input, InputLabel, Button, TextField } from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const Impfstopff = () => {
    const [herstellsdatum, setHerstellsdatum] = React.useState<Date | null>(new Date());
    const [euZulassung, setEuZulassung] = React.useState<Date | null>(new Date());
    return (
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <Box sx={{ width: "75%" }}>
                <FormControl fullWidth margin="normal">
                    <FormLabel component="legend">Impfstoffe</FormLabel>
                    {/* TODO: Autocomplete if have time */}
                    <FormControl margin="dense">
                        <InputLabel htmlFor="Vorname">Bezeichnung</InputLabel>
                        <Input id="Vorname" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl margin="dense">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Herstellsdatum"
                                value={herstellsdatum}
                                onChange={(newValue) => {
                                    setHerstellsdatum(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl margin="dense">
                        <InputLabel htmlFor="Versicherungsnummer">Dosierung</InputLabel>
                        <Input id="Versicherungsnummer" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl margin="dense">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="EU Zulassungsdatum"
                                value={euZulassung}
                                onChange={(newValue) => {
                                    setEuZulassung(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                    <FormControl margin="dense">
                        <InputLabel htmlFor="Vorname">Menge</InputLabel>
                        <Input id="Vorname" aria-describedby="my-helper-text" />
                    </FormControl>
                    <Button sx={{ marginTop: "2rem" }} variant="outlined">
                        Speichern
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
};

export default Impfstopff;
