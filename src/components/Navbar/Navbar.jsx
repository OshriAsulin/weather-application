import * as React from "react";
// import { useThemeStore } from "../../themeStore";
// import ThemeToggleMode from "../../ThemeToggleMode";
import { Link } from "react-router-dom";
import style from './Nvabar.module.css'
const Navbar = () => {
  // const { mode, toggleColorMode } = useThemeStore();

  return (
     <header>
    <div className={style.navbar}>
        <div>
          <h2 className={style.title}><Link to='/'>Weather App</Link></h2>
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


{/* <div id='home'>
            <header className='hero'>
                <div id="navbar" className={scrollPos ? 'navbar' : 'navbar top'}>
                    <h1 className="logo">
                        <span className="text-primary"><i className="fas fa-book-open"></i> Edge</span>
                        Ledger
                    </h1>
                    <nav>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#cases">Cases</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="content">
                    <h1>The Sky Is Limit</h1>
                    <p>We provide world calss financial assistance</p>
                    <a href="#about" className="btn"> <i className="fas fa-chevron-right"></i> Read More</a>

                </div>
            </header>
        </div> */}