import React, { createContext } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [state, setState] = React.useState({user: props.value});
    return (
        <UserContext.Provider value={{state}}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;