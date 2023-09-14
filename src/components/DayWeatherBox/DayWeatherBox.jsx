import React from 'react'
import style from './DayWeatherBox.module.css'
const DayWeatherBox = () => {
  return (
    <div className={style.day_box_weather}>
        <h2 className={style.title_box}>Jerusalem</h2>
        <p className={style.mid_context}>38 c</p>
        <p className={style.bottom_context}>Sunny</p>
    </div>
  )
}

export default DayWeatherBox