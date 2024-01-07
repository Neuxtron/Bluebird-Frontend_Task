import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import VehicleItem from "./VehicleItem"
import styles from "./styles.module.scss"

function HomeCategoryItem({ categoryName, vehicle }) {
  return (
    <div className={styles.homeCategoryItem} id={vehicle.id}>
        <h1>{categoryName}</h1>
        <div>
          <IoIosArrowBack />
          <ul>
            {vehicle.car_type.map((vehicle) => {
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