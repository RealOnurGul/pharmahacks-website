import React from 'react';
import { TickerCell } from '../components/TickerCell';
import { TickerSeparator } from '../components/TickerSeparator';
import { useTicker } from '../components/useTicker';

import '../styles/Ticker.css';

export const Ticker = ({ futureDate }) => {
    const { days, hours, minutes, seconds, isTimeUp } = useTicker(futureDate);
    const tickerContents = isTimeUp ? (
        <div className="timeIsUp">Applications will be available approaching the next event!</div>
    ) : (
        <>
            <TickerCell value={days} label="Days" color="red"/>
            <TickerSeparator />
            <TickerCell value={hours} label="Hours" color="blue"/>
            <TickerSeparator />
            <TickerCell value={minutes} label="Minutes" color="white"/>
            <TickerSeparator />
            <TickerCell value={seconds} label="Seconds" color="yellow"/>
        </>
    );

    return (
        <div className="tickerShell">
            { tickerContents }           
        </div>              
    );
}
