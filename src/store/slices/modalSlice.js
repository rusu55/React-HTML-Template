import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    modalStatus: false,
}

const ModalSlice = createSlice({
    name: "modal",
    initialState,
    reducers:{
        openModal(state, action){
            return {
                ...state,
                modalStatus: !state.modalStatus
            }
        },
        closeModal(state, action){
            console.log('mereg')
            return ''
        }
    }
})

export const { openModal, closeModal } = ModalSlice.actions
export default ModalSlice.reducer