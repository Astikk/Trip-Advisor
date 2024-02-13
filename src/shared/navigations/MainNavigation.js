import React from "react";
import "./mainNavigation.css";
import { Link } from "react-router-dom";
import MainHeader from "./Mainheader";
import NavLinks from "./navLinks";
import SideDrawer from "./sideDrawer";

function MainNavigation(props) {
  return (
    <React.Fragment>
    <SideDrawer>
        <nav className="main-navigation__drawer-nav">
            <NavLinks/>
        </nav>
    </SideDrawer>
    <MainHeader>  
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">YourPlaces</Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <NavLinks/>
      </nav>
    </MainHeader>
    </React.Fragment>
  );
}

export default MainNavigation;
