import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import cartReducer from './cartSlice';

const persistConfig = {
  key: 'root', // The key to use for the root state in storage
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const appStore = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});

export const persistor = persistStore(appStore);

export default appStore;

//npm install redux-persist
// npm install redux-persist-transform-immutable



// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from './cartSlice'

// //Inside store we are creating different slice.(for ex - addItems,removeItems,clearCart).
// const appStore = configureStore({
//     //This is main reducer which is contain all small reducer.
//     reducer:{
//         //It is a "small reducer(cartReducer)" for each slice(cart).
//         //here is only one slice which is cart.
//         cart:cartReducer,
//     }
// })

// export default appStore;