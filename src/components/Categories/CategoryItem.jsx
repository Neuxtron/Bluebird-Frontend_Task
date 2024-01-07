import { Link } from "react-router-dom"
import styles from "./styles.module.scss"

function CategoryItem({ category, setCategoryOpened }) {
  const imageUrl = category.imageURL.replace(" ", "")

  const closeCategory = () => {
    setCategoryOpened(false)
  }

  return (
    <div className={styles.categoryItem}>
      <img src={imageUrl} alt={category.name} />
      <p>{category.name}</p>
      <Link to={`/${category.id}`} onClick={closeCategory} />
    </div>
  )
}

export default CategoryItem