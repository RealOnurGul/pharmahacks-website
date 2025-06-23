import React from 'react';
import '../styles/HomeSponsors.css';
import CurrentSponsor from '../components/CurrentSponsor';
import PreviousSponsor from '../components/PreviousSponsor';

export default class HomeSponsors extends React.Component {
  render() {
    return (
      <div className="sponsors-container" id="sponsors">
        <div className="filler-background" />
        <div className='sponsors-background'>
        <div className="sponsors-text">
            <span className="sponsors-title">Sponsors</span>
            <div className="sponsors-details">Our events are made possible thanks to sponsors. As a sponsor, you’ll have the opportunity to present a challenge, have your own sponsorship booth, host workshops, and/or recruit talented individuals. We offer a platform where sponsors can observe first hand the growth of our participants throughout the weekend and recruit exceptional hackers.
              <span> If you want to support us and bring students together for this year’s hackathon, check out our packages</span> <a href="/sponsor.pdf" target="_blank" rel="noopener noreferrer">here.</a>
            </div>
          </div>

          <div className="new-sponsors-section">
            <div className="year-titles">Current Sponsors</div>
            <div className="sponsor-logo-grid">
              {/* Current Sponsors Links */}
              <a href="https://www.admarebio.com/en/" target="_blank" rel="noopener noreferrer">
                <CurrentSponsor logo="admare.svg" name="adMare BioInnovations" />
              </a>
              <a href="https://district3.co" target="_blank" rel="noopener noreferrer">
                <PreviousSponsor logo="district.png" name="District 3" />
              </a>

              <a href="https://www.dominos.ca" target="_blank" rel="noopener noreferrer">
                <PreviousSponsor logo="dominos.png" name="Domino's" />
              </a>

              <a href="https://susmcgill.ca" target="_blank" rel="noopener noreferrer">
                <PreviousSponsor logo="sus.png" name="SUS" />
              </a>

              <a href="https://ssmu.ca" target="_blank" rel="noopener noreferrer">
                <PreviousSponsor logo="ssmu.png" name="SSMU" />
              </a>

              <a href="https://poulet-rouge.com" target="_blank" rel="noopener noreferrer">
                <PreviousSponsor logo="poulet_rouge.png" name="Poulet Rouge" />
              </a>

              <a href="https://www.mcgill.ca/pharma" target="_blank" rel="noopener noreferrer">
                <PreviousSponsor logo="pharma_mcgill.jpg" name="McGill Pharma" />
              </a>

              <a href="https://www.molecularforecaster.com" target="_blank" rel="noopener noreferrer">
                <PreviousSponsor logo="mfi_logo.png" name="Molecular Forecaster" />
              </a>

              <a href="https://www.mcgill.ca" target="_blank" rel="noopener noreferrer">
                <PreviousSponsor logo="large_mcgill.png" name="McGill" />
              </a>
              <a href="https://www.alliancecan.ca/en" target="_blank" rel="noopener noreferrer">
                <PreviousSponsor logo="digital_research_alliance.png" name="Alliance Canada" />
              </a>
              
              {/* ... Add more CurrentSponsor components as needed ... */}
            </div>
          </div>

          <div className="previous-sponsors-section">
            <div className="year-titles">Previous Sponsors</div>
            <div className="sponsor-logo-grid">
              {/* Previous Sponsors Links */}
          
              <a href="https://www.pfizer.com" target="_blank" rel="noopener noreferrer">
                <CurrentSponsor logo="pfizer.png" name="Pfizer" />
              </a>
              <a href="https://www.talent-accelerator.com/medical-technology-talent-accelerator/home" target="_blank" rel="noopener noreferrer">
                <PreviousSponsor logo="medtech_transparent.png" name="Medical Technology Talent Accelerator" />
              </a>
              
              {/* ... Add more PreviousSponsor components as needed ... */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
