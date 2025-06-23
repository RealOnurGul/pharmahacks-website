import React from 'react';
import '../styles/App.css';
import '../styles/Event2025.css';
import Event2025Container from '../containers/Event2025';

export default class Event2025 extends React.Component {
  render() {
    return (
      <div className="App">
        <Event2025Container />
      </div>
    );
  }
} 