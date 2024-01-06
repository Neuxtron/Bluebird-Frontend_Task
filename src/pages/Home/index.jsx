import getRandomVehicles from "../../utils/getRandomVehicles"
import VehicleItem from "./VehicleItem"
import styles from "./styles.module.scss"

function HomePage() {
  const randVehicles = getRandomVehicles()

  return (
    <>
      <div className={styles.homePage}>
        <ul className={styles.vehicleList}>
          {randVehicles.map(vehicle => {
            const key = crypto.randomUUID()
            return <VehicleItem key={key} imageUrl={vehicle.imageURL} name={vehicle.vehicle} />
          })}
        </ul>
      </div>
    </>
  )
}

export default HomePage