import * as React from "react";
// import { useThemeStore } from "../../themeStore";
// import ThemeToggleMode from "../../ThemeToggleMode";
import { Link } from "react-router-dom";
import style from "./Nvabar.module.css";
const Navbar = () => {
  // const { mode, toggleColorMode } = useThemeStore();

  return (
    <header>
      <div className={style.navbar}>
        <div>
          <h2 className={style.title}>
            <Link to="/">Weather App</Link>
          </h2>
        </div>
        <div>
          <ul className={style.nav_links}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
