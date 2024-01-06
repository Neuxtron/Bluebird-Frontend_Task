import { Suspense, lazy } from "react"
import "./assets/global.scss"
import MainLayout from "./components/MainLayout"
import { Outlet, Route, Routes } from "react-router"

const HomePage = lazy(() => import("./pages/Home"))
const DetailsPage = lazy(() => import("./pages/Details"))

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavWrapper />}>
        <Route index element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Route>
    </Routes>
  )
}

function NavWrapper() {
  return (
    <Suspense>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </Suspense>
  )
}

export default App
