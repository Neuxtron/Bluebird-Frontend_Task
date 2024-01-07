import VehicleListView from "../../components/VehicleListView"
import useWishlistVehicles from "../../hooks/useWishlistVehicles"
import getAllVehicles from "../../utils/getAllVehicles"

function WishlistPage() {
  const vehiclesList = getAllVehicles()
  const wishlistVehicles = useWishlistVehicles(vehiclesList)

  return <VehicleListView vehicleList={wishlistVehicles} pageTitle="Wishlist" />
}

export default WishlistPage
