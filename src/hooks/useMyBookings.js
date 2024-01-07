import { useSelector } from "react-redux";

function useMyBookings(vehiclesList) {
  const myBookings = useSelector((state) => state.vehicles.bookedIds)
  const myBookingVehicles = vehiclesList.filter((vehicle) => {
    return myBookings.includes(vehicle.vehicle)
  })

  return myBookingVehicles
}

export default useMyBookings