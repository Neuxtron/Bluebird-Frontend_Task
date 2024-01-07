import { useSelector } from "react-redux";

function getAllVehicles() {
  const allVehicles = []
  const vehiclesByCategory = useSelector((state) => state.vehicles.vehiclesByCategory)

  vehiclesByCategory.forEach((category) => {
    category.car_type.forEach(vehicle => allVehicles.push(vehicle))
  })
  return allVehicles;
}

export default getAllVehicles