import { IoIosSearch } from "react-icons/io";
import styles from "./styles.module.scss"
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../state/features/search";

function Searchbox() {
  const searchRef = useRef(null)
  const dispatch = useDispatch()

  const onSearch = () => {
    const text = searchRef.current.value
    dispatch(setSearchText(text))
  }
  
  return (
    <div className={styles.search}>
      <input type="text" className={styles.search} placeholder="Search" ref={searchRef} onChange={onSearch} />
      <IoIosSearch />
    </div>
  )
}

export default Searchbox