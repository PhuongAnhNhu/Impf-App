import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState: PatientsState = { patients: [], loading: false };

//GET patients
export const getPatients = createAsyncThunk('patients/getPatients', async () => {
    const response = await axios.get('/api/patients');
    return response.data.collection;
});

//DEL patient 
export const deletePatient = createAsyncThunk('patients/deletePatient', async (payload: DeletePatientPayload, thunkAPI) => {
    const response = await axios.delete(`/api/patients/${payload.id}`);
    thunkAPI.dispatch(getPatients());
    return response.data;
});

export const patientsSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {},
    extraReducers: {
        //getuserlist
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
        //deleteuser
        [deletePatient.fulfilled.type]: (state) => {
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
    },
});

export default patientsSlice.reducer;
