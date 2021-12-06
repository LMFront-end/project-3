import { useState, useEffect } from 'react';

const UseGifs = ({ endpoint = "trendings", limit = 15, q = "" } = {}) => {

    const [gifs, setGifs] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    //API KEY AND URL

    const apiKey = `2LROqcm9tlMkbJ50MwBKEEmwDVYPvhHg`;

    const url = `https://api.giphy.com/v1/gifs/${endpoint}?api_key=${apiKey}&q=${q}&limit=${limit}&lang=en`;


    //REQUEST

    const fetchData = async() => {

        try {

            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();

            setGifs(data.data);
            setLoading(false);

        } catch (error) {
            setError(error.message);
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { gifs, loading, error };
}


export { UseGifs };