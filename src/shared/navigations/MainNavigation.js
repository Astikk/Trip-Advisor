import React, { useState } from "react";
import "./mainNavigation.css";
import { Link } from "react-router-dom";
import MainHeader from "./Mainheader";
import NavLinks from "./navLinks";
import SideDrawer from "./sideDrawer";
import BackDrop from "../UI elements/backDrop";

function MainNavigation(props) {
  const [drawerIsopen, setDrawerIsopen] = useState(false);
  function onclose() {
    setDrawerIsopen(false);
  }
  function closeDrawer(){
    setDrawerIsopen(false);
  }
  return (
    <React.Fragment>
      {drawerIsopen && <BackDrop onClick={onclose} />}
      <SideDrawer show={drawerIsopen} onClick={closeDrawer}>
          <NavLinks className="main-navigation__drawer-nav"/>
      </SideDrawer>
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={() => setDrawerIsopen(true)}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
}

export default MainNavigation;
