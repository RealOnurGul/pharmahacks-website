import React from 'react';
import '../styles/HomeSponsor.css';

export default class CurrentSponsor extends React.Component {
    render() {
        return (
            <div className="sponsor-section current-sponsor">
              
                {this.props.logo ?
                    <img src={"/images/sponsors/" + this.props.logo} alt={this.props.name} /> :
                    null
                }
            </div>
        );
    }
}
