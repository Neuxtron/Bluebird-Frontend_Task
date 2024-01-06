import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import styles from "./styles.module.scss"
import { dummyCategories } from "../data/dummy_data"

function Footer() {
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
          {dummyCategories.map((category) => {
            const key = crypto.randomUUID()
            // TODO: navigate to corresponding page
            return <LinkItem key={key} text={category.name} to="#" />
          })}
        </ul>
      </div>
      <div>
        <h1>Pages</h1>
        <ul>
          <LinkItem text="Wishlist" to="#" />
          <LinkItem text="My Bookings" to="#" />
        </ul>
      </div>
    </div>
  )
}

function LinkItem({ text, to }) {
  return (
    <li>
      <a href={to}>{text}</a>
    </li>
  )
}

export default Footer
