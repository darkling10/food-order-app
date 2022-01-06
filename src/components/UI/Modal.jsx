import React from "react";
import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}/>;
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const overlay = document.getElementById("cart-overlay");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, overlay)}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, overlay)}
    </Fragment>
  );
};

export default Modal;
