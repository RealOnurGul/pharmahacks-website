import React from 'react';
import '../styles/App.css';
// import Welcome from '../containers/Welcome';
import Countdown from '../containers/Countdown';
// import About from '../containers/About';
import Sponsors from '../containers/HackSponsors';
import FAQ from '../containers/FAQ';
import Contact from '../containers/Contact';
import HackathonWelcome from '../containers/HackathonWelcome'

export default class App extends React.Component{
  render(){
    return (
      <div className="App">

        
        <HackathonWelcome />
        <Countdown />
        {/* <About /> */}
        <Sponsors/>
        <FAQ />
        <Contact/>
    </div>
      
    );
  }
}
