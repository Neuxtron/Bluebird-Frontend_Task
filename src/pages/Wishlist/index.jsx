import { useEffect } from "react"
import VehicleListView from "../../components/VehicleListView"
import getWishlistVehicles from "../../utils/getWishlistVehicles"

function WishlistPage() {
  const wishlistVehicles = getWishlistVehicles()

  useEffect(() => scrollTo(0, 0), [])

  return <VehicleListView vehicleList={wishlistVehicles} pageTitle="Wishlist" />
}

export default WishlistPage
