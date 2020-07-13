import React, { useContext } from 'react';
import './Toolbar.css';

import { UserContext } from '../contexts/UserContext.js';

const Toolbar = () => {
    const user = useContext(UserContext).user;
    return (
        <div className="toolbar">
            <form className="google-search-form" action="https://www.google.com/search" method="GET">
                <label className="google-search-label">Google</label>
                <input className="google-search-input" type="text" name="q"></input>
                <input className="google-search-button" type="submit" value="Search"></input>
            </form>
            <div className="profile-picture-container">
                <img className="profile-picture" src={user.photoURL} />
            </div>
        </div>
    );
}

export default Toolbar;