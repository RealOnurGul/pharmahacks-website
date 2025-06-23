import React from 'react';
import { useState } from 'react';
import { add } from 'date-fns';

import { Ticker } from '../components/Ticker';

import '../styles/Countdown.css';

const calculateTimeLeft = () => {

  let difference = +new Date(`03/02/2024`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24 + 12),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
}

const futureDate = add(new Date(), {

  days: calculateTimeLeft().days,
  hours: calculateTimeLeft().hours,
  minutes: calculateTimeLeft().minutes,
  seconds: calculateTimeLeft().seconds
});

function Countdown() {
  const [tickerVisible] = useState(true);
  const tickerEl = tickerVisible ? <Ticker futureDate={futureDate} /> : null;
  // const toggleText = tickerVisible ? 'Hide Countdown': 'Show Countdown';

  return (
    <div className="pageContainer">
      {/*<div className="title">pharmahacks is now Live!</div>*/}
      {/*<div className="title">Submissions are Due in</div>*/}
      { tickerEl }
      {/* <button 
        className="toggleButton" 
        onClick={() => setTickerVisible(prev => !prev) }
      >
        { toggleText }
      </button> */}
    </div>  
  );
}

export default Countdown;