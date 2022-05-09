import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { getDefaultMiddleware } from '@reduxjs/toolkit';


import toggleSlice from "./slices/toggleSlice";
import modalSlice from "./slices/modalSlice";
import destinationsSlice from "./slices/destinationsSlice";
import servicesSlice from "./slices/servicesSlice";

const reducer = combineReducers({
    toggleSlice, modalSlice, destinationsSlice, servicesSlice
})

const store = configureStore({    
    reducer,

    middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store