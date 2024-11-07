import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    items: [],
};

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            console.log(action);
            const isExist = state.items.some(item => item.id === action.payload.id);
            if (isExist) {
                state.items = state.items.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                state.items = [...state.items, { ...action.payload, quantity: 1 }];
            }
            alert("add item cart success");
        },
        removeCartItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    },


});

export const { addItemToCart, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
