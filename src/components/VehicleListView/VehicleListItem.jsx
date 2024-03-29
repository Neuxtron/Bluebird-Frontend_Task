import { IoIosArrowForward } from "react-icons/io";
import styles from "./styles.module.scss"
import { Link } from "react-router-dom";

function VehicleListItem({ vehicle }) {
  return (
    <div className={styles.listItem + " d-flex"}>
      <Link to={`/details/${vehicle.vehicle}`} className="d-flex">
        <img src={vehicle.imageURL} alt={vehicle.vehicle} />
        <div>
          <h1>{vehicle.vehicle}</h1>
          <p>{vehicle.price}</p>
        </div>
        <p>
          View vehicle
          <IoIosArrowForward size="1.2rem" />
        </p>
      </Link>
    </div>
  )
}

export default VehicleListItem
