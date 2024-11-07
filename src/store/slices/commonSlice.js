import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCartOpen: false,
    isModalLoginOpen: true,
};

export const commonSlice = createSlice({
    name: 'commonSlice',
    initialState,
    reducers: {
        openLoginModal: (state) => {
            state.isModalLoginOpen = true;
        },
        closeLoginModal: (state) => {
            state.isModalLoginOpen = false;
        },
        toggleOpenCart: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
    },
});

export const { closeLoginModal, openLoginModal, toggleOpenCart } = commonSlice.actions;

export default commonSlice.reducer;
