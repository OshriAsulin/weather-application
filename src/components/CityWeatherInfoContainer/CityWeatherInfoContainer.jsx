import React, { useEffect, useState } from "react";
import Container from "../../elements/Container/Container";
import style from "./CityWeatherInfoContainer.module.css";
import DayWeatherBox from "../DayWeatherBox/DayWeatherBox";
import { useDispatch, useSelector } from "react-redux";

const CityWeatherInfoContainer = () => {
  const dispatch = useDispatch();
  const currentCity = useSelector((state) => state.currentCity);
  console.log('current from homeContainer - ',currentCity)
  const weatherData = useSelector((state) => state.weather);
  console.log('weather from homeContainer -',weatherData)

  return (
    <Container>
      <div className={style.first_content}>
        <h1>{currentCity.name}</h1>
        <button>Save to favorites</button>
      </div>
      <div className={style.second_content}>
        <h3>tusday</h3>
      </div>
      <div className={`column-wrap ${style.third_content}`}>
        <DayWeatherBox  />
        <DayWeatherBox />
        <DayWeatherBox />
        <DayWeatherBox />
        <DayWeatherBox />
      </div>
    </Container>
  );
};

export default CityWeatherInfoContainer;
