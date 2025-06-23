import React from 'react';
// import Button from '../components/Button';
import '../styles/HackathonWelcome.css';
import NeuralNetwork from './NeuralNetwork';
import Typical from 'react-typical';

export default class Welcome extends React.Component{
    render(){return(
        <div className="hwelcome-container" id="welcome">
            <div className="hw-background-container">
                <NeuralNetwork />
            </div>
            <div className="hw-title-section">
                <div>
                    <Typical
                                    
                                    wrapper='b'
                                    steps={[
                                        '  HACK.', 2000,
                                        '  INNOVATE.', 2000,
                                        '  CONNECT.', 2000,
                                        'WELCOME TO PHARMAHACKS 2025', 2000,
                                    ]}
                    />
                </div>

            </div>
        </div>
    )}
}
