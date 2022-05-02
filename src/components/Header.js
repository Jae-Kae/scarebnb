import React from "react";
import "../css/Header.css";
import logo from "./scarebnbLogo.png";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <img 
      className="header__icon"
      src={logo} 
      alt="logo" />
      <div className="header__center">
        <input type="text"/>
        <SearchIcon/>
      </div>
      <div className="header__right">
        <p>Become a spooky host</p>
        <LanguageIcon/>
        <ExpandMoreIcon/>
        <Avatar/>
      </div>
    </div>
  );
};

export default Header;
