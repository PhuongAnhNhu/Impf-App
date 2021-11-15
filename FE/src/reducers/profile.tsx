import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: ProfileState = {
    profile: { username: "", firstname: "", lastname: "", isAdmin: false },
    loading: false,
};

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
         //getProfile
         [getProfile.fulfilled.type]: (state, action) => {
            return {
                ...state,
                loading: false,
                profile: action.payload,
            };
        },
        [getProfile.rejected.type]: (state) => {
            return {
                ...state,
                loading: true,
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