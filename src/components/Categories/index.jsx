import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./styles.module.scss"
import { dummyCategories } from "../../data/dummy_data";
import CategoryItem from "./CategoryItem";

function Categories({ isOpened = false, setCategoryOpened }) {
  return (
    <div className={`${styles.categories} ${isOpened ? styles.opened : ""}`}>
      <div>
        <IoIosArrowBack />
        <ul>
          {dummyCategories.map(category => {
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