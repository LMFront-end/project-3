//import styles
import styles from './Results.module.css';

//import reveal
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';

//Import components
import {Error} from '../Error/Error';

import {Spinner} from '../Spinner/Spinner';



import React from 'react'

const Results = (props) => {
    return (
        <div className={styles.results}>
            {props.searchResults.length === 0 && props.error === false ? (
                <Slide left>
                <h3>¡No te pierdas los mejores trending semanales!</h3>
                </Slide>
            ) : null}


        {props.loading ? (
            <div>
            {" "}
            <Spinner />
            </div>
        ) : null}

        <div className={styles.container__results}>

            <h3>Resultados de tu busqueda</h3>
        <div className={styles.container__gifs}>
            {props.searchResults.map((gif, i) => {
            return (

                <LightSpeed left>
                <a className={styles.container__gifs} href={gif.url} target="blanck">
                    <img src={gif.images.downsized.url} key={i} alt="gif animado" />
                </a>
                </LightSpeed>
            );
        })}
        </div>
        </div>
    {props.error ? <Error /> : ""}
</div>
    )
}

export {Results}
