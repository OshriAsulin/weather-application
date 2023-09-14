import React from 'react'
import style from './DayWeatherBox.module.css'
const DayWeatherBox = ({day, temperature}) => {
  return (
    <div className={style.day_box_weather}>
        <h2 className={style.title_box}>{day}</h2>
        <p className={style.mid_context}>{temperature}</p>
        {/* <p className={style.bottom_context}>Sunny</p> */}
    </div>
  )
}

export default DayWeatherBox