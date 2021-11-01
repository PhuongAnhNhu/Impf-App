import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: VaccineDosesState = { vaccineDoses: [], loading: false };

//GET vaccindoses
export const getVaccineDoses = createAsyncThunk('vaccineDoses/getVaccineDoses', async () => {
    const response = await axios.get('/api/vaccine_doses');
    return response.data.collection;
});

export const vaccineDosesSlice = createSlice({
    name: 'vaccineDoses',
    initialState,
    reducers: {},
    extraReducers: {
        //getvaccindoses
        [getVaccineDoses.fulfilled.type]: (state, action) => {
            return {
                ...state,
                loading: false,
                vaccineDoses: action.payload,
            };
        },
        [getVaccineDoses.rejected.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
        [getVaccineDoses.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
    },
});

export default vaccineDosesSlice.reducer;
