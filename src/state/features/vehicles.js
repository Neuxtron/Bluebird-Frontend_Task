import { createSlice } from "@reduxjs/toolkit";

export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    vehiclesByCategory: [],
    categories: [],
    bookedIds: [],
    likedIds: [],
  },
  reducers: {
    setLikeVehicle: (state, action) => {
      // TODO: add vehicle id to likedIds
    },
    bookVehicle: (state, action) => {
      // TODO: add vehicle id to bookedIds
    },
    setVehicles: (state, action) => {
      state.vehiclesByCategory = action.payload
    },
    setCategories: (state, action) => {
      state.categories = action.payload
    },
  }
})

export const { setVehicles, setCategories, setLikeVehicle, bookVehicle } = vehiclesSlice.actions
export default vehiclesSlice.reducer