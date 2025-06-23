import React from 'react';
import '../styles/App.css';
import About from '../containers/About';
import Sponsors from '../containers/HomeSponsors';
import Contact from '../containers/Contact';
import Welcome from '../containers/Welcome';
import InstagramAnnouncementModal from '../components/InstagramAnnouncementModal'; // Ensure this path is correct

export default class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <InstagramAnnouncementModal />
        <Welcome />
        <About />
        <Sponsors />
        <Contact />
      </div>
    );
  }
}
