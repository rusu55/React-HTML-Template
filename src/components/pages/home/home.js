import React, {useState, useEffect, useContext} from "react"
import { Helmet } from "react-helmet-async";
import { connect } from "react-redux";

import PageContainer from "../pages-parts/pageContainer";
import AboutImage from "../pages-parts/aboutImage";
import Footer from "../pages-parts/footer/footer";
import Modal from "../pages-parts/modal";
import EmailForm from "../pages-parts/forms/emailForm";
import { openModal } from "../../../store/slices/modalSlice";
import Destinations from "./destinations/destinations";
import Services from "./services/services";


const Home =({modal:{modalStatus}, openModal}) =>{
    
    const [state] = useState({
        heading: 'About Us',
        pageHeading: 'world best travel agencies',
        message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    });

    useEffect(()=>{
        window.scrollTo(0,0)       
    }, [])
    return(
        <>    
            <Helmet>
                <title>About page</title>
				<meta name='description' content='travel friends about page' />
            </Helmet>    
            <input type='button'  className='btn_dark' value='Send'  onClick={openModal}/>
            <Modal>
               <EmailForm/>
            </Modal>
            <PageContainer data={state}>
                <AboutImage />
            </PageContainer>
            <Services />
            <Destinations />
            <Footer />
        </>
    )
}

const mapStateToProps = (state) =>({
    modal: state.modalSlice
})
export default connect(mapStateToProps, {openModal})(Home)