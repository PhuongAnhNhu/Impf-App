import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState: UsersState = { users: [], loading: false, loggedIn: false };


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

//GET USERS : /api/users
export const getUserList = createAsyncThunk('users/getUserList', async () => {
    const response = await axios.get<UserListResponse>('/api/users');
    return response.data.collection;
});

//POST USER : 
export const postUser = createAsyncThunk('users/postUser', async (payload: PostUserPayload, thunkAPI) => {
    const response = await axios.post('/api/users', payload);
    thunkAPI.dispatch(getUserList());
    return response.data.collection;
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

        //login
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

        //logout
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

        //getuserlist
        [getUserList.fulfilled.type]: (state, action) => {
            return {
                ...state,
                loading: false,
                users: action.payload
            };
        },
        [getUserList.rejected.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
        [getUserList.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },

        //postuser
        [postUser.fulfilled.type]: (state) => {
            return {
                ...state,
                loading: false,
            };
        },
        [postUser.rejected.type]: state => {
            return {
                ...state,
                loading: false,
            };
        },
        [postUser.pending.type]: state => {
            return {
                ...state,
                loading: true,
            };
        },
    },
});





export default usersSlice.reducer;
