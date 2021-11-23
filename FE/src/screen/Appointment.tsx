import React, { useCallback, useEffect, useState } from 'react';
import { Box, FormControl, FormLabel, Button, TextField, Autocomplete } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import deLocale from 'date-fns/locale/de';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateTimePicker from '@mui/lab/MobileDateTimePicker';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../store';
import { getPatients } from '../reducers/patients';
import { postAppointment } from '../reducers/appointments';
import { getVaccindosesNotAssigned } from '../reducers/vaccineDoses';

const Appointment = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const localeMap = {
        de: deLocale,
    };

    const maskMap = {
        de: '__.__.____',
    };

    const [value, setValue] = React.useState<Date | null>(new Date());
    const [firstname, setFirstname] = useState<String>('');
    const [lastname, setLastname] = useState<String>('');
    const [insurance, setInsurance] = useState<String>('');
    const [vaccine, setVaccine] = useState<Number>();
    const [vaccineType, setVaccineType] = useState<String>('');

    const patients: Patient[] = useSelector((state: RootState) => state.patientsState.patients);
    const patientInsurance = patients.map(item => item.insurance);

    const vaccines: Vaccine[] = useSelector((state: RootState) => state.vaccinesState.vaccines);
    const vaccinesTypeOptions = vaccines.map(item => item.name);

    const vaccineDoses: VaccineDose[] = useSelector((state: RootState) => state.vaccineDosesState.vaccineDosesNotAssigned);
    const vaccineDosesList = vaccineDoses.map(item => item.id);


    useEffect(() => {
        dispatch(getPatients());
        dispatch(getVaccindosesNotAssigned());
    }, []);

    return (
        <Box mt={10} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Box sx={{ width: '75%' }}>
                <FormControl fullWidth>
                    <FormLabel component="legend">Appointment</FormLabel>

                    <FormControl margin="dense">
                        <Autocomplete
                            disableCloseOnSelect={false}
                            value={insurance}
                            options={patientInsurance}
                            onChange={(e, newValue) => {
                                setInsurance(newValue);
                                setFirstname(patients.find(item => newValue === item.insurance)?.firstname || '');
                                setLastname(patients.find(item => newValue === item.insurance)?.lastname || '');
                            }}
                            renderInput={params => <TextField {...params} label="Versicherungsnummer" required variant="standard" />}
                        />
                    </FormControl>

                    <FormControl margin="dense">
                        <TextField required variant="standard" label="Vorname" value={firstname} />
                    </FormControl>

                    <FormControl margin="dense">
                        <TextField required variant="standard" label="Nachname" value={lastname} />
                    </FormControl>

                    <FormControl margin="dense">
                        <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap['de']}>
                            <DesktopDateTimePicker
                                mask={maskMap['de']}
                                label="Uhrzeit"
                                value={value}
                                onChange={newValue => {
                                    setValue(newValue);
                                }}
                                renderInput={params => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>

                    <FormControl margin="dense">
                        <Autocomplete
                            disableCloseOnSelect={false}
                            value={vaccineType}
                            options={vaccinesTypeOptions}
                            onChange={(e, newValue) => {
                                setVaccineType(newValue);
                            }}
                            renderInput={params => <TextField {...params} label="Hersteller" required variant="standard" />}
                        />
                    </FormControl>

                    <FormControl margin="dense">
                        <Autocomplete
                            disableCloseOnSelect={false}
                            value={vaccine}
                            options={vaccineDosesList}
                            onChange={(e, newValue) => {
                                setVaccine(Number(newValue));
                            }}
                            renderInput={params => <TextField {...params} label="Impfstoff" required variant="standard" />}
                        />
                    </FormControl>
                    <Button sx={{ marginTop: '2rem' }} variant="outlined">
                        Speichern
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
};

export default Appointment;
