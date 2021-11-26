import React, { useCallback, useEffect, useState } from 'react';
import { Box, FormControl, Button, TextField, Autocomplete, CircularProgress } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import deLocale from 'date-fns/locale/de';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateTimePicker from '@mui/lab/MobileDateTimePicker';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { getPatients } from '../reducers/patients';
import { putAppointment } from '../reducers/appointments';
import { getVaccindosesNotAssigned } from '../reducers/vaccineDoses';
import { getVaccines } from '../reducers/vaccines';
import moment from 'moment';

interface EditAppointmentProps {
    id: number;
}
const EditAppointment = ({ id }: EditAppointmentProps) => {
    const dispatch = useDispatch();
    const localeMap = {
        de: deLocale,
    };

    const maskMap = {
        de: '__.__.____',
    };

    const appointments: Appointment[] = useSelector((state: RootState) => state.appointmentsState.appointments);
    const appointment: Appointment = appointments.find(element => id === element.id);

    const patients: Patient[] = useSelector((state: RootState) => state.patientsState.patients);
    const patientCurrent = patients.find(element => element.id === Number(appointment.patient));

    const [dateAppointment, setDateAppointment] = React.useState<Date | null>(appointment.date);
    const [vaccine, setVaccine] = useState<number | null>(Number(appointment.vaccine_dose));
    const [vaccineType, setVaccineType] = useState<string | null>('');

    const vaccines: Vaccine[] = useSelector((state: RootState) => state.vaccinesState.vaccines);
    const vaccinesTypeOptions = vaccines.map(item => item.name);

    const vaccineDoses: VaccineDose[] = useSelector((state: RootState) => state.vaccineDosesState.vaccineDosesNotAssigned);

    // Vaccine_Doses filter nach Impftermin
    const vaccineDosesNachDatum = vaccineDoses.filter(e => moment.utc(dateAppointment).format() <= moment.utc(e.expiresAt).format());

    let vaccineDosesList = vaccineDosesNachDatum.map(item => String(item.id));

    if (vaccineType !== '') {
        //Find vaccine hersteller
        const vaccinesFilterID = vaccines.find(e => e.name === vaccineType);
        //Find alle Vaccine Dose von dieser Hersteller
        const vaccineListNachVaccineType = vaccineDosesNachDatum.filter(e => e.vaccine === (vaccinesFilterID?.id || 0));
        vaccineDosesList = vaccineListNachVaccineType.map(item => String(item.id));
    }

    const onSubmit = useCallback(() => {
        const date = moment.utc(dateAppointment).format('YYYY-MM-DD HH:mm:ss');
        const vaccine_dose = Number(vaccine);
        const patient: any = patients.find(e => e.insurance === patientCurrent.insurance).id;
        const user = 1;
        dispatch(putAppointment({ id, date, vaccine_dose, patient, user }));
    }, [dateAppointment, vaccine]);

    useEffect(() => {
        dispatch(getPatients());
        dispatch(getVaccindosesNotAssigned());
        dispatch(getVaccines());
    }, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            {!appointments.length && !patients.length && !vaccines.length && <CircularProgress size={40} />}

            {!!appointments.length && !!patients.length && !!vaccines.length && (
                <Box>
                    <FormControl fullWidth>
                        <h3>
                            Bearbeinten Termin für {patientCurrent.firstname} {patientCurrent.lastname}
                        </h3>

                        <p>Versicherungsnummer: {patientCurrent.insurance}</p>

                        <FormControl margin="dense">
                            <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap['de']}>
                                <DesktopDateTimePicker
                                    mask={maskMap['de']}
                                    label="Uhrzeit"
                                    value={dateAppointment}
                                    onChange={newValue => {
                                        setDateAppointment(newValue);
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
                                value={String(vaccine)}
                                options={vaccineDosesList}
                                onChange={(e, newValue) => {
                                    setVaccine(Number(newValue));
                                }}
                                renderInput={params => <TextField {...params} label="Impfstoff" required variant="standard" />}
                            />
                        </FormControl>
                        <Button onClick={onSubmit} sx={{ marginTop: '2rem' }} variant="outlined">
                            Speichern
                        </Button>
                    </FormControl>
                </Box>
            )}
        </Box>
    );
};

export default EditAppointment;
