import { useEffect, useState } from 'react';

export const useFetchNasaImage = (url) => {

    const [state, setState] = useState({url: null, loading: true});

    useEffect(() => {
        setState(state => ({url: state.url, loading: true}));
        fetch(url)
            .then(response => response.json()
            .then(responseJson => {
                setState({url: responseJson.hdurl, loading: false});
                console.log(responseJson.hdurl);
        }));
    }, [url]);

    return state;
}