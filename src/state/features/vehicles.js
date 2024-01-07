import { createSlice } from "@reduxjs/toolkit"

export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    vehiclesByCategory: [],
    categories: [],
    bookedIds: [],
    likedIds: [],
  },
  reducers: {
    toggleLikeVehicle: (state, action) => {
      if (state.likedIds.includes(action.payload)) {
        state.likedIds = state.likedIds.filter(id => {
          return id !== action.payload
        })
      } else {
        state.likedIds.push(action.payload)
      }
    },
    bookVehicle: (state, action) => {
      if (!state.bookedIds.includes(action.payload)) {
        state.bookedIds.push(action.payload)
      }
    },
    setVehicles: (state, action) => {
      state.vehiclesByCategory = action.payload
    },
    setCategories: (state, action) => {
      state.categories = action.payload
    },
  },
})

export const { setVehicles, setCategories, toggleLikeVehicle, bookVehicle } =
  vehiclesSlice.actions
export default vehiclesSlice.reducer
