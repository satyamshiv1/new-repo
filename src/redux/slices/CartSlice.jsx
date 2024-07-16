import { createSlice } from "@reduxjs/toolkit";


export const CartSlice= createSlice({
    name: 'cart',
    initialState:[],
    reducers: {
        // reducers function always takes 2 thing as input first is state and second is action.
        //jo bhi maine input send kiya hai na is function ko wo ye payload.action darshata hai.
        add: (state,action) => {
                state.push(action.payload);
        },
        //for removing we have to filter that post for that particular that ID that's why we send the id only.
        //here we have to return the filtered array bcoz push directly affects the state array but filter doesn't.
        remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
})

export const { add, remove } = CartSlice.actions;

export default CartSlice.reducer;