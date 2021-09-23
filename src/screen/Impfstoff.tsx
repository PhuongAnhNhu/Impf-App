import React from 'react';
import { Box, FormControl, FormLabel, Input, InputLabel, Button, TextField } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


const Impfstopff = () => {
    const [value, setValue] = React.useState<Date | null>(new Date());
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <FormControl>
                <FormLabel component="legend">Impfstoffe</FormLabel>
                {/* TODO: Autocomplete if have time */}
                <FormControl>
                    <InputLabel htmlFor="Vorname">Bezeichnung</InputLabel>
                    <Input sx={{ width: '25rem' }} id="Vorname" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl sx={{ marginTop: '2rem' }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Herstellungsdatum"
                            value={value}
                            onChange={newValue => {
                                setValue(newValue);
                            }}
                            renderInput={params => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="Versicherungsnummer">Dosierung</InputLabel>
                    <Input id="Versicherungsnummer" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl sx={{ marginTop: '2rem' }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="EU Zulassungsdatum"
                            value={value}
                            onChange={newValue => {
                                setValue(newValue);
                            }}
                            renderInput={params => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="Vorname">Menge</InputLabel>
                    <Input sx={{ width: '25rem' }} id="Vorname" aria-describedby="my-helper-text" />
                </FormControl>
                <Button sx={{ marginTop: '2rem' }} variant="outlined">
                    Speichern
                </Button>
            </FormControl>
        </Box>
    );
};

export default Impfstopff;
