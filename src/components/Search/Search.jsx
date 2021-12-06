import { useState, useEffect } from "react";

//import styles
import styles from './Search.module.css';

/* Reveal */
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';

//import image
import imageMain from '../images/ilustra_header.svg';

//import image
import searchDark from '../images/icon-search-mod-noc.svg';
import searchLight from '../images/icon-search.svg';

const Search = (props) => {
  //useState
    const [inputValue, setInputValue] = useState("");
    const [autoComplete, setAutoComplete] = useState([]);

    const sendRequest = (e) => {
    e.preventDefault();
    };

  //handleInputValue
    const handleInputValue = (e) => {
    setInputValue(e.target.value);
    };

  //handleAutoComplete
    const handleAutoComplete = (inputValue) => {
    setInputValue(inputValue.name);
    setAutoComplete([]);
    };

  //handleButton (search)
    const handleButton = (e) => {
    props.setLoading(true);

    //Key api
    const apiKey = `2LROqcm9tlMkbJ50MwBKEEmwDVYPvhHg`;

    const gifsResults = fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${inputValue}&limit=15&offset=0&rating=g&lang=en`
    );
    gifsResults
        .then((response) => {
        props.setLoading(false);
        return response.json();
    })
        .then((responseJson) => {
        let isError = responseJson.data.length === 0;
        props.setError(isError);
        props.setSearchResults(responseJson.data);
    });

    setInputValue("");
    };

    useEffect(() => {
        const resultAutocomplete = fetch(
            `https://api.giphy.com/v1/gifs/search/tags?api_key=2LROqcm9tlMkbJ50MwBKEEmwDVYPvhHg&q=${inputValue}&limit=5`
        );
    resultAutocomplete
            .then((response) => response.json())
            .then((responseJson) => setAutoComplete(responseJson.data));
    }, [inputValue]);

    return (
        <>
            <div className={styles.search__container}>

                <Rotate top left>
                <h1 className={styles.search__title}>
                    ¡Inspírate y busca los mejores <span>GIFS!</span>
                </h1>
                </Rotate>

                <img className={styles.search__img} src={imageMain} alt="imagen gifs" />
                <form onSubmit={sendRequest} className={styles.search__user}>
                <input
                    placeholder="Buscar Gif"
                    type="text"
                    className={styles.search__input}
                    value={inputValue}
                    onChange={handleInputValue}
                />

                <button className={styles.search__button} onClick={handleButton}>
                <img src={searchLight} alt="logo de busqueda" />
                </button>
                </form>

                <div className={styles.search__containerList}>
                    {autoComplete.map((inputValue, i) => {
                        return (
                <p
                onClick={() => handleAutoComplete(inputValue)}
                className={styles.search__autocomplete_item}
                key={i}
                >
                {inputValue.name}
                </p>
            );
            })}
        </div>
        </div>
    </>
    );
};

export { Search };
