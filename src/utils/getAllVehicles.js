import { dummyVehicles } from "../data/dummy_data";

function getAllVehicles() {
  const allVehicles = []

  // TODO: fetch from api
  dummyVehicles.forEach((category) => {
    category.carType.forEach(vehicle => allVehicles.push(vehicle))
  })
  return allVehicles;
}

export default getAllVehicles