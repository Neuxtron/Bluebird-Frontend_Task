import { configureStore } from "@reduxjs/toolkit"
import vehiclesReducer from "../state/features/vehicles"

const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
  }
})

export default store