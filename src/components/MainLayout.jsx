import MenuBar from "./MenuBar"

function MainLayout({ children }) {
  return (
    <>
      <MenuBar />
      {children}
    </>
  )
}

export default MainLayout