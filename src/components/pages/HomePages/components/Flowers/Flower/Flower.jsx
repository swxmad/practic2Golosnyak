import styles from './Flower.module.css'

function Flower() {

  return (
    <>
    <div className={styles.cards}>
        <div className={styles.card}>
            <img src="/images/Rectangle 6 (8).webp" alt="" loading="lazy"/>
            <p className={styles.zagl}><pre>Букет из </pre>разноцветных роз</p>
            <p className={styles.cost}>Стоимость: от <span style={{fontSize: '16px', fontWeight: '450'}}>23 000 руб.</span></p>
            <button>В корзину</button>
        </div>
        <div className={styles.card}>
             <img src="/images/Group 19.webp" alt="" loading="lazy"/>
            <p className={styles.zagl}><pre>Букет из </pre>разноцветных роз</p>
            <p className={styles.cost}>Стоимость: от <span style={{fontSize: '16px', fontWeight: '450'}}>23 000 руб.</span></p>
            <button>В корзину</button>
        </div>
        <div className={styles.card}>
            <img src="/images/Group 18.webp" alt="" loading="lazy"/>
            <p className={styles.zagl}><pre>Букет из </pre>разноцветных роз</p>
            <p className={styles.cost}>Стоимость: от <span style={{fontSize: '16px', fontWeight: '450'}}>23 000 руб.</span></p>
            <button>В корзину</button>
        </div>
        <div className={styles.card}>
             <img src="/images/Rectangle 6 (5).webp" alt="" loading="lazy" />
            <p className={styles.zagl}><pre>Букет из </pre>разноцветных роз</p>
            <p className={styles.cost}>Стоимость: от <span style={{fontSize: '16px', fontWeight: '450'}}>23 000 руб.</span></p>
            <button>В корзину</button>
        </div>
        <div className={styles.card}>
             <img src="/images/Rectangle 6 (4).webp" alt="" loading="lazy"/>
            <p className={styles.zagl}><pre>Букет из </pre>разноцветных роз</p>
            <p className={styles.cost}>Стоимость: от <span style={{fontSize: '16px', fontWeight: '450'}}>23 000 руб.</span></p>
            <button>В корзину</button>
        </div>
        <div className={styles.card}>
            <img src="/images/Group 17.webp" alt="" loading="lazy"/>
            <p className={styles.zagl}><pre>Букет из </pre>разноцветных роз</p>
            <p className={styles.cost}>Стоимость: от <span style={{fontSize: '16px', fontWeight: '450'}}>23 000 руб.</span></p>
            <button>В корзину</button>
        </div>
        <div className={styles.card}>
           <img src="/images/Rectangle 6 (2).webp" alt="" loading="lazy"/>
            <p className={styles.zagl}><pre>Букет из </pre>разноцветных роз</p>
            <p className={styles.cost}>Стоимость: от <span style={{fontSize: '16px', fontWeight: '450'}}>23 000 руб.</span></p>
            <button>В корзину</button>
        </div>
        <div className={styles.card}>
            <img src="/images/Rectangle 6 (1).webp" alt="" loading="lazy"/>
            <p className={styles.zagl}><pre>Букет из </pre>разноцветных роз</p>
            <p className={styles.cost}>Стоимость: от <span style={{fontSize: '16px', fontWeight: '450'}}>23 000 руб.</span></p>
            <button>В корзину</button>
        </div>
        <div className={styles.card}>
             <img src="/images/Rectangle 6.webp" alt="" loading="lazy"/>
            <p className={styles.zagl}><pre>Букет из </pre>разноцветных роз</p>
            <p className={styles.cost}>Стоимость: от <span style={{fontSize: '16px', fontWeight: '450'}}>23 000 руб.</span></p>
            <button>В корзину</button>
        </div>
    </div>
    </>
  )
}

export default Flower