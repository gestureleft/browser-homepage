import React, { useState, useContext, useEffect } from 'react';
import firebase from '../firebase';

import './Countdown.css';
import { UserContext } from '../contexts/UserContext';

const useFetchCountdown = (user) => {

    let [ countdownDate, setCountdownDate ] = useState({time: new firebase.firestore.Timestamp()});

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection('countdowns').where('user', '==', user.uid).onSnapshot(
            data => {
                setCountdownDate(data.docs[0].data());
            }
        );
        return () => unsubscribe();
    }, [user]);

    return countdownDate;
}

const Countdown = () => {
    const user = useContext(UserContext).user;
    const n = useFetchCountdown(user);
    const days = (n.time.toDate().getTime() - new Date().getTime())/(1000*60*60*24)
    return (
        <div>
            {parseInt(days)} days left until birthday.
        </div>
    );
}

export default Countdown;