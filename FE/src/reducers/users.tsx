import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface UserState {
    users: any[];
    loading: boolean;
    loggedIn: boolean;
}

const initialState: UserState = { users: [], loading: false, loggedIn: false };

interface LoginPayload {
    username: string;
    password: string;
}

//Login
export const login = createAsyncThunk('users/login', async (payload: LoginPayload) => {
    const response = await axios.post('/login', payload);
    return response.data;
});

//Logout 
export const logout = createAsyncThunk('users/logout', async () => {
    const response = await axios.post('/logout');
    return response.data;
});

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [login.fulfilled.type]: state => {
            return {
                ...state,
                loggedIn: true,
                loading: false,
            };
        },
        [login.rejected.type]: state => {
            return {
                ...state,
                loggedIn: false,
                loading: false,
            };
        },
        [login.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
        [logout.fulfilled.type]: state => {
            return {
                ...state,
                loggedIn: false,
                loading: false,
            };
        },
        [logout.rejected.type]: state => {
            return {
                ...state,
                loggedIn: false,
                loading: true,
            };
        },
        [logout.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
    },
});





export default usersSlice.reducer;
