import React from "react";
import { Helmet } from "react-helmet";
import SearchBar from "../components/SearchBar";
import CityWeatherInfoContainer from "../components/CityWeatherInfoContainer";

const Weather = () => {
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // width: '50%'
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Weather App - Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* <div style={divStyle}> */}
        <SearchBar />
      {/* </div> */}
      <CityWeatherInfoContainer/>
    </>
  );
};

export default Weather;
