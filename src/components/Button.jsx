import React from 'react';
import '../styles/Button.css';

export default class Button extends React.Component{
    render(){return(
        <a className={`button-container ${this.props.color} ${this.props.action === "mailto:contact@pharmahacks.com" ? "sponsor-btn" : ""}`} href={this.props.action} target="_blank" rel="noopener noreferrer">
            {this.props.value}
        </a>
    )}
}