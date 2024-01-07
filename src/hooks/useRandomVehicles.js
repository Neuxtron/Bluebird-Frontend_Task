function useRandomVehicles(vehiclesList, randCount = 5) {
  const randomVehicles = []
  
  for (let i = 0; i < randCount; i++) {
    const randIndex = Math.floor(Math.random() * vehiclesList.length)
    const randVehicle = vehiclesList.splice(randIndex, 1)[0]
    if (randVehicle) randomVehicles.push(randVehicle)
  }

  return randomVehicles
}

export default useRandomVehicles