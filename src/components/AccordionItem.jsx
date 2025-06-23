import React from 'react';
import '../styles/accordion.css';

export default class AccordionItem extends React.Component{
    constructor(props) {
        super(props)
        this.toggleActive= this.toggleActive.bind(this);
    }

    state = {
        active : false,
    }

    toggleActive() {
        const curState = this.state.active;
        console.log(this.state.active)
        this.setState({ active: !curState });
    }

    render() {
        return(
            <>
                <div className={this.state.active ? 'accordion-container-long': 'accordion-container-short'} onClick={this.toggleActive}>
                    <div className="accordion-title">{this.props.title}</div>
                    <div className={this.state.active ? 'accordion-text': 'accordion-text-hidden'}>
                        {this.props.text}
                    </div>
                </div>
            </>
        )
    }
}