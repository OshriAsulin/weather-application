import React, { useEffect, useState } from "react";
import Container from "../../elements/Container/Container";
import style from "./CityWeatherInfoContainer.module.css";
import DayWeatherBox from "../DayWeatherBox/DayWeatherBox";
import { setDefaultCityWeather } from "../../redux/defaultCitySlice";
import { useDispatch, useSelector } from "react-redux";

const CityWeatherInfoContainer = () => {
  const dispatch = useDispatch();
  const defaultCityWeather = useSelector((state) => state);

  useEffect(() => {
    // fetch("/api/weatherData?city=Tel Aviv")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Dispatch the action to set the default city weather in the Redux store
    //     dispatch(setDefaultCityWeather(data));
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching default city weather:", error);
    //   });
  }, []);

  return (
    <Container>
      <div className={style.first_content}>
        {/* <h1>{defaultCityWeather.cityName}</h1> */}
        <button>Save to favorites</button>
      </div>
      <div className={style.second_content}>
        <h3>tusday</h3>
      </div>
      <div className={`column-wrap ${style.third_content}`}>
        <DayWeatherBox day={defaultCityWeather.day} />
        <DayWeatherBox />
        <DayWeatherBox />
        <DayWeatherBox />
        <DayWeatherBox />
      </div>
    </Container>
  );
};

export default CityWeatherInfoContainer;
