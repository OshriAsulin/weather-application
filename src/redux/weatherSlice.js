import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weatherCondition: {
    temperatureTypes: {
      metric: {
        value: null,
        unit: null,
      },
      imperial: {
        value: null,
        unit: null,
      },
    },
    weatherText: null,
    weatherIcon: null,
    epochTime: null,
  },
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
      setWeatherData: (state, action) => {
        const {
          metricValue,
          metricUnit,
          imperialValue,
          imperialUnit,
          weatherText,
          weatherIcon,
          epochTime,
        } = action.payload;
  
        state.weatherCondition.temperatureTypes.metric.value = metricValue;
        state.weatherCondition.temperatureTypes.metric.unit = metricUnit;
        state.weatherCondition.temperatureTypes.imperial.value = imperialValue;
        state.weatherCondition.temperatureTypes.imperial.unit = imperialUnit;
        state.weatherCondition.weatherText = weatherText;
        state.weatherCondition.weatherIcon = weatherIcon;
        state.weatherCondition.epochTime = epochTime;
      },
    },
  });
  
  export const { setWeatherData } = weatherSlice.actions;
  export default weatherSlice.reducer;
