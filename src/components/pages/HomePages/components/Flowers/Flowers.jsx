import styles from './Flowers.module.css'
import Flower from './Flower/Flower'
import Search from './Search/Search'

function Flowers() {

  return (
    <>
    <div className={styles.back}>
    <div className={styles.flowers}>
    <Flower/>
    <Search/>
    </div>
    </div>
    </>
  )
}

export default Flowers