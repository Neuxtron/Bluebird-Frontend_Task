import styles from "../styles.module.scss"

function Navbar() {
  return (
    <ul>
      <NavItem name="Wishlist" to="#" />
      <NavItem name="My Bookings" to="#" />
    </ul>
  )
}

function NavItem({ name, to, children = <a href={to}>{name}</a> }) {
  return (
    <li className={styles.navItem}>
      {children}
    </li>
  )
}

export default Navbar