import React, { useCallback, useState } from "react";
import { Box, FormControl, FormLabel, Input, InputLabel, Button, TextField, Autocomplete } from "@mui/material";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import deLocale from "date-fns/locale/de";
import DatePicker from "@mui/lab/DatePicker";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { postPatient } from "../reducers/patients";

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

    const genderOption = ["male", "female", "diverse"];

    const localeMap = {
        de: deLocale,
    };

    const maskMap = {
        de: "__.__.____",
    };

    let dispatch = useDispatch();
    const history = useHistory();

    const saveHandler = useCallback(() => {
        const dateOfBirth = String(date);
        dispatch(postPatient({ firstname, lastname, insurance, kkv, gender, dateOfBirth, address, zip, city }));
        history.push("/listpatients");
    }, [firstname, lastname, insurance, kkv, gender, date, address, zip, city]);

    return (
        <Box mt={10} sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Box sx={{ width: "75%" }}>
                <FormControl fullWidth margin="normal">
                    <FormLabel component="legend">Neuer Patient</FormLabel>
                    <FormControl margin="dense">
                        <TextField
                            required
                            label="Vorname"
                            variant="standard"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </FormControl>

                    <FormControl margin="dense">
                        <TextField
                            required
                            label="Nachname"
                            variant="standard"
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </FormControl>

                    <FormControl margin="dense">
                        <TextField
                            required
                            label="Versicherungsnummer"
                            variant="standard"
                            value={insurance}
                            onChange={(e) => setInsurance(e.target.value)}
                            helperText="Insurance muss mindestens 10 Zeichen sein."
                        />
                    </FormControl>

                    <FormControl margin="dense">
                        <TextField
                            required
                            label="Krankenkasse"
                            variant="standard"
                            value={kkv}
                            onChange={(e) => setKkv(e.target.value)}
                            helperText="Krankenkasse muss mindestens 8 Zeichen sein."
                        />
                    </FormControl>

                    <FormControl margin="dense">
                        <Autocomplete
                            disableCloseOnSelect={false}
                            value={gender}
                            options={genderOption}
                            onChange={(event, newValue) => {
                                setGender(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} label="Geschlecht" required variant="standard" />}
                        />
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
                                renderInput={(params) => <TextField {...params} required variant="standard" />}
                            />
                        </LocalizationProvider>
                    </FormControl>

                    <FormControl margin="dense">
                        <TextField
                            required
                            label="Address"
                            variant="standard"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </FormControl>

                    <FormControl margin="dense">
                        <TextField required label="PLZ" variant="standard" value={zip} onChange={(e) => setZip(e.target.value)} />
                    </FormControl>

                    <FormControl margin="dense">
                        <TextField required label="Stadt" variant="standard" value={city} onChange={(e) => setCity(e.target.value)} />
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
