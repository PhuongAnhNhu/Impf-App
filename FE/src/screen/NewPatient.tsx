import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, InputLabel, Button, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import deLocale from "date-fns/locale/de";
import DatePicker from "@mui/lab/DatePicker";

const NewPatient = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastName] = useState("");
    const [insurance, setInsurance] = useState("");
    const [kkv, setKkv] = useState("");
    const [gender, setGender] = useState("");
    const [date, setDate] = useState(new Date());
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");

    const localeMap = {
        de: deLocale,
    };

    const maskMap = {
        de: "__.__.____",
    };

    const saveHandler = () => {
        console.log('save');
    }
    return (
        <Box mt={10} sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Box sx={{ width: "75%" }}>
            <FormControl fullWidth margin="normal">
            <FormLabel component="legend">Neuer Patient</FormLabel>
            <FormControl margin="dense">
                        <InputLabel htmlFor="Vorname">Vorname</InputLabel>
                        <Input
                            id="Vorname"
                            aria-describedby="my-helper-text"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </FormControl>

                    <FormControl margin="dense">
                        <InputLabel htmlFor="Nachname">Nachname</InputLabel>
                        <Input
                            id="Nachname"
                            aria-describedby="my-helper-text"
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </FormControl>

                    <FormControl margin="dense">
                        <InputLabel htmlFor="username">Versicherungsnummer</InputLabel>
                        <Input
                            id="username"
                            aria-describedby="my-helper-text"
                            value={insurance}
                            onChange={(e) => setInsurance(e.target.value)}
                        />
                    </FormControl>

                    <FormControl margin="dense">
                        <InputLabel htmlFor="username">kvNummer</InputLabel>
                        <Input id="username" aria-describedby="my-helper-text" value={kkv} onChange={(e) => setKkv(e.target.value)} />
                    </FormControl>

                    <FormControl margin="dense">
                        <InputLabel htmlFor="username">Geschlecht</InputLabel>
                        <Input id="username" aria-describedby="my-helper-text" value={gender} onChange={(e) => setGender(e.target.value)} />
                    </FormControl>

                    <FormControl margin="dense">
                        <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap["de"]}>
                            <DatePicker
                                mask={maskMap["de"]}
                                label="Geburtsdatum"
                                value={date}
                                onChange={(newValue) => {
                                    setDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>

                    <FormControl margin="dense">
                        <InputLabel htmlFor="username">Address</InputLabel>
                        <Input
                            id="username"
                            aria-describedby="my-helper-text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </FormControl>

                    <FormControl margin="dense">
                        <InputLabel htmlFor="username">PLZ</InputLabel>
                        <Input id="username" aria-describedby="my-helper-text" value={zip} onChange={(e) => setZip(e.target.value)} />
                    </FormControl>

                    <FormControl margin="dense">
                        <InputLabel htmlFor="username">Stadt</InputLabel>
                        <Input id="username" aria-describedby="my-helper-text" value={city} onChange={(e) => setCity(e.target.value)} />
                    </FormControl>

                    <Button onClick={saveHandler} sx={{ marginTop: "2rem" }} variant="outlined">
                        Speichern
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
};

export default NewPatient;
