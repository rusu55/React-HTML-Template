import React from "react";
import FooterIntro from './footerIntro'
import FooterLInks from "./footerLinks";

const Footer = ()=>{
    const styleFooter ={
        background: 'url(/assets/footer/footer.jpg)',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
    }
    return(
        <>
            <footer className="footer" style={styleFooter}>
                <div className="footer__container">
                    <div className="container">
                        <div className="footer__container__block">
                            <div className="row ml-minus-15 mr-minus-15"> 
                                <div className="col-6 p-15">
                                    <FooterIntro />
                                </div>
                                <div className="col-6 p-15">
                                    <FooterLInks />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer