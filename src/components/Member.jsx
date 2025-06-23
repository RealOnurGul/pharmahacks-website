import React from 'react';
import '../styles/Member.css';

export default class Member extends React.Component {
    render() {
        const { img, n, position, field, className } = this.props;
        return (
            <div className={`border-ring ${className}`}> {/* Add wrapper div for the border ring */}
                <div className="member-container">
                    <img src={`/images/members/${img}`} alt={n} />
                    <div>
                        <span>
                            <div>{n}</div>
                            <div className="m-position">{position}</div>
                            <div className="m-field">{field}</div>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
