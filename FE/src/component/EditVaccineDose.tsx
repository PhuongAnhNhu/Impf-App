import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, FormControl, FormLabel, Button, TextField } from '@mui/material';
import { RootState } from '../store';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { putVaccineDose } from '../reducers/vaccineDoses';

interface EditVaccineProps {
    id: number;
}

const EditVaccineDose = ({ id }: EditVaccineProps) => {
    const vaccineDoses = useSelector((state: RootState) => state.vaccineDosesState.vaccineDoses);

    const vaccineDose = vaccineDoses.find(element => id === element.id);
console.log(vaccineDose);
    const dispatch = useDispatch();

    const [createdAt, setCreatedAt] = useState(`${vaccineDose.createdAt}`);
    const [expiresAt, setExpiresAt] = useState(`${vaccineDose.expiresAt}`);

    const saveHandler = () => {
        dispatch(putVaccineDose({ id, createdAt, expiresAt }));
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Box sx={{ width: '75%' }}>
                <FormControl fullWidth margin="normal">
                    <FormLabel component="legend">Bearbeiten Impfstoff {id}</FormLabel>

                    <FormControl margin="dense">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Herstellsdatum"
                                value={createdAt}
                                onChange={newValue => {
                                    setCreatedAt(newValue);
                                }}
                                renderInput={params => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>

                    <FormControl margin="dense">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Ablaufdatum"
                                value={expiresAt}
                                onChange={newValue => {
                                    setExpiresAt(newValue);
                                }}
                                renderInput={params => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>

                    <Button onClick={saveHandler} sx={{ marginTop: '2rem' }} variant="outlined">
                        Speichern
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
};

export default EditVaccineDose;
