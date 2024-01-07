import { FaRegHeart, FaHeart } from "react-icons/fa"
import styles from "./styles.module.scss"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleLikeVehicle } from "../../state/features/vehicles"

function VehicleItem({ imageUrl, name }) {
  const likedIds = useSelector((state) => state.vehicles.likedIds)
  const dispatch = useDispatch()
  const isLiked = likedIds.includes(name)

  const toggleLike = () => {
    dispatch(toggleLikeVehicle(name))
  }

  return (
    <li>
      <Link to={`/details/${name}`}>
        <img src={imageUrl} alt={name} />
        <p>{name}</p>
      </Link>
      {isLiked ? (
        <FaHeart className={styles.filledLike} onClick={toggleLike} />
      ) : (
        <FaRegHeart className={styles.outlinedLike} onClick={toggleLike} />
      )}
    </li>
  )
}

export default VehicleItem
