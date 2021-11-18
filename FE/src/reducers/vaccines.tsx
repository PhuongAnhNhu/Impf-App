import axios, { AxiosResponse } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: VaccinesState = { vaccines: [], loading: false };

//GET vaccines
export const getVaccines = createAsyncThunk('vaccines/getVaccines', async () => {
    const response: AxiosResponse = await new Promise(resolve => {
        setTimeout(() => axios.get('/api/vaccines').then(response => resolve(response)), 500);
    });
    return response.data.collection;
});

export const vaccinesSlice = createSlice({
    name: 'vaccineDoses',
    initialState,
    reducers: {},
    extraReducers: {
        //getvaccindoses
        [getVaccines.fulfilled.type]: (state, action) => {
            return {
                ...state,
                loading: false,
                vaccines: action.payload,
            };
        },
        [getVaccines.rejected.type]: state => {
            return {
                ...state,
                loading: false,
            };
        },
        [getVaccines.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
    },
});

export default vaccinesSlice.reducer;
