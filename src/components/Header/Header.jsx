import styles from './Header.module.css'

function Header() {

  return (
    <>
      <header>
      <div className={styles.header}>
          <div className={styles.city}>
            <img src="/images/cityy.webp" alt="" loading="lazy"/>
            <p className={styles.opisanie}><span style={{ color: '#6AAE55' }}>г. Владивосток,</span> ул. Пушкинская, 17 А</p>
          </div>
          <div className={styles.city}>
            <img src="/images/calll.webp" alt="" loading="lazy"/>
            <p className={styles.opisanie}>+ 7 808 353 53 35</p>
              <p className={styles.opisanie}>+ 7 888 888 88 88</p>
          </div>
          <div className={styles.city}>
            <img src="/images/number.webp" alt="" loading="lazy"/>
            <p className={styles.opisanie}>150 000 руб.</p>
          </div>
          </div>
      </header>
    </>
  )
}

export default Header