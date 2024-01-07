import { useSelector } from "react-redux"
import SearchPage from "../../pages/Search"
import Footer from "./Footer"
import MenuBar from "./MenuBar"
import styles from "./styles.module.scss"

function MainLayout({ children }) {
  const rawSearchText = useSelector(
    (state) => state.search.searchText
  )
  
  return (
    <>
      <MenuBar />
      <div className={styles.content}>
        {rawSearchText.length === 0 ? children : <SearchPage rawSearchText={rawSearchText} />}
      </div>
      <Footer />
    </>
  )
}

export default MainLayout