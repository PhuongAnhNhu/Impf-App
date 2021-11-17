import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import moment from 'moment';

const initialState: VaccineDosesState = { vaccineDoses: [], loading: false };

//GET vaccindoses
export const getVaccineDoses = createAsyncThunk('vaccineDoses/getVaccineDoses', async () => {
    const response = await axios.get('/api/vaccine_doses');
    return response.data.collection;
});

//POST vaccindose
export const postVaccineDose = createAsyncThunk('vaccineDoses/postVaccineDose', async (payload: PostVaccineDosePayload, thunkAPI) => {
    payload.createdAt = moment.utc(payload.createdAt).format('YYYY-MM-DD HH:mm:ss');
    payload.expiresAt = moment.utc(payload.expiresAt).format('YYYY-MM-DD HH:mm:ss');
    const response = await axios.post(`/api/vaccine_doses`, payload);
    thunkAPI.dispatch(getVaccineDoses());
    return response.data;
});

//PUT vaccindose
export const putVaccineDose = createAsyncThunk('vaccineDoses/putVaccineDose', async (payload: PutVaccineDosePayload, thunkAPI) => {
    const id = payload.id;
    payload.createdAt = moment.utc(payload.createdAt).format('YYYY-MM-DD HH:mm:ss');
    payload.expiresAt = moment.utc(payload.expiresAt).format('YYYY-MM-DD HH:mm:ss');
    const dataPayload = _.omit(payload, ['id']);
    console.log(dataPayload);
    const response = await axios.put(`/api/vaccine_doses/${id}`, dataPayload);
    thunkAPI.dispatch(getVaccineDoses());
    return response.data;
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
                loading: false,
            };
        },
        [getVaccineDoses.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },

        //postVaccineDose
        [postVaccineDose.fulfilled.type]: (state, action) => {
            return {
                ...state,
                loading: false,
            };
        },
        [postVaccineDose.rejected.type]: state => {
            return {
                ...state,
                loading: false,
            };
        },
        [postVaccineDose.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },

        //putVaccineDose
        [putVaccineDose.fulfilled.type]: (state, action) => {
            return {
                ...state,
                loading: false,
            };
        },
        [putVaccineDose.rejected.type]: state => {
            return {
                ...state,
                loading: false,
            };
        },
        [putVaccineDose.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
    },
});

export default vaccineDosesSlice.reducer;
