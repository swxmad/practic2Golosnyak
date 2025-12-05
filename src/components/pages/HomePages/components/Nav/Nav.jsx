import styles from './Nav.module.css'


function Nav() {

    return (
        <>
            <div className={styles.fon}>
                <div className={styles.nav}>
                    <li>Каталог</li>
                    <li>Скидки</li>
                    <li>Отзывы</li>
                    <li>Контакты</li>
                    <li>Оферта</li>
                    <li>Информация для клиента</li>
                </div>
            </div>
        </>
    )
}

export default Nav