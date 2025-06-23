import React from 'react';
import '../styles/Contact.css';
// import Button from '../components/Button';
import Social from '../components/Social';

export default class Contact extends React.Component{
    render(){
        return(
            <div className= "contact-container" id = "contact">
                {/* <div className= "contact-apply-section">
                    <div className = "contact-apply-title">
                        <span>Join the Team!</span>
                    </div>
                    <div className = "contact-apply-button">
                        <Button value="Apply now" color="red" action="https://docs.google.com/forms/d/e/1FAIpQLScoX3gSVKMg1yEoyZkjvcPtqChwtktEByFRoUPasfdc-n4N0w/viewform"/>
                    </div>
                </div> */}
                <div className= "contact-information-section">
                    <div className = "contact-information-address">
                        <span>Trottier Building, McGill University</span>
                        <span>3630 Rue University,</span>
                        <span>Montréal, QC H3A 0C6</span>
                        <div className='code-of-conduct'>
                        {/* <a id = "mlh-code-of-conduct" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer">
                            <span> MLH Code of Conduct</span>
                        </a> */}
                        </div>
                    </div>
                    <div className= "contact-information-email">
                        <span><a href="mailto:contact@pharmahacks.com">contact@pharmahacks.com</a></span>
                    </div>
                    <div className = "contact-information-social">
                        <span>Follow us</span>
                        <div className= "contact-information-social-media">
                        <Social value="/images/contact/facebook.png" action="https://www.facebook.com/StudentPharma/" label="Facebook"/>
                        <Social value="/images/contact/instagram.png" action="https://www.instagram.com/pharma.hacks/" label="Instagram"/>
                        <Social value="/images/contact/linkedin.png" action="https://www.linkedin.com/company/studentpharma/" label="LinkedIn"/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}