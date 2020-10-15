import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Colors from "./Colors.js";

const HeaderSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px 60px;
`;

const LogoSection = styled(Link)`
  ////
`;

const Nav = styled.div`
  /////
`;

const Title = styled.h1`
  color: black;
  font-family: sans-serif;
  text-decoration: underline;
  text-decoration-color: orange;
`;

const Links = styled(NavLink)`
  color: "4700e0";
  font-family: sans-serif;
  font-weight: bold;
  position: relative;
  text-decoration: none;
  padding: 0 16px;

  &:focus {
    color: ${Colors.activeColor};
  }

  &::after {
    content: "";
    position: absolute;
    background-color: currentColor;
    left: 0;
    right: 0;
    bottom: -5px;
    width: 50%;
    margin: auto;
    height: 3px;
    transform: scaleX(0);
    transform-origin: center center;
    border-radius: 2px;
  }

  &:focus::after {
    transform: scaleX(1);
    opacity: 1;
  }
`;

const Header = (props) => {
  return (
    <HeaderSection>
      <LogoSection to="/">
        <Title>Fruit Emporium</Title>
      </LogoSection>
      <Nav>
        <Links to="/">Home</Links>
        <Links to="/about">About</Links>
      </Nav>
    </HeaderSection>
  );
};

export default Header;
