import React from "react";
import Container from "../../elements/Container/Container";
import style from "./CityWeatherInfoContainer.module.css";
import Box from "../../elements/Box/Box";
import DayWeatherBox from "../DayWeatherBox/DayWeatherBox";
const CityWeatherInfoContainer = () => {
  return (
    <Container>
      <div className={style.first_content}>
        <h1>Tel Aviv</h1>
        <button>Save to favorites</button>
      </div>
      <div className={style.second_content}>
        <h3>tusday</h3>
      </div>
      <div className={`column-wrap ${style.third_content}`}>
        <DayWeatherBox />
        <DayWeatherBox />
        <DayWeatherBox />
        <DayWeatherBox />
        <DayWeatherBox />

      </div>
    </Container>
  );
};

export default CityWeatherInfoContainer;
