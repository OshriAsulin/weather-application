import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { useThemeStore } from "../themeStore";
import ThemeToggleMode from "../ThemeToggleMode";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { mode, toggleColorMode } = useThemeStore();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Weather Task
          </Typography>

          <ThemeToggleMode
            toggleColorMode={toggleColorMode}
            isDarkMode={mode === "dark"}
          />
          <Box sx={{ border: "1px solid black", padding: 1 }}>
            <Link to='/'>Home</Link>
            <Link to='/favorites'>Favorites</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
