import React, { Fragment } from "react";
import mealbanner from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import HomeNav from "./HomeNav";
import classes from "./Header.module.css";


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.logo}>Foodies</h1>
        <HomeNav inMenu={props.inMenu || false} inAbout={props.inAbout || false}/>
        {props.showButton && <HeaderCartButton onClick={props.onClick}></HeaderCartButton>}
        {/* {!props.showButton && <HomeNav />} */}
      </header>
      <div className={classes["main-image"]}>
        <img src={mealbanner} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
