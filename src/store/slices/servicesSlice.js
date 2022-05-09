import { createSlice } from "@reduxjs/toolkit";
import {services} from '../../data/services';

const initialState = {
    services: []
}

const ServicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers:{
        getServices(state, actions){
            return{
                ...state,
                services: services
            }
        }
    }
})

export const {getServices} = ServicesSlice.actions;
export default ServicesSlice.reducer