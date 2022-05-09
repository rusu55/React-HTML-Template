import { createSlice } from "@reduxjs/toolkit";
import  {destinations} from '../../data/destinations'

const initialState = {
    destinations:[]
}

const DestinationsSlice = createSlice({
    name: 'destinations',
    initialState,
    reducers:{
        getDestinations(state, actions){
            return{
                ...state,
                destinations: destinations
            }
        }
    }
})

export const { getDestinations } = DestinationsSlice.actions
export default DestinationsSlice.reducer