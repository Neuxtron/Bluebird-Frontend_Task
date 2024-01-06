import { dummyBookings } from "../data/dummy_data";
import getAllVehicles from "./getAllVehicles";

function getMyBookings() {
  const myBookings = dummyBookings
  const allVehicles = getAllVehicles()
  const myBookingVehicles = allVehicles.filter((vehicle) => {
    return myBookings.includes(vehicle.vehicle)
  })

  return myBookingVehicles
}

export default getMyBookings