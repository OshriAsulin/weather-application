import React from "react";
import Box from "../elements/Box/Box";
import { Helmet } from "react-helmet";

const Favorites = () => {
  return (
    <div className="column-wrap">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Weather App - Favorites</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
};

export default Favorites;
