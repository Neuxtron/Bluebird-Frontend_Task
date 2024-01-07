import { IoMdShare } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa"
import { useNavigate, useParams } from "react-router"
import getAllVehicles from "../../utils/getAllVehicles"
import styles from "./styles.module.scss"
import { useEffect, useState } from "react"
import VehicleDescription from "../../components/VehicleDescription"

function DetailsPage() {
  const { id } = useParams()
  const vehicle = useGetVehicle(id)

  useEffect(() => scrollTo(0, 0), [])

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
          <button>
            <IoMdShare />
            Share
          </button>
          <button>
            <FaRegHeart />
            Like
          </button>
          {/* <button className={styles.unlikeBtn}>
            <FaHeart />
            Liked
          </button> */}
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

  useEffect(fetchVehicle, [])

  function fetchVehicle() {
    const singleVehicle = getAllVehicles().find((vehicleItem) => {
      return vehicleItem.vehicle == id
    })

    if (!singleVehicle) navigate("/")
    setVehicle(singleVehicle)
  }

  return vehicle
}

export default DetailsPage
