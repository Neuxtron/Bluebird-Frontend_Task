import { useEffect } from "react"
import VehicleListView from "../../components/VehicleListView"
import getWishlistVehicles from "../../utils/getWishlistVehicles"

function WishlistPage() {
  const wishlistVehicles = getWishlistVehicles()

  return <VehicleListView vehicleList={wishlistVehicles} pageTitle="Wishlist" />
}

export default WishlistPage
