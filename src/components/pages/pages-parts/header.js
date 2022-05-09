import { useState } from 'react'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import { createBrowserHistory } from 'history'

const Header =()=>{

    const [state] = useState({
        logo: 'assets/images/logo.png',
        video: 'assets/videos/header.mp4',
        poster: 'assets/images/screen.png'
    });

    const history = createBrowserHistory();
    const goToHome = () =>{
        history.push('/')
    };


    return(
        <div className="header">    
            <div className='container'>
                <div className='header__logo'>
                    <LazyLoadImage src={state.logo} alt="Logo"></LazyLoadImage>
                </div>
            </div>        
            <div className='header_video'>
                    <video
                        src={state.video}
						autoPlay
						loop
						muted
						poster={state.poster}></video>                    
            </div>
        </div>
    )
}

export default Header