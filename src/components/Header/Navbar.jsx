import { Link, useMatch, useResolvedPath } from "react-router-dom"
import styles from "./styles.module.scss"

function Navbar({ onToggleCategories }) {
  return (
    <ul>
      <NavItem name="Home" to="/" />
      <NavItem name="Wishlist" to="/wishlist" />
      <NavItem name="My Bookings" to="my-bookings" />
      <NavItem onClick={onToggleCategories}>
        <p>Categories</p>
      </NavItem>
    </ul>
  )
}

function NavItem({ name, to = null, onClick, children }) {
  const child = children ?? <Link to={to}>{name}</Link>
  const resolvedPath = useResolvedPath(to)
  const isSelected = !to ? null : useMatch({ path: resolvedPath.pathname })

  return (
    <li
      className={`${styles.navItem} ${isSelected ? styles.selected : ""}`}
      onClick={onClick}
    >
      {child}
    </li>
  )
}

export default Navbar
