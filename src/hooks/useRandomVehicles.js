import { useRef } from "react"

function useRandomVehicles(vehiclesList, randCount = 5) {
  const randomVehicles = useRef([])
  if (vehiclesList.length === 0) return []
  
  for (let i = 0; i < randCount; i++) {
    const randIndex = Math.floor(Math.random() * vehiclesList.length)
    const randVehicle = vehiclesList.splice(randIndex, 1)[0]
    if (randVehicle) randomVehicles.current.push(randVehicle)
  }

  return randomVehicles.current
}

export default useRandomVehicles