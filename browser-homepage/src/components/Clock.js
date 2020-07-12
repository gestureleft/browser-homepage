import React from 'react';
import "./Clock.css";

function Clock() {
    
    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    const [date, setDate] = React.useState(new Date().toLocaleDateString());

    let intervalID;

    React.useState(() => {
        intervalID = setInterval(
            () => tick(),
            1000
        );
        return function cleanup() {
            clearInterval(intervalID);
        }
    });

    function tick() {
        setTime(new Date().toLocaleTimeString());
        setDate(new Date().toLocaleDateString());
    }

    return (
        <div className="Clock">
            <h1>{time}</h1>
            <h2>{date}</h2>
        </div>
    );
}

export default Clock;