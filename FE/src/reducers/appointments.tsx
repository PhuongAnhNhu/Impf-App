import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState: AppointmentsState = { appointments: [], loading: false };

//GET appointments
export const getAppointments = createAsyncThunk('patients/getAppointments', async () => {
    const response = await axios.get('/api/appointments');
    return response.data.collection;
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
    },
});

export default appointmentsSlice.reducer;
