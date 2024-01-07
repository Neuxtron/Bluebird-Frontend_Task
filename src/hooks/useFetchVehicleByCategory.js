import { useEffect, useState } from "react"
import { baseUrl } from "../data/constants"
import { setCategories, setVehicles } from "../state/features/vehicles"
import { useDispatch } from "react-redux"

function useFetchVehicleByCategory() {
  const dispatch = useDispatch()
  const [vehicles, setVehicleByCategory] = useState([])
  
  useEffect(() => {fetchVehicles()}, [])

  async function fetchVehicles() {
    const response = await fetch(`${baseUrl}/vehicles`)
    const data = await response.json()

    dispatch(setCategories(data.category))
    dispatch(setVehicles(data.type))
    setVehicleByCategory(data.type)
  }

  return vehicles
}

export default useFetchVehicleByCategory