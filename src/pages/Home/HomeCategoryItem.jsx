import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import VehicleItem from "./VehicleItem"
import styles from "./styles.module.scss"

function HomeCategoryItem({ categoryName, vehicleList }) {
  return (
    <div className={styles.homeCategoryItem}>
        <h1>{categoryName}</h1>
        <div>
          <IoIosArrowBack />
          <ul>
            {vehicleList.map((vehicle) => {
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
  )
}

export default HomeCategoryItem