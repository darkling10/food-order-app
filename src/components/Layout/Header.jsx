import React, { Fragment } from "react";
import mealbanner from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Foodies</h1>
        <HeaderCartButton onClick={props.onClick}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealbanner} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
