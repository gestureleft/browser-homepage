/*
    Contains the presentation for the Daily NASA image
*/
import './DailyPicture.css'

import React from 'react';

import './DailyPicture.css';

function DailyPicture({imageData, handleDismiss}) {

    return (
        <div className="daily-picture-image-container">
            <div className="daily-picture-header">
                <h4>Photo of the day</h4>
                <button onClick={() => handleDismiss()}><h4>X</h4></button>
            </div>
            <img id="daily-picture" src={imageData.hdurl} alt={imageData.description}></img>
        </div>
    );
}

export default DailyPicture;