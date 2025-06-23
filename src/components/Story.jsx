import React from 'react';
import '../styles/Story.css';

export default class Story extends React.Component{
    render(){
        return(
            <div className="story-container">
                <img src={this.props.img} alt="Story" className="story-img" />
                <div className="story-text">
                   <span><i>{'"'+this.props.text+'"'}</i></span>
                </div>
            </div>
        )}
}