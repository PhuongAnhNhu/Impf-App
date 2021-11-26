import React, { useCallback, useEffect, useState } from 'react';
import { Box, FormControl, FormLabel, Button, TextField, Autocomplete, CircularProgress } from '@mui/material';
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
import { getVaccines } from '../reducers/vaccines';
import moment from 'moment';

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
    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [insurance, setInsurance] = useState<string>('');
    const [vaccine, setVaccine] = useState<string>('');
    const [vaccineType, setVaccineType] = useState<string>('');

    const patients: Patient[] = useSelector((state: RootState) => state.patientsState.patients);
    const patientInsurance = patients.map(item => item.insurance);

    const vaccines: Vaccine[] = useSelector((state: RootState) => state.vaccinesState.vaccines);
    const vaccinesTypeOptions = vaccines.map(item => item.name);

    const vaccineDoses: VaccineDose[] = useSelector((state: RootState) => state.vaccineDosesState.vaccineDosesNotAssigned);

    // Vaccine_Doses filter nach Impftermin
    const vaccineDosesNachDatum = vaccineDoses.filter(e => moment.utc(value).format() <= moment.utc(e.expiresAt).format());

    let vaccineDosesList = vaccineDosesNachDatum.map(item => String(item.id));

    if (vaccineType !== '') {
        //Find vaccine hersteller
        const vaccinesFilterID = vaccines.find(e => e.name === vaccineType);
        //Find alle Vaccine Dose von dieser Hersteller
        const vaccineListNachVaccineType = vaccineDosesNachDatum.filter(e => e.vaccine === vaccinesFilterID.id);
        vaccineDosesList = vaccineListNachVaccineType.map(item => String(item.id));
    }

    const onSubmit = useCallback(() => {
        const date = moment.utc(value).format('YYYY-MM-DD HH:mm:ss');
        const vaccine_dose = Number(vaccine);
        const patient = patients.find(e => e.insurance === insurance).id;
        const user = 1;
        dispatch(postAppointment({ date, vaccine_dose, patient, user }));
        history.push('/listappointments');
    }, [value, vaccine, insurance]);

    useEffect(() => {
        dispatch(getPatients());
        dispatch(getVaccindosesNotAssigned());
        dispatch(getVaccines());
    }, []);

    return (
        <Box mt={10}>
            <Box sx={{ position: 'absolute' }}>
                <img src="/krankschwester.png" width="100" alt="logo"></img>
            </Box>
            {!patients.length && !vaccines.length ? (
                <CircularProgress size={40} />
            ) : (
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Box sx={{ width: '70%' }}>
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
                                    renderInput={params => (
                                        <TextField {...params} label="Versicherungsnummer" required variant="standard" />
                                    )}
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
                                    autoHighlight={true}
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
                                        setVaccine(newValue);
                                    }}
                                    renderInput={params => <TextField {...params} label="Impfstoff" required variant="standard" />}
                                />
                            </FormControl>
                            <Button onClick={onSubmit} sx={{ marginTop: '2rem' }} variant="outlined">
                                Speichern
                            </Button>
                        </FormControl>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default Appointment;
