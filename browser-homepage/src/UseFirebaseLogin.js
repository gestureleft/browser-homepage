import { useEffect, useState } from 'react';
import firebase from 'firebase';
import { firebaseConfig } from './AppConfig.js';

export const useFirebaseLogin = (doLogIn) => {

    const [state, setState] = useState({ user: null, loggedIn: false });

    useEffect(() => {
        setState(state => ({ user: state.user, loggedIn: false }));
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();

        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // ...
            setState({user: result.user, loggedIn: true});
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }, [doLogIn]);

    return state;
}