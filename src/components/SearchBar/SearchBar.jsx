import React, { useEffect, useState } from "react";
import style from "./SearchBar.module.css";
import axios from "axios";
const SearchBar = () => {
  const [cityName, setCityName] = useState("");
  // const [results, setResults] = useState([]);

  useEffect(() => {
    if (cityName) {
      const apiUrl =`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${import.meta.env.VITE_API_KEY}&q=${cityName}`;

      // Make the GET request to the AccuWeather API
      axios.get(apiUrl)
      
        .then((response) => {
          // setResults(response.data);
          console.log('res',response.data)
          // console.log('results',results)
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [cityName]);

  return (
    <div className={style.search_bar}>
      <input
        type="text"
        className={style.search_input}
        placeholder="Search a city"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <span
        className={`material-symbols-outlined ${style.search_icon}`}
      >
        search
      </span>
    </div>
  );
};

export default SearchBar;
