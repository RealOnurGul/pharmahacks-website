import React, { useState } from 'react';
import '../styles/AdPopup.css'; 

const AdPopup = ({ imageUrl, linkUrl }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        console.log("Closing popup"); // Debugging line
        setIsVisible(false);
    }

    if (!isVisible) return null;

    return (
        <div className="ad-popup">
            <div className="ad-content">
                <button onClick={handleClose} className="close-button">X</button>
                <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                    <img src={imageUrl} alt="Ad"/>
                </a>
            </div>
        </div>
    );
}

export default AdPopup;
