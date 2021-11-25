import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import moment from 'moment';


const initialState: AppointmentsState = { appointments: [], loading: false };

//GET appointments
export const getAppointments = createAsyncThunk('appointments/getAppointments', async () => {
    const response = await axios.get('/api/appointments');
    return response.data.collection;
});

//POST appointment
export const postAppointment = createAsyncThunk('appointments/postAppointment', async (payload: PostAppointmentPayload, thunkAPI) => {
    payload.date = moment.utc(payload.date).format('YYYY-MM-DD HH:mm:ss');
    const response = await axios.post(`/api/appointments`, payload);
    thunkAPI.dispatch(getAppointments());
    return response.data;
});

//DEL appointment
export const deleteAppointment = createAsyncThunk('appointments/deleteAppointment', async (payload: DeleteAppointmentPayload, thunkAPI) => {
    const response = await axios.delete(`/api/appointments/${payload.id}`);
    thunkAPI.dispatch(getAppointments());
    return response.data;
});

//PUT appointment
export const putAppointment = createAsyncThunk('appointments/putAppointment', async (payload: PutAppointmentPayload, thunkAPI) => {
    const id = payload.id;
    payload.date = moment.utc(payload.date).format('YYYY-MM-DD HH:mm:ss');
    const dataPayload = _.omit(payload, ['id']);
    const response = await axios.put(`/api/appointments/${id}`, dataPayload);
    thunkAPI.dispatch(getAppointments());
    return response.data;
});

export const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {},
    extraReducers: {
        //getappointments
        [getAppointments.fulfilled.type]: (state, action) => {
            return {
                ...state,
                loading: false,
                appointments: action.payload,
            };
        },
        [getAppointments.rejected.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
        [getAppointments.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
         //postappointment
         [postAppointment.fulfilled.type]: state => {
            return {
                ...state,
                loading: false,
            };
        },
        [postAppointment.rejected.type]: state => {
            return {
                ...state,
                loading: false,
            };
        },
        [postAppointment.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },

        //deleteAppointment
        [deleteAppointment.fulfilled.type]: state => {
            return {
                ...state,
                loading: false,
            };
        },
        [deleteAppointment.rejected.type]: state => {
            return {
                ...state,
                loading: false,
            };
        },
        [deleteAppointment.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },

        //putPatient
        [putAppointment.fulfilled.type]: (state, action) => {
            return {
                ...state,
                loading: false,
            };
        },
        [putAppointment.rejected.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
        [putAppointment.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },

    },
});

export default appointmentsSlice.reducer;
