import styles from "./styles.module.scss"
import Navbar from "./Navbar"
import Searchbox from "./Searchbox"
import { Link } from "react-router-dom"

function Header({ onToggleCategories }) {
  return (
    <div className={styles.header}>
      <Link to="/" className="d-flex">
        <img src="/logo.png" alt="Blublu Logo" />
        <h1>Blublu Bookings</h1>
      </Link>
      <Navbar onToggleCategories={onToggleCategories} />
      <Searchbox />
    </div>
  )
}

export default Header