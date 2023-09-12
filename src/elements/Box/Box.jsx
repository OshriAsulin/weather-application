import React from 'react'
import style from './Box.module.css'
const Box = () => {
  return (
    <div className={style.box_weather}>
        <h2 className={style.title_box}>Jerusalem</h2>
        <p className={style.mid_context}>38 c</p>
        <p className={style.bottom_context}>Sunny</p>
    </div>
  )
}

export default Box