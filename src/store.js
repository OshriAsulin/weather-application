import { configureStore } from "@reduxjs/toolkit";
import currentCityReducer from "./redux/currentCitySlice";
import weatherReducer from "./redux/weatherSlice";
const store = configureStore({
  reducer: {
    currentCity: currentCityReducer,
    weather: weatherReducer
  },
});

export default store;
