import styles from './Steps.module.css'

function Steps() {

    return (
        <>
            <div className={styles.stepss}>
                <p className={styles.zaglav}><span style={{ color: '#6AAE55' }}>ЗАКАЗАТЬ</span> В 4 ШАГА</p>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <img src="images/01.webp" alt="" loading="lazy" />
                        <div className={styles.inf}>
                            <p style={{ color: '#6AAE55' }} className={styles.z}>Выберите букет</p>
                            <p className={styles.o}>В каталоге выберите понравившийся букет;</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <img src="images/2.webp" alt="" loading="lazy"/>
                        <div className={styles.inf}>
                            <p style={{ color: '#6AAE55' }} className={styles.z}>Выберите размер и дополнение</p>
                            <p className={styles.o}>На странице с описанием букета выберите подходящий размер. По желанию, добавьте к букету мягкую игрушку, сладости или любой другой подарок;</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <img src="images/3.webp" alt="" loading="lazy"/>
                        <div className={styles.inf}>
                            <p style={{ color: '#6AAE55' }} className={styles.z}>Укажите данные для доставки</p>
                            <p className={styles.o}>Заполните форму доставки и оплатите заказ удобным для вас способом;</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <img src="images/4.webp" alt="" loading="lazy"/>
                        <div className={styles.inf}>
                            <p style={{ color: '#6AAE55' }} className={styles.z}>Букет готов!</p>
                            <p className={styles.o}>Букет будет собран из свежайших цветов и доставлен получателю к указанной дате и времени.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Steps