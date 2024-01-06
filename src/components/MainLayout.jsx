import Footer from "./Footer"
import MenuBar from "./MenuBar"
import styles from "./styles.module.scss"

function MainLayout({ children }) {
  return (
    <>
      <MenuBar />
      <div className={styles.content}>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default MainLayout