import firebase from 'firebase';
import { useEffect } from 'react';

export const useAddItemToFirebase = (newItem) => {

    useEffect(() => {
        const todosFbRef = firebase.firestore().collection('todos').doc().set({
            user: user.uid,
            todo: newItem
        });
    }, [newItem]);
}