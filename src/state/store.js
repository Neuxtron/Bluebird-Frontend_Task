import { configureStore } from "@reduxjs/toolkit"
import vehiclesReducer from "../state/features/vehicles"
import searchReducer from "../state/features/search"

const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    search: searchReducer,
  }
})

export default store