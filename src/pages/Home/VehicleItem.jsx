import { FaRegHeart, FaHeart } from "react-icons/fa"
import styles from "./styles.module.scss"

function VehicleItem({ imageUrl, name }) {
  return (
    <li>
      <img src={imageUrl} alt={name} />
        <p>{name}</p>
      <FaRegHeart className={styles.outlinedLike} />
      {/* <FaHeart className={styles.filledLike} /> */}
    </li>
  )
}

export default VehicleItem
