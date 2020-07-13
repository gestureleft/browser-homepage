import React from 'react';
import firebase from '../firebase';
import './Countdown.css';

const Countdown = () => {
    const tStamp = new firebase.firestore.Timestamp();
    console.log(tStamp);
    const d = Date.now();
    console.log(d);
    return ("Hello from countdown");
}

export default Countdown;