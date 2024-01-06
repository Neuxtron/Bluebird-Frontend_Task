import { FaCircleCheck } from "react-icons/fa6";
import styles from "./VehicleDescription.module.scss"

function VehicleDescription({ imageUrl, name, description }) {
  return (
    <div className={styles.vehicleDescription + " d-flex"}>
      <img src={imageUrl} alt={name} />
      <div>
        <h1>{name}</h1>
        <ul className={styles.description}>
          {description.map((descriptionItem) => {
            const key = crypto.randomUUID()
            return <DescriptionItem key={key} title={descriptionItem} />
          })}
        </ul>
      </div>
    </div>
  )
}

function DescriptionItem({ title }) {
  return (
    <li>
      <FaCircleCheck />
      {title}
    </li>
  )
}

export default VehicleDescription
