import "./assets/global.scss"
import MainLayout from "./components/MainLayout"
import HomePage from './pages/Home'

function App() {
  return (
    <>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </>
  )
}

export default App
