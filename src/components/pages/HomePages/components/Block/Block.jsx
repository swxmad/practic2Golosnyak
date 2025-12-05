import styles from './Block.module.css'

function Block() {

    return (
        <>
            <div className={styles.block}>
                <p>КАТАЛОГ</p>
                <p>ОТЗЫВЫ</p>
                <p>КОНТАКТЫ</p>
                <img src="/images/Лого.webp" alt="" loading="lazy"/>
                <p>ИНФОРМАЦИЯ ДЛЯ КЛИЕНТА</p>
                <div className={styles.zakaz}>
                    <img src="/images/userpick.webp" alt="" loading="lazy"/>
                <p>МОИ ЗАКАЗЫ</p>
                </div>
                <p >РУБ.</p>
            </div>
        </>
    )
}

export default Block