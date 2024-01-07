import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./styles.module.scss"
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";

function Categories({ isOpened = false, setCategoryOpened }) {
  const categories = useSelector((state) => state.vehicles.categories)
  
  return (
    <div className={`${styles.categories} ${isOpened ? styles.opened : ""}`}>
      <div>
        <IoIosArrowBack />
        <ul>
          {categories.map(category => {
            const key = crypto.randomUUID()
            return <CategoryItem key={key} category={category} setCategoryOpened={setCategoryOpened} />
          })}
        </ul>
        <IoIosArrowForward />
      </div>
    </div>
  )
}

export default Categories