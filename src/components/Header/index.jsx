import styles from "./styles.module.scss"
import Navbar from "./Navbar"
import Searchbox from "./Searchbox"

function Header({ onToggleCategories }) {
  return (
    <div className={styles.header}>
      {/* TODO: navigate to homepage on h1 or img click */}
      <img src="/logo.png" alt="Blublu Logo" />
      <h1>Blublu Bookings</h1>
      <Navbar onToggleCategories={onToggleCategories} />
      <Searchbox />
    </div>
  )
}

export default Header