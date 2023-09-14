import { configureStore } from "@reduxjs/toolkit";
import defaultCityReducer from "./redux/defaultCitySlice";
const store = configureStore({
  reducer: {
    defaultCity: defaultCityReducer,
  },
});

export default store;
