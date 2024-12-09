import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isLoggedIn: false,
    username: "",
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.username = action.payload;
        },
        logout: (state,) => {
            state.isLoggedIn = false;
            state.username = "";
        }
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
