import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import useRandomVehicles from "../../hooks/useRandomVehicles"
import VehicleItem from "./VehicleItem"
import styles from "./styles.module.scss"
import HomeCategoryItem from "./HomeCategoryItem"
import { useParams } from "react-router-dom"
import getAllVehicles from "../../utils/getAllVehicles"
import useFetchVehicleByCategory from "../../hooks/useFetchVehicleByCategory"
import { useSelector } from "react-redux"
import LoadingScreen from "../../components/Loading"
import { useRef } from "react"

function HomePage() {
  const [vehiclesByCategory, isLoading] = useFetchVehicleByCategory()
  const allVehicles = getAllVehicles()
  const randVehicles = useRandomVehicles(allVehicles)
  const categories = useSelector((state) => state.vehicles.categories)
  const { categoryId } = useParams()
  const randomRef = useRef(null)

  const randScrollRight = () => {
    const scrollPos = randomRef.current.scrollLeft
    randomRef.current.scroll(scrollPos + 280, 0)
  }
  const randScrollLeft = () => {
    const scrollPos = randomRef.current.scrollLeft
    randomRef.current.scroll(scrollPos - 280, 0)
  }

  if (isLoading && allVehicles.length === 0) return <LoadingScreen />

  return (
    <>
      {categoryId ? null : <div className={styles.vehicleList}>
        <h1>Experience the ride</h1>
        <p>from different seats.</p>

        <div>
          <IoIosArrowBack onClick={randScrollLeft} />
          <ul ref={randomRef}>
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
          <IoIosArrowForward onClick={randScrollRight} />
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
