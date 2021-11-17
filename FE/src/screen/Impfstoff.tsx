import React, { useCallback, useEffect, useState } from 'react';
import { Box, FormControl, FormLabel, Button, TextField, Autocomplete } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import deLocale from 'date-fns/locale/de';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { postVaccineDose } from '../reducers/vaccineDoses';
import { useHistory } from 'react-router';
import { getVaccines } from '../reducers/vaccines';

const Impfstopff = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [vaccineType, setVaccineType] = useState<String>('1');
    const [createdAt, setcreatedAt] = useState(`${new Date()}`);
    const [expiresAt, setExpiresAt] = useState(`${new Date()}`);

    const vaccines: Vaccine[] = useSelector((state: RootState) => state.vaccinesState.vaccines);
    const vaccinesType = vaccines.map(item => String(item.id));
console.log(vaccinesType);
    const localeMap = {
        de: deLocale,
    };

    const maskMap = {
        de: '__.__.____',
    };

    const onSubmit = useCallback(() => {
        const vaccine = Number(vaccineType);
        dispatch(postVaccineDose({ vaccine, createdAt, expiresAt }));
        history.push('/listimpfstoffe');
    }, [vaccineType, createdAt, expiresAt]);

    useEffect(() => {
        dispatch(getVaccines());
    }, [])

    return (
        <Box mt={10} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Box sx={{ width: '75%' }}>
                <FormControl fullWidth margin="normal">
                    <FormLabel component="legend">Impfstoffe</FormLabel>

                    <FormControl margin="dense">
                        <Autocomplete
                            disableCloseOnSelect={false}
                            value={vaccineType}
                            options={vaccinesType}
                            onChange={(e, newValue) => {
                                setVaccineType(newValue);
                            }}
                            renderInput={params => <TextField {...params} label="Vaccine" required variant="standard" />}
                        />
                    </FormControl>
                    <FormControl margin="dense">
                        <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap['de']}>
                            <DatePicker
                                mask={maskMap['de']}
                                label="Herstellsdatum"
                                value={createdAt}
                                onChange={newValue => {
                                    setcreatedAt(newValue);
                                }}
                                renderInput={params => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>

                    <FormControl margin="dense">
                        <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap['de']}>
                            <DatePicker
                                mask={maskMap['de']}
                                label="Ablaufdattum"
                                value={expiresAt}
                                onChange={newValue => {
                                    setExpiresAt(newValue);
                                }}
                                renderInput={params => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>

                    <Button sx={{ marginTop: '2rem' }} variant="outlined" onClick={onSubmit}>
                        Speichern
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
};

export default Impfstopff;
