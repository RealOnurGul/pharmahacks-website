import React from 'react';
import '../styles/TickerCell.css';

export const TickerCell = ({ label, value, color}) => {
    const formattedValue = value < 10 ? `0${value}`: value.toString();

    return (
        <div className={"tickerCell " + color}>
                <span className="tickerCellValue">{ formattedValue }</span>
                <span className="style.tickerCellLabel">{ label }</span>
            
        </div>
    );
}