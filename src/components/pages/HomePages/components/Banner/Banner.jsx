import styles from './Banner.module.css'

function Banner() {

    return (
        <>
          <div className={styles.banner}>
            <div className={styles.info}>
                <p className={styles.inf}><span style={{ color: '#6AAE55' }}>ДОСТАВКА</span> ЦВЕТОВ В ГОРОДЕ</p>
                <p className={styles.city}>ВЛАДИВОСТОК</p>
                <button>КАТАЛОГ</button>
            </div>
          </div>
        </>
    )
}

export default Banner