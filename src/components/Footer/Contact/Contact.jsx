import styles from './Contact.module.css'


function Contact() {

    return (
        <>
            <div className={styles.cont}>
                <p className={styles.zz}>Контактная информация</p>
                <div className={styles.sod}>
                    <img src="/images/cityy.webp" alt="" loading="lazy"/>
                    <div className={styles.oi}>
                        <p className={styles.lk}>Г. Владивосток, ул.</p>
                        <p className={styles.lk}>Пушкинская, 17</p>
                    </div>
                </div>
                <div className={styles.sod}>
                    <img src="/images/cal.webp" alt="" loading="lazy"/>
                    <div className={styles.oi}>
                        <p className={styles.lk}>+ 7 888 888 88 88</p>
                    </div>
                </div>
                <div className={styles.sod}>
                    <img src="/images/cal.webp" alt="" loading="lazy"/>
                        <p className={styles.lk}>+ 7 888 888 88 88</p>
                </div>
                <div className={styles.sod}>
                    <img src="/images/time.webp" alt="" loading="lazy"/>
                    <div className={styles.oi}>
                        <p className={styles.lk}>Режим работы</p>
                        <p className={styles.lk}>Пн-Сб с 8:00 до 22:00</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact