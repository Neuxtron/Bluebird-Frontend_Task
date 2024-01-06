import { IoIosSearch } from "react-icons/io";
import styles from "./styles.module.scss"

function Searchbox() {
  return (
    <div className={styles.search}>
      <input type="text" className={styles.search} placeholder="Search" />
      <IoIosSearch />
    </div>
  )
}

export default Searchbox