import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/users';
import patientsReducer from './reducers/patients';

export const store = configureStore({
    reducer: { usersState: usersReducer, patientsState: patientsReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
