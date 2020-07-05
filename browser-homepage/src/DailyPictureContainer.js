/*
    Contains the logic for fetching the NASA Daily Picture, and passing it to DailyPicture
*/

import React from 'react';

import DailyPicture from './DailyPicture.js';

import { useFetchNasaImage } from './UseFetchNasaImage';

const DailyPictureContainer = () => {


    const {imageData, loading} = useFetchNasaImage('https://api.nasa.gov/planetary/apod?api_key=MQ3fdEwBjHpJaX8bEboo4f8XZPVM58hy7OsoRql3');
    const [showImage, setShowImage] = React.useState(true);

    let renderContent = "";

    if(showImage) {
        renderContent = loading ? "Loading.." : <DailyPicture imageData={imageData} handleDismiss={() => setShowImage(false)}/>
    }

    return (
        <div>
            {renderContent}
        </div>
    );
}

export default DailyPictureContainer;