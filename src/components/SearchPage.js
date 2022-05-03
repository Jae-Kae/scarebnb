import { Button } from "@mui/material";
import React from "react";
import "../css/SearchPage.css";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>53 stays ◦ 26 august to 30 august ◦ 2 guests</p>
        <h1>Scares nearby</h1>
        <Button variant="outlined">Cancellation</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
    </div>
  );
};

export default SearchPage;
