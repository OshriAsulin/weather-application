import React from 'react'
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ThemeToggleMode = ({ toggleColorMode, isDarkMode }) => {

  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
    {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
  </IconButton>  )
}

export default ThemeToggleMode

