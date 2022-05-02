import { Button } from "@mui/material";
import { useState } from "react";
import "../css/Banner.css";
import Search from "./Search";


const Banner = () => {
    const [showSearch, setShowSearch] = useState(false)


  return (
    <div className="banner">
      <div className="banner__search">
          {showSearch && <Search/>}
        <Button 
        onClick={()=>{setShowSearch(!showSearch)}}
        className="banner__searchButton" 
        variant="outlined">
            {!showSearch ? "Search Dates" : "Hide"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Renters beware, you're in for a scare!</h1>
        <h5>
          Plan a spooky getaway to uncover scary loacations hidden near you
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
