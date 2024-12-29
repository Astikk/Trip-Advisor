import React from "react";
import ReactDOM from "react-dom";
import BackDrop from "./backDrop";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";

//If you have two components that work closely together.
function ModalOverlay(props) {
    const content = (
        <div className={`modal ${props.classname}`} style={props.style}>
        <header className={`modal__header ${props.headerClass}`}>
            <h2>{props.header}</h2>
        </header>
        <form onSubmit={props.onSubmit ? props.onSubmit : (event)=>event.preventDefault()}>
            <div className={`modal__content ${props.contentClass}`}>
                {props.children}
            </div>
            <footer className={`modal__footer ${props.footerClass}`}>
                {props.footer}
            </footer>
        </form>
        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
}


function Model(props) {
    return <React.Fragment>
        {props.show && <BackDrop onClick={props.onCancel}/>}
        <CSSTransition 
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal">
            <ModalOverlay {...props}/>
        </CSSTransition>
    </React.Fragment>
}

export default Model;