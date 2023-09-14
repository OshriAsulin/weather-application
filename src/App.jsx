import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

import Favorite from "./pages/Favorites";
import Weather from "./pages/Weather";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
