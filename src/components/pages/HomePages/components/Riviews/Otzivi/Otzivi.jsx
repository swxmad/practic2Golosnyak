import styles from './Otzivi.module.css'

function Otzivi() {

    return (
        <>
            <div className={styles.ghuk}>
                <p className={styles.p}>ОТЗЫВЫ</p>
                <div className={styles.otziv}>
                    <div className={styles.verh}>
                        <div className={styles.name}>
                            <p>Анатолий Петров</p>
                            <div className={styles.dattime}>
                                <p>20.08.19</p>
                                <p>22:32</p>
                                <p>г. Москва</p>
                            </div>
                        </div>
                        <img src="images/Group 13.webp" alt="" loading="lazy"/>
                    </div>
                    <p className={styles.ot}>Огромное спасибо флористам! Остались очень довольны оказанными услугами,мастера своего дела! Букетик даже неожиданно красивее чем на картинке</p>
                </div>
                <hr></hr>
                <div className={styles.otziv}>
                    <div className={styles.verh}>
                        <div className={styles.name}>
                            <p>Анатолий Петров</p>
                            <div className={styles.dattime}>
                                <p>20.08.19</p>
                                <p>22:32</p>
                                <p>г. Москва</p>
                            </div>
                        </div>
                        <img src="images/Group 14.webp" alt="" loading="lazy"/>
                    </div>
                    <p className={styles.ot}>Огромное спасибо флористам! Остались очень довольны оказанными услугами,мастера своего дела! Букетик даже неожиданно красивее чем на картинке</p>
                </div>
                <hr></hr>
                <div className={styles.otziv}>
                    <div className={styles.verh}>
                        <div className={styles.name}>
                            <p>Анатолий Петров</p>
                            <div className={styles.dattime}>
                                <p>20.08.19</p>
                                <p>22:32</p>
                                <p>г. Москва</p>
                            </div>
                        </div>
                        <img src="images/Group 15.webp" alt="" loading="lazy"/>
                    </div>
                    <p className={styles.ot}>Огромное спасибо флористам! Остались очень довольны оказанными услугами,мастера своего дела! Букетик даже неожиданно красивее чем на картинке</p>
                </div>
            </div>
        </>
    )
}

export default Otzivi