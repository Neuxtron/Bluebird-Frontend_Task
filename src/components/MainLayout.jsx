import Footer from "./Footer"
import MenuBar from "./MenuBar"

function MainLayout({ children }) {
  return (
    <>
      <MenuBar />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout