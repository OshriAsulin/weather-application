import React from "react";
import TextField from "@mui/material/TextField";
import Container from "../elements/Container/Container";
import Box from "@mui/material/Box";

const Weather = () => {
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // width: '50%'
  };
  return (
    <>
      <div style={divStyle}>
        <TextField
          sx={{ width: "50%", marginTop: 5 }}
          placeholder="Search a city"
        />
      </div>
      <Container>

        
      </Container>
    </>
  );
};

export default Weather;
