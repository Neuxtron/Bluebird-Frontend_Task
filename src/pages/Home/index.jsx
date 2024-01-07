import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import useRandomVehicles from "../../hooks/useRandomVehicles"
import VehicleItem from "./VehicleItem"
import styles from "./styles.module.scss"
import HomeCategoryItem from "./HomeCategoryItem"
import { useParams } from "react-router-dom"
import getAllVehicles from "../../utils/getAllVehicles"
import useFetchVehicleByCategory from "../../hooks/useFetchVehicleByCategory"
import { useSelector } from "react-redux"

function HomePage() {
  const vehiclesByCategory = useFetchVehicleByCategory()
  const allVehicles = getAllVehicles()
  const randVehicles = useRandomVehicles(allVehicles)
  const categories = useSelector((state) => state.vehicles.categories)
  const { categoryId } = useParams()

  return (
    <>
      {/* OPTIMIZE: random generated twice */}
      {categoryId ? null : <div className={styles.vehicleList}>
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
      </div>}

      {vehiclesByCategory.length === 0 ? null : categories.map((category) => {
        const vehicle = vehiclesByCategory.find((vehicleItem) => {
          return vehicleItem.category_id == category.id
        })
        const key = crypto.randomUUID()
        if (categoryId && categoryId != category.id) return null
        return (
          <HomeCategoryItem
            key={key}
            categoryName={category.name}
            vehicle={vehicle}
          />
        )
      })}
    </>
  )
}

export default HomePage
