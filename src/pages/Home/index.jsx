import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import getRandomVehicles from "../../utils/getRandomVehicles"
import VehicleItem from "./VehicleItem"
import styles from "./styles.module.scss"
import { dummyCategories, dummyVehicles } from "../../data/dummy_data"
import HomeCategoryItem from "./HomeCategoryItem"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function HomePage() {
  const randVehicles = getRandomVehicles()
  const categories = useGetCategories()
  const { categoryId } = useParams()

  return (
    <>
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

      {categories.map((category) => {
        const vehicle = dummyVehicles.find((vehicleItem) => {
          return vehicleItem.categoryId == category.id
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

function useGetCategories() {
  const [categories, setCategories] = useState([])

  async function fetchCategories() {
    // TODO: fetch from API
    setCategories(dummyCategories)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return categories
}

export default HomePage
