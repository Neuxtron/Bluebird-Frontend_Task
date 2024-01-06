import getAllVehicles from "./getAllVehicles";

function getRandomVehicles(randCount = 5) {
  const allVehicles = getAllVehicles()
  const randomVehicles = []
  
  for (let i = 0; i < randCount; i++) {
    const randIndex = Math.floor(Math.random() * allVehicles.length)
    const randVehicle = allVehicles.splice(randIndex, 1)[0]
    randomVehicles.push(randVehicle)
  }

  return randomVehicles
}

export default getRandomVehicles