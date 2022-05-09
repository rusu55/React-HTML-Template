import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

import { setToggle } from "../../../store/slices/toggleSlice";


const NavBar =({toggle:{toggle}, setToggle}) =>{
    const location = useLocation()
    
    useEffect(()=>{
        setToggle()
    }, [location]);

    return(
        <>
            {toggle === true ? <div className="navLayer"></div> : '' }
            
            <div className={toggle === true ? 'nav nav--open' : 'nav nav--close'}>
                    <div className="nav__content">
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/contact">Contact</Link>
                        </li>
                    </div>
            </div>            
        </>
    )
}

const mapStateToProps = state =>({
    toggle : state.toggleSlice
})
export default connect(mapStateToProps,{setToggle})(NavBar)