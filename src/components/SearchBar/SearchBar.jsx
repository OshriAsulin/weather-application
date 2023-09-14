import React from "react";
import style from './SearchBar.module.css'
const SearchBar = () => {
  return (
    <div className={style.search_bar}>
      <input type="text" className={style.search_input} placeholder="Search a city" />
      <span className={`material-symbols-outlined ${style.search_icon}`}>search</span>
    </div>
  );
};

export default SearchBar;
