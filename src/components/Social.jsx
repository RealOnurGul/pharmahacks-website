import React from "react";
import "../styles/Social.css"

export default class Social extends React.Component{
    render(){
        return(
            <div className="social-container">
                <a className = "social-image" href={this.props.action}> 
                    <img src={this.props.value} alt={this.props.label}/>
                </a>
            </div>
        )
    }
}