import React from 'react';
import '../styles/App.css';
import '../styles/Highlight.css';
import Highlight from '../containers/Highlight' ;

export default class Event extends React.Component {
  render() {
    return (
      <div className="App">
        < Highlight /> 
      </div>
    );
  }
}
