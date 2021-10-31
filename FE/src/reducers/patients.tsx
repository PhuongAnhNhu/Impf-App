import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface Patient {
    id: number;
    insurance: string;
    kkv: string;
    firstname: string;
    lastname: string;
    dateofbirth: Date;
    gender: string;
    address: string;
    zip: string;
    city: string;
}

interface PatientsState {
    patients: Patient[];
    loading: boolean;
}
const initialState: PatientsState = { patients: [], loading: false };

//GET patients
export const getPatients = createAsyncThunk('patients/getPatients', async () => {
    const response = await axios.get('/api/patients');
    return response.data.collection;
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
    },
});

export default patientsSlice.reducer;
