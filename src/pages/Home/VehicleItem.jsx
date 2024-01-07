import { FaRegHeart, FaHeart } from "react-icons/fa"
import styles from "./styles.module.scss"
import { Link } from "react-router-dom"

function VehicleItem({ imageUrl, name }) {
  return (
    <li>
      <Link to={`/details/${name}`}>
        <img src={imageUrl} alt={name} />
          <p>{name}</p>
        <FaRegHeart className={styles.outlinedLike} />
        {/* <FaHeart className={styles.filledLike} /> */}
      </Link>
    </li>
  )
}

export default VehicleItem
