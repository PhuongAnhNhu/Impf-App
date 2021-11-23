import axios, { AxiosResponse } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import moment from 'moment';

const initialState: PatientsState = { patients: [], loading: false };

//GET patients
export const getPatients = createAsyncThunk('patients/getPatients', async () => {
    const response: AxiosResponse = await new Promise(resolve => {
        setTimeout(() => axios.get('/api/patients').then(response => resolve(response)), 500);
    });
    return response.data.collection;
});

//DEL patient
export const deletePatient = createAsyncThunk('patients/deletePatient', async (payload: DeletePatientPayload, thunkAPI) => {
    const response = await axios.delete(`/api/patients/${payload.id}`);
    thunkAPI.dispatch(getPatients());
    return response.data;
});

//PUT patient
export const putPatient = createAsyncThunk('patients/putPatient', async (payload: PutPatientPayLoad, thunkAPI) => {
    const id = payload.id;
    payload.dateOfBirth = moment.utc(payload.dateOfBirth).format('YYYY-MM-DD HH:mm:ss');
    const dataPayload = _.omit(payload, ['id']);
    const response = await axios.put(`/api/patients/${id}`, dataPayload);
    thunkAPI.dispatch(getPatients());
    return response.data;
});

//POST patient
export const postPatient = createAsyncThunk('patients/postPatient', async (payload: PostPatientPayLoad, thunkAPI) => {
    payload.dateOfBirth = moment.utc(payload.dateOfBirth).format('YYYY-MM-DD HH:mm:ss');
    const response = await axios.post(`/api/patients`, payload);
    thunkAPI.dispatch(getPatients());
    return response.data;
});

export const patientsSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {},
    extraReducers: {
        //getPatients
        [getPatients.fulfilled.type]: (state, action) => {
            return {
                ...state,
                loading: false,
                patients: action.payload,
            };
        },
        [getPatients.rejected.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
        [getPatients.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
        //deletePatient
        [deletePatient.fulfilled.type]: state => {
            return {
                ...state,
                loading: false,
            };
        },
        [deletePatient.rejected.type]: state => {
            return {
                ...state,
                loading: false,
            };
        },
        [deletePatient.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
        //putPatient
        [putPatient.fulfilled.type]: (state, action) => {
            return {
                ...state,
                loading: false,
            };
        },
        [putPatient.rejected.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
        [putPatient.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
        //postPatient
        [postPatient.fulfilled.type]: state => {
            return {
                ...state,
                loading: false,
            };
        },
        [postPatient.rejected.type]: state => {
            return {
                ...state,
                loading: false,
            };
        },
        [postPatient.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
    },
});

export default patientsSlice.reducer;
