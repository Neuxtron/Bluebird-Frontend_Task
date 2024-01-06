import styles from "../styles.module.scss"
import Navbar from "./Navbar"

function Header() {
  return (
    <div className={styles.header}>
      <h1>Blublu Bookings</h1>
      <Navbar />
    </div>
  )
}

export default Header