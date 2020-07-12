import React, { useContext } from 'react';
import './Toolbar.css';

import { UserContext } from '../contexts/UserContext.js';

const Toolbar = () => {
    const user = useContext(UserContext).user;
    console.log(user);
    return (
        <div className="toolbar">
            <form className="google-search-form" action="https://www.google.com/search" method="GET">
                <input className="google-search-input" type="text" name="q"></input>
                <input type="submit"></input>
            </form>
            <div className="profile-picture-container">
                <img className="profile-picture" src={user.photoURL} />
            </div>
        </div>
    );
}

export default Toolbar;