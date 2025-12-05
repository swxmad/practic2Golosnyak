import styles from './ForUsers.module.css'


function ForUsers() {

    return (
        <>
            <div className={styles.foru}>
                <p className={styles.zz}>Для посетителей</p>
                <div className={styles.sod}>
                        <p className={styles.lk}>Оформление заказа</p>
                        <p className={styles.lk}>Вопросы и ответы</p>
                        <p className={styles.lk}>Изменение или отмена заказа</p>
                        <p className={styles.lk}>Способы доставки и оплаты</p>
                </div>
            </div>
        </>
    )
}

export default ForUsers