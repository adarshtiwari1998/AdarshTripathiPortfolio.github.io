import React from 'react'
import Separator from '../../common/separator'
import SocialContact from '../../common/social-contact'
import "./contact.css"
function Contact() {
    return (
        <div className="contact">
         <Separator />
           <label className="section-title">Contact</label>
           <div className="contact-container">
            <div className="contact-left">
             <p>Want to get in touch? Contact me on any of the platform</p>
             <SocialContact />
            </div>
            <div className="download-resume">
                <a href={require("../../../assets/pdf/Adarsh-Tripathi-Resume-July-Updated.pdf").default}>
                <i class="fi-rr-cloud-download download-icon"></i>
                  Download Resume
                </a> 
            </div>
           </div>
        </div>
    )
}

export default Contact;
