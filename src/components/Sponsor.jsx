import React from 'react';
import '../styles/Sponsor.css';

export default class Sponsor extends React.Component{
    constructor(props){
        super(props);
        this.state={
            /* "G" = GOLD ; "S" = Silver ; "B" = Bronze */
            tierColors:{
                "G":"#FFD700",
                "S":"#C0C0C0",
                "B": "#cd7f32",
                "O": "rgba(66, 0, 255, 0.5)",
                "P": "rgb(225, 55, 55)",
            },
            tierNames:{
                "G":"Gold",
                "S":"Silver",
                "B":"Bronze",
                "O":"Startup",
                "P":"Academic",
            }
        }
    }
    render(){
    return(
        <div className="sponsor-container">
            <span className="sponsor-year">{this.props.year}</span>
            <div className="sponsor-image">{
                this.props.logo?
                <img src={"/images/sponsors/"+this.props.logo} alt={this.props.name}/>:
                null
            }
            </div>
            <div className="sponsor-tier">
                <svg viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.7633 17.85L26.2243 20.1862C26.1141 20.6626 25.6899 21 25.2009 21H4.20078C3.71182 21 3.28762 20.6626 3.17737 20.1862L2.63837 17.85H26.7633Z"
                    fill={this.state.tierColors[this.props.tier]}/>
                    <path d="M29.3739 6.53616L27.2476 15.75H2.15319L0.0269297 6.53616C-0.0668709 6.12946 0.08888 5.70596 0.423832 5.45711C0.759484 5.20791 1.20994 5.18236 1.57114 5.38851L8.06998 9.10203L13.8265 0.467828C14.0137 0.186777 14.3242 0.0131756 14.6616 0.000925576C15.0021 -0.0134245 15.322 0.139876 15.5292 0.405878L22.2801 9.08523L27.7681 5.42666C28.1265 5.18936 28.5934 5.19181 28.9472 5.43646C29.3015 5.68041 29.4702 6.11686 29.3739 6.53616Z"
                    fill={this.state.tierColors[this.props.tier]}/>
                </svg>
                <span className="sponsor-tooltip">{this.state.tierNames[this.props.tier]+" sponsor"}</span>
            </div>
        </div>
    )}
}