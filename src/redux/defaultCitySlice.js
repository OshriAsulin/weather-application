// defaultCitySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const defaultCitySlice = createSlice({
  name: "defaltCity",
  initialState,
  reducers: {
    setDefaultCityWeather: (state, action) => {
      state.weatherData = action.payload;
    },
  },
});

// Other actions and reducers...

export const { setDefaultCityWeather } = defaultCitySlice.actions;
export default defaultCitySlice.reducer;
