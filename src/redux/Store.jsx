import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/CartSlice";

//inside this configure store there is an object.
export const store=configureStore({
    reducer:{
        cart : CartSlice.reducer,
    }
});