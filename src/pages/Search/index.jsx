import getAllVehicles from "../../utils/getAllVehicles"
import VehicleListView from "../../components/VehicleListView"

function SearchPage({ rawSearchText }) {
  const allVehicles = getAllVehicles()
  const searchedVehicles = allVehicles.filter((vehicle) => {
    const searchText = rawSearchText.toLowerCase()
    const vehicleName = vehicle.vehicle.toLowerCase()
    return vehicleName.includes(searchText)
  })

  return (
    <VehicleListView
      vehicleList={searchedVehicles}
      pageTitle={`Results for ${rawSearchText}`}
      showTotal={false}
    />
  )
}

export default SearchPage
