import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: true,
    username: "Linh2",
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
