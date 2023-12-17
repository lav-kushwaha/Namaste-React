import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

//Inside store we are creating different slice.(for ex - addItems,removeItems,clearCart).
const appStore = configureStore({
    //This is app reducer which is contain small reducer.
    reducer:{
        //It is a small reducer for each slice.
        //here is only one slice which is cart.
        cart:cartReducer,
    }
})

export default appStore;