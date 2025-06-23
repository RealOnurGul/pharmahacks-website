import React from 'react';
import '../styles/HackSponsors.css';
import Sponsor from '../components/Sponsor';
// import NewSponsor from '../components/NewSponsor';

export default class HackSponsors extends React.Component{
    render(){
    return(
        <div className="ha-sponsors-container" id = "sponsors">
            <div className="ha-filler-background" />
              <div className='ha-sponsors-background'>
                <div className="ha-sponsors-text">
                    <span className="ha-sponsors-title">Sponsors</span>
                    <div className="ha-sponsors-details">Our events are made possible thanks to sponsors. As a sponsor, you'll have the opportunity to present a challenge, have your own sponsorship booth, host workshops, and/or recruit talented individuals. We offer a platform where sponsors can observe first hand the growth of our participants throughout the weekend and recruit exceptional hackers.
                      <span> If you want to support us and bring students together for this year's hackathon, check out our packages</span> <a href = "/sponsor.pdf" target="_blank" rel="noopener noreferrer">here.</a>
                    </div>
                </div>
                <div className="ha-individual-sponsor">
                    {/* <div className="year-titles" id = "current">Current</div> */}
                    
                    <a href="https://www.mcgill.ca/science/" target="_blank" rel="noopener noreferrer">
                      <Sponsor  year="2024" logo="mcg_fac_science_rgb_red_ver_en-removebg-preview.png"/>
                    </a> 
                    <a href="https://www.mcgill.ca/pharma/" target="_blank" rel="noopener noreferrer">
                      <Sponsor  year="2024" logo="mcgillPharma.png"/>
                    </a> 
                    <a href="https://www.wolframalpha.com/" target="_blank" rel="noopener noreferrer">
                      <Sponsor  year="2024" logo="wolfram-corporate-logo-stacked-med-removebg-preview.png"/>
                    </a> 
                    <a href="https://www.mcgill.ca/epi-biostat-occh/" target="_blank" rel="noopener noreferrer">
                      <Sponsor  year="2024" logo="McGill-EBOH-logo-removebg-preview.png"/>
                    </a>
                    <a href="https://susmcgill.ca/" target="_blank" rel="noopener noreferrer">
                      <Sponsor  year="2024" logo="SUSLogoFiles_BlackLong-removebg-preview.png"/>
                    </a>
                    <a href="https://ssmu.ca/" target="_blank" rel="noopener noreferrer">
                      <Sponsor  year="2024" logo="Logo-SSMU-Transparency-English-2013-2014-removebg-preview.png"/>
                    </a>
                    <a href="https://www.mcgill.ca/oss/" target="_blank" rel="noopener noreferrer">
                      <Sponsor  year="2024" logo="normalDownload-removebg-preview.png"/>
                    </a>
                    <a href="https://district3.co/" target="_blank" rel="noopener noreferrer">
                      <Sponsor  year="2024" logo="AHClvILvRZA1AAAAAElFTkSuQmCC-removebg-preview.png"/>
                    </a>
                    <a href="https://dana.dexterra.com/" target="_blank" rel="noopener noreferrer">
                      <Sponsor  year="2024" logo="MKT-IFM-DECAL010-Dana_Hospitality_Logo-Colour-Orange_1-removebg-preview.png"/>
                    </a>
                    <a href="https://www.memrizz.com/" target="_blank" rel="noopener noreferrer">
                      <Sponsor  year="2024" logo="image-removebg-preview.png"/>
                    </a>
                    <a href="https://www.mcgill.ca/neurology-neurosurgery/research/douglas-mental-health-university-institute" target="_blank" rel="noopener noreferrer">
                      <Sponsor  year="2024" logo="logo-douglas40_0-removebg-preview.png"/>
                    </a>
                    <a href="http://www.aebinum.umontreal.ca/" target="_blank" rel="noopener noreferrer">
                      <Sponsor  year="2024" logo="Messages_Image3267879898.jpeg" name="AEBINUM"/>
                    </a>
                    <a href="https://www.chefoncalldelivery.com/" target="_blank" rel="noopener noreferrer">
                      <Sponsor  year="2024" logo="logo-chef-on-call-removebg-preview.png"/>
                    </a>
                    

                    {/* PAST SPONSORS */}
                    {/* <a href="https://www.pfizer.com" target="_blank" rel="noopener noreferrer">
                      <Sponsor tier="B" year="2022" logo="pfizer.png"/>
                    </a>
                    <a href="https://www.talent-accelerator.com/medical-technology-talent-accelerator/home" target="_blank" rel="noopener noreferrer">
                      <Sponsor tier="B" year="2022" logo="medtech.png"/>
                    </a> */}
                    {/* <a href="https://www.novartis.ca" target="_blank" rel="noopener noreferrer">
                      <Sponsor tier="G" year="2019" logo="novartis.png"/>
                    </a>
                    <a href="https://www.boehringer-ingelheim.ca" target="_blank" rel="noopener noreferrer">
                      <Sponsor tier="S" year="2019" logo="boehringer.png"/>
                    </a>
                    <a href="https://www.iqvia.com/" target="_blank" rel="noopener noreferrer">
                      <Sponsor tier="S" year="2019" logo="iqvia.png"/>
                    </a> */}
                    {/* <a href="mailto:contact@pharmahacks.com" target="_blank" rel="noopener noreferrer"><NewSponsor /></a>              */}
                    {/* <div className="year-titles" id = "previous">Previous</div>
                    <div className='previous-sponsors'> 
                        
                  </div> */}
                  </div>
              </div>
        </div>
    )}
}