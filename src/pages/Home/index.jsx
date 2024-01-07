import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import getRandomVehicles from "../../utils/getRandomVehicles"
import VehicleItem from "./VehicleItem"
import styles from "./styles.module.scss"
import getAllVehicles from "../../utils/getAllVehicles"
import { dummyCategories, dummyVehicles } from "../../data/dummy_data"
import HomeCategoryItem from "./HomeCategoryItem"

function HomePage() {
  const randVehicles = getRandomVehicles()
  const allVehicles = getAllVehicles()

  return (
    <>
      <div className={styles.vehicleList}>
        <h1>Experience the ride</h1>
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

      {dummyCategories.map((category) => {
        const vehicle = dummyVehicles.find(vehicleItem => {
          return vehicleItem.categoryId == category.id
        })
        const key = crypto.randomUUID()
        return (
          <HomeCategoryItem
            key={key}
            categoryName={category.name}
            vehicleList={vehicle.carType}
          />
        )
      })}
    </>
  )
}

export default HomePage
