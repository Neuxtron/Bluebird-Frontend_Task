import { useState } from "react";
import Categories from "../Categories";
import Header from "../Header"
import styles from "./styles.module.scss"

function MenuBar() {
  const [isCategoryOpened, setCategoryOpened] = useState(false)
  
  const onToggleCategories = (isOpen = null) => {
    if (isOpen === null) setCategoryOpened((prev) => !prev)
    if (isOpen !== null) setCategoryOpened(isOpen)
  }
  
  return (
    <div className={styles.menuBar}>
      <Header onToggleCategories={onToggleCategories} />
      <Categories isOpened={isCategoryOpened} setCategoryOpened={setCategoryOpened} />
    </div>
  )
}

export default MenuBar