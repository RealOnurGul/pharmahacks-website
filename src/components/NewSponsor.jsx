import React from 'react';
import '../styles/Sponsor.css';
import '../styles/NewSponsor.css';

export default class NewSponsor extends React.Component{
    render(){
    return(
        <div className="sponsor-container new-sponsor">
            <div className="transition-background" />
            <div>
                <div className="become-sponsor">Become a<br/>sponsor</div>
                <svg width="59" height="21" viewBox="0 0 59 21" className="arrow-right" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line className="arrow-right" y1="10.4999" x2="57" y2="10.4999" stroke="#2D00AE" strokeWidth="3"/>
                    <path className="arrow-right" d="M49.6154 2.72264L57.6154 11.7226" stroke="#2D00AE" strokeWidth="3"/>
                    <path className="arrow-right" d="M49.6154 18.923L57.6154 9.92299" stroke="#2D00AE" strokeWidth="3"/>
                </svg>
            </div>
        </div>
    )}
}