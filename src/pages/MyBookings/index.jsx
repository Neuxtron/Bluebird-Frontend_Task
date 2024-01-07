import VehicleListView from "../../components/VehicleListView"
import useMyBookings from "../../hooks/useMyBookings"
import { useSelector } from "react-redux"
import getAllVehicles from "../../utils/getAllVehicles"

function MyBookingsPage() {
  const vehiclesList = getAllVehicles()
  const myBookingVehicles = useMyBookings(vehiclesList)

  return (
    <VehicleListView vehicleList={myBookingVehicles} pageTitle="My Bookings" />
  )
}

export default MyBookingsPage
