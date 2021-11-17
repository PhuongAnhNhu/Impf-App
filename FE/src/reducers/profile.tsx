import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVaccines } from './vaccines';

const initialState: ProfileState = {
    profile: { username: "", firstname: "", lastname: "", isAdmin: false },
    isLoggedIn: false,
    loading: false,
    initialLoaded:false,
};

//Login
export const login = createAsyncThunk('users/login', async (payload: LoginPayload, thunkAPI) => {
    const response = await axios.post('/login', payload);
    thunkAPI.dispatch(getProfile());
    thunkAPI.dispatch(getVaccines());
    return response.data;
});

//Logout
export const logout = createAsyncThunk('users/logout', async () => {
    const response = await axios.post('/logout');
    return response.data;
});

//GET Profile : /me
export const getProfile = createAsyncThunk("users/getProfile", async () => {
    const response = await axios.get("/me");
    return response.data.item;
});

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: {
         //login
         [login.fulfilled.type]: state => {
            return {
                ...state,
                isLoggedIn: true,
                loading: false,
            };
        },

        [login.rejected.type]: state => {
            return {
                ...state,
                isLoggedIn: false,
                loading: false,
            };
        },
        [login.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },

        //logout
        [logout.fulfilled.type]: state => {
            return initialState;
        },
        [logout.rejected.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
        [logout.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
         //getProfile
         [getProfile.fulfilled.type]: (state, action) => {
            return {
                ...state,
                loading: false,
                isLoggedIn: true,
                profile: action.payload,
                initialLoaded:true,
            };
        },
        [getProfile.rejected.type]: (state) => {
            return {
                ...state,
                loading: false,
                initialLoaded:true,
            };
        },
        [getProfile.pending.type]: (state) => {
            return {
                ...state,
                loading: true,
            };
        },
    }
});

export default profileSlice.reducer;