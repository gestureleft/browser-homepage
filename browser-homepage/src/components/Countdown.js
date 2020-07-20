import React, { useState, useContext, useEffect } from 'react';
import firebase from '../firebase';
import Calendar from 'react-calendar';

import './Countdown.css';
import { UserContext } from '../contexts/UserContext';


const useFetchCountdown = (user) => {

    let [countdownDate, setCountdownDate] = useState({ time: new firebase.firestore.Timestamp() });

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
    const days = (n.time.toDate().getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
    return (
        <div className="coutdown-component">
            <div className="countdown-container">
                {parseInt(days)} days left until birthday.
            </div>
            <div className="calendar-container">
                {/* <Calendar /> */}
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                </button>
            </div>
        </div>

    );
}

export default Countdown;