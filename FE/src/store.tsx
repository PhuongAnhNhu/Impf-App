import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/users';
import patientsReducer from './reducers/patients';
import appointmentsReducer from './reducers/appointments';
import vaccineDosesReducer from './reducers/vaccineDoses';

export const store = configureStore({
    reducer: {
        usersState: usersReducer,
        patientsState: patientsReducer,
        appointmentsState: appointmentsReducer,
        vaccineDosesState: vaccineDosesReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
