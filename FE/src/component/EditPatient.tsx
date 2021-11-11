import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, FormControl, FormLabel, Input, InputLabel, Button, TextField } from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import { RootState } from "../store";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import deLocale from "date-fns/locale/de";
import { putPatient } from "../reducers/patients";

interface EditPatientProps {
    id: number;
}

const EditPatient = ({ id }: EditPatientProps) => {
    const patients: Patient[] = useSelector((state: RootState) => state.patientsState.patients);

    const patient: Patient = patients.find((element) => id === element.id);

    const dispatch = useDispatch();

    const [firstname, setFirstname] = useState(patient.firstname);
    const [lastname, setLastName] = useState(patient.lastname);
    const [insurance, setInsurance] = useState(patient.insurance);
    const [kkv, setKkv] = useState(patient.kkv);
    const [gender, setGender] = useState(patient.gender);
    const [date, setDate] = useState(patient.dateOfBirth);
    const [address, setAddress] = useState(patient.address);
    const [zip, setZip] = useState(patient.zip);
    const [city, setCity] = useState(patient.city);

    const saveHandler = () => {
      const dateOfBirth = String(date);
        dispatch(putPatient({ id, firstname, lastname, insurance, kkv, gender, dateOfBirth, address, zip, city }));
    };

    const localeMap = {
        de: deLocale,
    };

    const maskMap = {
        de: "__.__.____",
    };
    return (
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Box sx={{ width: "75%" }}>
                <FormControl fullWidth margin="normal">
                    <FormLabel component="legend">Bearbeiten Patient</FormLabel>

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

export default EditPatient;
