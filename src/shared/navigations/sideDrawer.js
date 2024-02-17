import React from "react";
import ReactDOM from 'react-dom';
import { CSSTransition } from "react-transition-group";

import "./sideDrawer.css";
import { TransitionGroup } from "react-transition-group";

const SideDrawer = props => {
    const content = (
    //if in is "true" then only it show other wise removed
    <CSSTransition 
    in={props.show} 
    timeout={200} 
    classNames="slide-in-left" 
    mountOnEnter 
    unmountOnExit
    >
        <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
    );
    return ReactDOM.createPortal(content,document.getElementById('drawer-hook'));
};

export default SideDrawer;
