/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

/* Import styles */
import styles from './UrlGifs.module.css';


const UrlGifs = ({src="gifs", href= "/", alt=""}) => {
    return (
        <a href={href} target="_blank">
            <img src={src} alt={alt} className={styles.gifs__img}/> 
        </a>
    );
}

export {UrlGifs};
