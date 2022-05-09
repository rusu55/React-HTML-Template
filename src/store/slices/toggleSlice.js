import { createSlice } from '@reduxjs/toolkit';


const initialState ={
    toggle: false
}

const ToggleSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
       
        setToggle(state, action){
            
            return {
                ...state,
                toggle: !state.toggle 
            }
        },

       
    },
    
})

export const { setToggle } = ToggleSlice.actions
export default ToggleSlice.reducer