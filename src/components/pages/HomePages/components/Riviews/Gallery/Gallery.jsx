import styles from './Gallery.module.css'

function Gallery() {

    return (
        <>
        <div className={styles.zags}>
            <p><span style={{color: '#6AAE55'}}>ФОТО</span>ХВАСТЫ</p>
            <div className={styles.pics}>
                <img src="images/Rectangle 11.webp" alt="" loading="lazy"/>
                <img src="images/Rectangle 11.1.webp" alt="" loading="lazy"/>
                <img src="images/Rectangle 11.2.webp" alt="" loading="lazy"/>
                <img src="images/Rectangle 11.3.webp" alt="" loading="lazy"/>
            </div>
        </div>
        </>
    )
}

export default Gallery