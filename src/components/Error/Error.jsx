import React from 'react'

//import styles
import styles from './Error.module.css';


//import reveal
import Roll from 'react-reveal/Roll';


const Error = () => {
    return (
        <div className={styles.error__container}>

        <Roll left>
        <p className={styles.error__subtitle}>
            Lo sentimos, no hemos encontrado ningun gif con ese nombre...

            <br />

            ¡Intenta con otra palabra! {''}
        </p>
        </Roll>

        </div>
    )
}

export {Error}
