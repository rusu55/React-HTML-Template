import React, {useState, useEffect} from "react";
import { Helmet } from "react-helmet-async";

import PageContainer from "../pages-parts/pageContainer";
import ContactForm from "./contactForm";


const Contact =() =>{
    const [state] =useState({
        heading: 'Contact Us',
        pageHeading: 'Leave your message in the Contact Form',
        message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    })

    useEffect(() =>{
        window.scrollTo(0, 0)
    }, [])

    return(
        <>
            <Helmet>
                <title>Contact Page</title>
				<meta name='description' content='travel friends about page' />
            </Helmet>            
           <PageContainer data={state}>
                <ContactForm/>
           </PageContainer>
        </>
        
    )
}
export default Contact