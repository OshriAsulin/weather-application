import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  return (
    <div className="search_bar">
      <TextField
        sx={{ width: "100%" }} // Adjust the padding to fit the search icon
        placeholder="Search a city"
      />
      <SearchIcon
        fontSize="large"
        style={{
          position: "absolute",
          right: "5px", // Adjust the left position as needed
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          cursor: "pointer"
        }}
      />
    </div>
  );
};

export default SearchBar;
