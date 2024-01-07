import VehicleListItem from "./VehicleListItem"
import styles from "./styles.module.scss"

function VehicleListView({ vehicleList, pageTitle = "" }) {
  const priceList = vehicleList.map(vehicle => {
    const priceStr = vehicle.price.replace(/[^0-9]/g, "")
    const price = parseInt(priceStr)
    return price
  })
  const totalPrice = priceList.length === 0 ? 0 : priceList.reduce((total, price) => {
    return total + price
  })
  const nf = new Intl.NumberFormat('id-ID')
  const totalPriceStr = `IDR ${nf.format(totalPrice)}`
  
  return (
    <div className={styles.listview}>
      <h1>{pageTitle}</h1>
      {vehicleList.map(vehicle => {
        const key = crypto.randomUUID()
        return <VehicleListItem key={key} vehicle={vehicle} />
      })}
      {priceList.length === 0 ? <p>The list is empty</p> : null}
      <div className={styles.total}>
        <p>Grand Total</p>
        <p>{totalPriceStr}</p>
      </div>
    </div>
  )
}

export default VehicleListView