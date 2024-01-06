import { dummyVehicles } from "../data/dummy_data";

function getAllVehicles() {
  const allVehicles = []

  dummyVehicles.forEach((category) => {
    category.carType.forEach(vehicle => allVehicles.push(vehicle))
  })
  return allVehicles;
}

export default getAllVehicles