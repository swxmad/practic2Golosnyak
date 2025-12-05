import styles from './Search.module.css'

function Search() {

    return (
        <>
            <div className={styles.search}>
                <div className={styles.sea}>
                    <p>Поиск</p>
                    <img src="/images/Vector.webp" alt="" loading="lazy"/>
                </div>
                <div className={styles.linee}></div>
                <div className={styles.sto}>
                    <p className={styles.df}>Стоимость:</p>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>до 2500 руб.</p>
                    </div>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>2500 - 4000 руб.</p>
                    </div>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>4000 - 6000 руб.</p>
                    </div>
                    <div className={styles.vib}>
                        <img src="/images/Check.webp" alt="" loading="lazy"/>
                        <p className={styles.tcena} style={{ fontWeight: 'bold' }}>от 6000 руб.</p>
                    </div>
                </div>
                <div className={styles.linee}></div>
                <div className={styles.sto}>
                    <p className={styles.df}>Букет с ...</p>
                    <div className={styles.vib}>
                        <img src="/images/Check.webp" alt="" loading="lazy" />
                        <p className={styles.tcena} style={{ fontWeight: 'bold' }}>Розами</p>
                    </div>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>Тюльпанами</p>
                    </div>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>Гортензиями</p>
                    </div>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>Подсолнухами</p>
                    </div>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>Орхидеями</p>
                    </div>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>Ирисами</p>
                    </div>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>Лилиями</p>
                    </div>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>Герберами</p>
                    </div>
                    <p className={styles.more}>Показать еще</p>
                </div>
                <div className={styles.linee}></div>
                <div className={styles.sto}>
                    <p className={styles.df}>Цветы упаковано</p>
                    <div className={styles.vib}>
                        <img src="/images/Check.webp" alt="" loading="lazy"/>
                        <p className={styles.tcena} style={{ fontWeight: 'bold' }}>Букетом</p>
                    </div>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>В корзине</p>
                    </div>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>В коробке</p>
                    </div>
                </div>
                <div className={styles.linee}></div>
                <div className={styles.sto}>
                    <p className={styles.df}>Цветовая гамма</p>
                    <div className={styles.vib}>
                        <img src="/images/Check.webp" alt="" loading="lazy"/>
                        <p className={styles.tcena} style={{ fontWeight: 'bold' }}>Белая</p>
                    </div>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>Розовая</p>
                    </div>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>Красная</p>
                    </div>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>Желтая</p>
                    </div>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>Оранжевая</p>
                    </div>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>Бордовая</p>
                    </div>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>Синяя</p>
                    </div>
                    <div className={styles.vib}>
                        <div className={styles.vf}></div>
                        <p className={styles.tcena}>Фиолетовая</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search