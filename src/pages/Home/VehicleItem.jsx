import { AiOutlineLike, AiFillLike } from "react-icons/ai"
import styles from "./styles.module.scss"

function VehicleItem({ imageUrl, name }) {
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <h1>{name}</h1>
      </div>
      <AiOutlineLike className={styles.outlinedLike} />
      {/* <AiFillLike className={styles.filledLike} /> */}
    </li>
  )
}

export default VehicleItem
