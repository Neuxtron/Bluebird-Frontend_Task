import styles from "./styles.module.scss"

function CategoryItem({ category }) {
  const imageUrl = category.imageURL.replace(" ", "")
  
  return (
    <div className={styles.categoryItem}>
      <img src={imageUrl} alt={category.name} />
      <p>{category.name}</p>
      <div></div>
    </div>
  )
}

export default CategoryItem