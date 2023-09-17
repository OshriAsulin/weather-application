import React, { useEffect, useState } from "react";
import style from "./SearchBar.module.css";
const SearchBar = () => {
  const [cityName, setCityName] = useState("");
  // const [results, setResults] = useState([]);
  useEffect(() => {
    // const fetchCurrent = async () => {
    //   const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=WJ9kOJdwSpEsVz3E6l5ULWiPpX8JoJL0&q=${cityName}`);
    //   const data = await response.json();
    //   console.log(data);
    // };
    // fetchCurrent();
  }, []);

  return (
    <div className={style.search_bar}>
      <input
        type="text"
        className={style.search_input}
        placeholder="Search a city"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <span className={`material-symbols-outlined ${style.search_icon}`}>
        search
      </span>
    </div>
  );
};

export default SearchBar;
