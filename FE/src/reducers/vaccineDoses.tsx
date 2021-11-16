import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState: VaccineDosesState = { vaccineDoses: [], vaccines: [], loading: false };

//GET vaccindoses
export const getVaccineDoses = createAsyncThunk("vaccineDoses/getVaccineDoses", async () => {
    const response = await axios.get("/api/vaccine_doses");
    return response.data.collection;
});
//PUT vaccindose
export const putVaccineDose = createAsyncThunk("vaccineDoses/putVaccineDose", async (payload: PutVaccineDosePayload, thunkAPI) => {
    const id = payload.id;
    const dataPayload = _.omit(payload, ["id"]);
    const response = await axios.put(`/api/vaccine_doses/${id}`,dataPayload);
    thunkAPI.dispatch(getVaccineDoses())
    return response.data;
});
//GET vaccines
export const getVaccines = createAsyncThunk("vaccines/getVaccines", async (thunkAPI) => {
    const response = await axios.get("/api/vaccines");
    return response.data.collection;
});



export const vaccineDosesSlice = createSlice({
    name: "vaccineDoses",
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
        [getVaccineDoses.rejected.type]: (state) => {
            return {
                ...state,
                loading: true,
            };
        },
        [getVaccineDoses.pending.type]: (state) => {
            return {
                ...state,
                loading: true,
            };
        },

        //getvaccindoses
        [getVaccines.fulfilled.type]: (state, action) => {
            return {
                ...state,
                loading: false,
                vaccines: action.payload,
            };
        },
        [getVaccines.rejected.type]: (state) => {
            return {
                ...state,
                loading: true,
            };
        },
        [getVaccines.pending.type]: (state) => {
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
        [putVaccineDose.rejected.type]: (state) => {
            return {
                ...state,
                loading: true,
            };
        },
        [putVaccineDose.pending.type]: (state) => {
            return {
                ...state,
                loading: true,
            };
        },
    },
});

export default vaccineDosesSlice.reducer;
