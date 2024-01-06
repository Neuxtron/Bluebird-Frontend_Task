import { dummyWishlist } from "../data/dummy_data";
import getAllVehicles from "./getAllVehicles";

function getWishlistVehicles() {
  const wishlistNames = dummyWishlist
  const allVehicles = getAllVehicles()
  const wishlistVehicles = allVehicles.filter((vehicle) => {
    return wishlistNames.includes(vehicle.vehicle)
  })

  return wishlistVehicles
}

export default getWishlistVehicles