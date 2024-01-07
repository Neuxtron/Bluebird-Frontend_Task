import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import styles from "./styles.module.scss"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Footer() {
  const categories = useSelector((state) => state.vehicles.categories)
  
  return (
    <div className={styles.footer}>
      <div className={styles.contact}>
        <h1>Stay in touch</h1>
        <span>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </span>
      </div>
      <div className={styles.vl}></div>
      <div>
        <h1>Services</h1>
        <ul>
          {categories.map((category) => {
            const key = crypto.randomUUID()
            return <LinkItem key={key} text={category.name} to={`/${category.id}`} />
          })}
        </ul>
      </div>
      <div>
        <h1>Navigation</h1>
        <ul>
          <LinkItem text="Wishlist" to="/wishlist" />
          <LinkItem text="My Bookings" to="my-bookings" />
        </ul>
      </div>
    </div>
  )
}

function LinkItem({ text, to }) {
  const scrollToTop = () => {
    scrollTo(0, 0)
  }
  
  return (
    <li>
      <Link to={to} onClick={scrollToTop}>{text}</Link>
    </li>
  )
}

export default Footer
