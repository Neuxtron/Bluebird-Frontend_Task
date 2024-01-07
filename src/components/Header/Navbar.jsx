import styles from "./styles.module.scss"

function Navbar({ onToggleCategories }) {
  return (
    <ul>
      <NavItem name="Wishlist" to="#" />
      <NavItem name="My Bookings" to="#" />
      <NavItem onClick={onToggleCategories}>
        <p>Categories</p>
      </NavItem>
    </ul>
  )
}

function NavItem({ name, to, onClick, children = <a href={to}>{name}</a> }) {
  return (
    <li className={styles.navItem} onClick={onClick}>
      {children}
    </li>
  )
}

export default Navbar