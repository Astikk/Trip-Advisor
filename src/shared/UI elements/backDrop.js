import React from "react";
import ReactDOM from "react-dom";
import "./backDrop.css";

function BackDrop(props) {
    debugger;
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook")
  );
}

export default BackDrop;
