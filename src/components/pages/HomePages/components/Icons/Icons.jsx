import styles from './Icons.module.css'

function Icons() {

    return (
        <>
          <div className={styles.container}>
            <div className={styles.icon}>
                <img src="images/Group 11.webp" alt="" loading="lazy"/>
                <p><span style={{ color: '#6AAE55' }}>Бесплатная</span> доставка по городу</p>
            </div>
            <div className={styles.icon}>
                <img src="images/Group 8.webp" alt="" loading="lazy"/>
                <p>Открытка <span style={{ color: '#6AAE55' }}>в подарок</span> и фотография вручения</p>
            </div>
            <div className={styles.icon}>
                <img src="images/Group 9.webp" alt="" loading="lazy"/>
                <p><span style={{ color: '#6AAE55' }}>Круглосуточная</span> доставка</p>
            </div>
            <div className={styles.icon}>
                <img src="images/Group 12.webp" alt="" loading="lazy"/>
                <p>Накопительная система <span style={{ color: '#6AAE55' }}>скидок</span></p>
            </div>
          </div>
        </>
    )
}

export default Icons