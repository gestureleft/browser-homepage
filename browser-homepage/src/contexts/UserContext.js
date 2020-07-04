import React, { createContext } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [state, setState] = React.useState({user: null, isLoggedIn: false});

    return (
        <UserContext.Provider value={{...state}}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;