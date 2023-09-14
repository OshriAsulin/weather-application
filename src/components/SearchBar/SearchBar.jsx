import React, { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = () => {

const [cityName, setCityName] = useState('')

  const searchCity = async () => {
    const response = await fetch(`/api/weatherData?city=${cityName}`);
    const data = await response.json();
    console.log(data);
    console.log(cityName)
  };


  return (
    <div className={style.search_bar}>
      <input
        type="text"
        className={style.search_input}
        placeholder="Search a city"
        value={cityName}
        onChange={(e)=>setCityName(e.target.value)}
      />
      <span className={`material-symbols-outlined ${style.search_icon}`} onClick={searchCity}>
        search
      </span>
    </div>
  );
};

export default SearchBar;
