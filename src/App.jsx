import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useThemeStore } from "./themeStore";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Favorite from "./pages/Favorites";
import Weather from "./pages/Weather";

function App() {
  const { mode } = useThemeStore();
  const theme = createTheme({
    palette: {
      mode,
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
