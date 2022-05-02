import React from "react";
import "../css/Header.css";
import logo from "./scarebnbLogo.png";
import styled from "styled-components"

const Header = () => {
  return (
    <div className="header">
      <Logo src={logo} alt="logo" />
    </div>
  );
};

export default Header;

const Logo = styled.img`
height: 90px;
`