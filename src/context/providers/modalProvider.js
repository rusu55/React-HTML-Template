import { useState } from "react";
import ModalContext from "../modalContext";

const ModalProvider = (props) =>{
    
    const [state, dispatch] = useState({modalStatus: false})

    const openModal =() =>{
        dispatch({modalStatus: true})
    }
    const closeModal = () =>{
        dispatch({modalStatus: false})
    }

    return(
        <ModalContext.Provider value={({
            state,
            dispatch,
            openModal,
            closeModal
        })}>{props.children}           
        </ModalContext.Provider>
    )
}

export default ModalProvider