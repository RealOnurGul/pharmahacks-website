import React from 'react';
import '../styles/BlobCell.css';

export default class BlobCell extends React.Component{
    constructor(props){
        super(props);
        let from, to, idle;
        if(this.props.from && this.props.to){
            from=this.props.from;
            to=this.props.to;
            idle=this.props.idle
        }else{
            from="M0.313231 331.866C-3.69118 276.947 58.9697 208.363 104.5 177C175.945 127.787 285.043 161.231 342 226.5C371.647 260.473 400.336 288.042 410.5 331.866C422.686 384.407 385.183 439.049 356 484.5C316.587 545.883 251.766 555.83 181 537C129.5 523.297 93.5 519.5 41 460.5C7.9055 423.308 3.91934 381.322 0.313231 331.866Z";
            to="M107.43 282.093C103.425 227.174 67.5712 154.799 97.9297 108.593C177.43 -12.4069 290.01 47.4368 318.93 129.093C344.43 201.093 308.766 284.269 318.93 328.093C331.115 380.634 333.666 457.629 318.93 509.593C299.93 576.593 188.93 605.343 166.43 594.093C143.93 582.843 103.242 557.917 84.9298 481.093C64.4298 395.093 114.977 385.593 107.43 282.093Z";
            idle="M28 325C23.9956 270.081 71.9696 217.863 117.5 186.5C188.945 137.286 297.543 154.731 354.5 220C384.147 253.973 382.836 297.176 393 341C405.186 393.541 383.683 450.049 354.5 495.5C315.087 556.883 251.766 555.83 181 537C129.5 523.297 99.4999 510 46.9999 451C13.9054 413.808 31.6061 374.456 28 325Z";
        }
        this.state={from,to,idle,active:false}
    }
    componentDidUpdate(){
        if(this.state.active){
            document.getElementById("morphStart").beginElement();
        }else{
            document.getElementById("morphEnd").beginElement();
            document.getElementById("idleAnimation").beginElement();
        }
    }

    render(){return(
        <div className="blob-cell" onMouseEnter={()=>{this.setState({active:true})}} onMouseLeave={()=>{this.setState({active:false})}}>
            <svg viewBox="0 0 413 697" fill="none" xmlns="http://www.w3.org/2000/svg">
                <clipPath id="theClippingPath" > 
                    <path d={this.state.from}>
                        <animate id="morphStart" dur="0.1s" attributeName="d" 
                        calcMode="spline"
                        keySplines="0.1 0.56 0.84 0.28"
                        fill="freeze"
                        values={this.state.from+";"+this.state.to} />
                        <animate id="morphEnd" dur="0.1s" attributeName="d" 
                        calcMode="spline"
                        keySplines="0.1 0.56 0.84 0.28"
                        fill="freeze"
                        values={this.state.to+";"+this.state.from} />
                        <animate id="idleAnimation" dur="8s" attributeName="d" 
                        calcMode="spline"
                        keySplines="0.33 0 0.33 1; 0.33 0 0.33 1"
                        repeatCount="indefinite"
                        begin="2s"
                        values={this.state.from+";"+this.state.idle+";"+this.state.from } />
                    </path>
                </clipPath>
                <image xlinkHref="/images/blobcell/marble_2.png" className="b-background" clipPath="url(#theClippingPath)"></image>
            </svg>

        </div>
    )}
}