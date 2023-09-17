import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import SearchBar from "../components/SearchBar/SearchBar";
import CityWeatherInfoContainer from "../components/CityWeatherInfoContainer/CityWeatherInfoContainer";
import { useDispatch, useSelector } from "react-redux";
import {setWeatherData} from '../redux/weatherSlice'
const HomePage = () => {
  // const [currentCity, setCurrentCity] = useState({ name: "", key: "" });

  const dispatch = useDispatch();
// const currentCity = useSelector((state)=> state.currentCity)
// console.log(currentCity)
  useEffect(() => {
    const fetchCurrent = async () => {
      const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=8MIzGGl33vxvfOwRUAaO7amkjot7RP42`);
      const data = await response.json();
      console.log('current',data[0].Temperature);
      dispatch(
        setWeatherData({
          temperatureTypes: {
            metric: data[0].Temperature.metric,
            imperial: data[0].Temperature.imperial,
          },
          weatherText: data[0].weatherText,
          weatherIcon: data[0].weatherIcon,
          epochTime: data[0].EpochTime,
        })
      );   
      
      // dispatch(setCurrentCity(data));
    };
    fetchCurrent();

  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Weather App - Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <SearchBar />
      <CityWeatherInfoContainer  />
    </>
  );
};

export default HomePage;
