import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import VehicleItem from "./VehicleItem"
import styles from "./styles.module.scss"
import { useRef } from "react"

function HomeCategoryItem({ categoryName, vehicle }) {
  const listRef = useRef(null)

  const randScrollRight = () => {
    const scrollPos = listRef.current.scrollLeft
    listRef.current.scroll(scrollPos + 280, 0)
  }
  const randScrollLeft = () => {
    const scrollPos = listRef.current.scrollLeft
    listRef.current.scroll(scrollPos - 280, 0)
  }
  
  return (
    <div className={styles.homeCategoryItem} id={vehicle.id}>
        <h1>{categoryName}</h1>
        <div>
          <IoIosArrowBack onClick={randScrollLeft} />
          <ul ref={listRef}>
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
          <IoIosArrowForward onClick={randScrollRight} />
        </div>
      </div>
  )
}

export default HomeCategoryItem