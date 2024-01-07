import { IoMdShare } from "react-icons/io"
import { FaRegHeart, FaHeart } from "react-icons/fa"
import { useNavigate, useParams } from "react-router"
import getAllVehicles from "../../utils/getAllVehicles"
import styles from "./styles.module.scss"
import { useEffect, useState } from "react"
import VehicleDescription from "../../components/VehicleDescription"
import { useDispatch, useSelector } from "react-redux"
import { toggleLikeVehicle } from "../../state/features/vehicles"

function DetailsPage() {
  const { id } = useParams()
  const vehicle = useGetVehicle(id)
  const likedIds = useSelector((state) => state.vehicles.likedIds)
  const dispatch = useDispatch()
  const isLiked = vehicle ? likedIds.includes(vehicle.vehicle) : false

  useEffect(() => scrollTo(0, 0), [])

  const toggleLike = () => {
    console.log(vehicle);
    dispatch(toggleLikeVehicle(vehicle.vehicle))
  }

  // OPTIMIZE: return loading animation
  if (!vehicle) return null

  return (
    <div className={styles.details}>
      <VehicleDescription
        imageUrl={vehicle.imageURL}
        name={vehicle.vehicle}
        description={vehicle.description}
      />
      <div className={styles.actions + " d-flex"}>
        <div>
          {/* TODO: copy link to clipboard */}
          <button>
            <IoMdShare />
            Share
          </button>
          {isLiked ? (
            <button className={styles.unlikeBtn} onClick={toggleLike}>
              <FaHeart />
              Liked
            </button>
          ) : (
            <button onClick={toggleLike}>
              <FaRegHeart />
              Like
            </button>
          )}
        </div>
        <div>
          <p>{vehicle.price}</p>
          <button>Book</button>
        </div>
      </div>
    </div>
  )
}

function useGetVehicle(id) {
  const [vehicle, setVehicle] = useState(null)
  const navigate = useNavigate()
  const allVehicles = getAllVehicles()

  useEffect(fetchVehicle, [])

  function fetchVehicle() {
    const singleVehicle = allVehicles.find((vehicleItem) => {
      return vehicleItem.vehicle == id
    })

    if (!singleVehicle) navigate("/")
    setVehicle(singleVehicle)
  }

  return vehicle
}

export default DetailsPage
