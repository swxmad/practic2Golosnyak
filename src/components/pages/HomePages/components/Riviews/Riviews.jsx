import styles from './Riviews.module.css'
import Gallery from './Gallery/Gallery'
import Otzivi from './Otzivi/Otzivi'

function Riviews() {

    return (
        <>
        <div className={styles.riview}>
            <div className={styles.riviews}>
                <Gallery />
                <Otzivi />
            </div>
            </div>
        </>
    )
}

export default Riviews