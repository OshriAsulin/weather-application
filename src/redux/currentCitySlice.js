// defaultCitySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {name: 'tel-aviv', keyCode : '215854'};

const currentCitySlice = createSlice({
  name: "currentCity",
  initialState,
  reducers: {
    setCurrentCity: (state, action) => {
      state.weatherData = action.payload;
    },
  },
});

// Other actions and reducers...

export const { setCurrentCity } = currentCitySlice.actions;
export default currentCitySlice.reducer;
