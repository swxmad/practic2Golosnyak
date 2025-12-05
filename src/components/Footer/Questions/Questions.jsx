import styles from './Questions.module.css'


function Questions() {

    return (
        <>
            <div className={styles.questions}>
                <p className={styles.zz}>Возникли вопросы? Свяжитесь с нами</p>
                <div className={styles.vvod}>
                    <div className={styles.nam}>
                        <p className={styles.named}>Ваше имя</p>
                        <input type="text" />
                    </div>
                    <div className={styles.nam}>
                        <p className={styles.named}>Моб. номер</p>
                        <input type="tel" />
                    </div>
                </div>
                <input type="text" className={styles.in}/>
                <button>Отправить</button>
            </div>
        </>
    )
}

export default Questions