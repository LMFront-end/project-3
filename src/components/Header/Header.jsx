import React from "react";

//Import component
import {LinkLogo} from '../LinkLogo/LinkLogo';

//Import styles
import styles from './Header.module.css';

//import images

import darkTheme from '../images/logo-mobile-modo-noct.svg';

import lightTheme from '../images/logo-desktop.svg';

const Header = (props) => {
  const handleDarkTheme = () => {
    props.setDark(!props.isDark);
  };

  return (
    <header className={styles.header}>
      {props.isDark ? (

    <LinkLogo src={darkTheme} alt="logo-darkTheme" />
    ) : (
    <LinkLogo src={lightTheme} alt="logo-darkTheme" />   
    ) 
    }
    <button className={styles.header__button}onClick={handleDarkTheme}>{` ${
        props.isDark ? "Light 🌞" : "Dark 🌜"
        } Mood `}</button>
    </header>
  );
};

export {Header}

//other alternative for logo

/*  <img className={styles.header_img}src={darkTheme} alt="logo-darkTheme" />
export { Header };

<img className={styles.header__img} src={lightTheme} alt="logo-lightTheme" /> */
