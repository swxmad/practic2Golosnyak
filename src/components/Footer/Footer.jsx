import styles from './Footer.module.css'
import Contact from './Contact/Contact'
import ForUsers from './ForUsers/ForUsers'
import Questions from './Questions/Questions'


function Footer() {

    return (
        <>
            <footer>
                <div className={styles.fonn}>
                    <Contact />
                    <ForUsers/>
                    <Questions/>
                </div>
                <div className={styles.line}></div>
                <p className={styles.kont}>© 2019 Цветочная лавка.</p>
            </footer>
        </>
    )
}

export default Footer