import { useState } from "react";
import Categories from "../Categories";
import Header from "../Header"
import styles from "./styles.module.scss"

function MenuBar() {
  const [isCategoryOpened, setCategoryOpened] = useState(false)
  
  const onToggleCategories = () => {
    setCategoryOpened((prev) => !prev)
  }
  const closeCatgories = () => {
    setCategoryOpened(false)
    scrollTo(0, 0)
  }
  
  return (
    <div className={styles.menuBar}>
      <Header onToggleCategories={onToggleCategories} />
      <Categories isOpened={isCategoryOpened} setCategoryOpened={closeCatgories} />
    </div>
  )
}

export default MenuBar