import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";

import {setToggle} from '../../../store/slices/toggleSlice';

const Toggle =() =>{  
    const {toggle} = useSelector(state=> state?.toggleSlice)   
    const dispatch = useDispatch() 
    return(
        <div 
        className={toggle ? 'toggle-close' : 'toggle-open'}     
        onClick={() => dispatch(setToggle())}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Toggle 