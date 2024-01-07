import { useEffect } from "react"
import VehicleListView from "../../components/VehicleListView"
import getMyBookings from "../../utils/getMyBookings"

function MyBookingsPage() {
  const myBookingVehicles = getMyBookings()

  useEffect(() => scrollTo(0, 0), [])

  return (
    <VehicleListView vehicleList={myBookingVehicles} pageTitle="My Bookings" />
  )
}

export default MyBookingsPage
