/* import hooks */
import {UseGifs} from '../../hooks/UseGifs';

/* components */
import {UrlGifs} from '../UrlGifs/UrlGifs'

/* Reveal */
import Bounce from 'react-reveal/Bounce';

/* import styles */
import styles from './Gifs.module.css';

const Gifs = () => {
    const {gifs, loading, error} = UseGifs({

        endpoint: "trending",
        limit: 15,
    });


    return(
        <div className={styles.container}>
            <Bounce left>
            <h3 className={styles.title__trendings}>Trendings</h3>
            </Bounce>
            
        <div className = {styles.gifs}>
            {error && <h2>Error</h2>}
            {loading && <h2>Loading...</h2>}

            <Bounce left>
            {!error && 
                !loading && 
                gifs.length && 
                gifs.map((gif) => 
                
                <UrlGifs src={gif.images.downsized_medium.url} href={gif.url} alt="gifs"  key={gif.id}/>)              
            }
            </Bounce>
        </div>
        </div>
    )
}


export {Gifs};

