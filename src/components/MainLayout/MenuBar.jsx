import { useState } from "react";
import Categories from "../Categories";
import Header from "../Header"
import styles from "./styles.module.scss"

function MenuBar() {
  const [isCategoryOpened, setCategoryOpened] = useState(false)
  
  const onToggleCategories = () => {
    setCategoryOpened((prev) => !prev)
  }
  
  return (
    <div className={styles.menuBar}>
      <Header onToggleCategories={onToggleCategories} />
      <Categories isOpened={isCategoryOpened} />
    </div>
  )
}

export default MenuBar