import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Component/redux_Slice/cartSlice"


const appStore = configureStore(
    {
        reducer: {
            cart: cartReducer,
        }
    }
);

export default appStore;