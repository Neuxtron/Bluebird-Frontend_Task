import { useSelector } from "react-redux";

function useWishlistVehicles(vehiclesList) {
  const wishlistNames = useSelector((state) => state.vehicles.likedIds)
  const wishlistVehicles = vehiclesList.filter((vehicle) => {
    return wishlistNames.includes(vehicle.vehicle)
  })

  return wishlistVehicles
}

export default useWishlistVehicles