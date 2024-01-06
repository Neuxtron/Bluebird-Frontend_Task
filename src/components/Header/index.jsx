import styles from "./styles.module.scss"
import Navbar from "./Navbar"
import Searchbox from "./Searchbox"

function Header() {
  return (
    <div className={styles.header}>
      <h1>Blublu Bookings</h1>
      <Navbar />
      <Searchbox />
    </div>
  )
}

export default Header