import { useEffect, useState } from 'react';

export const useFetchNasaImage = (url) => {

    const [state, setState] = useState({imageData: null, loading: true});

    useEffect(() => {
        setState(state => ({imageData: state.imageData, loading: true}));
        
        fetch(url)
            .then(response => response.json()
            .then(responseJson => {
                setState({imageData: responseJson, loading: false});
        }));
    }, [url]);

    return state;
}