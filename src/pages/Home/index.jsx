import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import getRandomVehicles from "../../utils/getRandomVehicles"
import VehicleItem from "./VehicleItem"
import styles from "./styles.module.scss"

function HomePage() {
  const randVehicles = getRandomVehicles()

  return (
    <div className={styles.homePage}>
      <div className={styles.vehicleList}>
        <h1>Experience the drive</h1>
        <p>from different seats.</p>

        <div>
          <IoIosArrowBack />
          <ul>
            {randVehicles.map((vehicle) => {
              const key = crypto.randomUUID()
              return (
                <VehicleItem
                  key={key}
                  imageUrl={vehicle.imageURL}
                  name={vehicle.vehicle}
                />
              )
            })}
          </ul>
          <IoIosArrowForward />
        </div>
      </div>

      {/* IDEA: add more sections */}
      {/* IDEA: other sections with primary background & white foreground color */}
    </div>
  )
}

export default HomePage
