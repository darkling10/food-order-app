import React, { Fragment } from "react";
import mealbanner from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import HomeNav from "./HomeNav";
import classes from "./Header.module.css";
import TargetLink from "../Links/TargetLink";


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.logo}><TargetLink toPath='/' name="Foodies"></TargetLink></h1>
        <HomeNav inMenu={props.inMenu || false} inAbout={props.inAbout || false}/>
        {props.showButton && <HeaderCartButton onClick={props.onClick}></HeaderCartButton>}
        {/* {!props.showButton && <HomeNav />} */}
      </header>
      {props.showBanner && <div className={classes["main-image"]}>
        <img src={mealbanner} alt="A table full of delicious food!" />
      </div>}
    </Fragment>
  );
};

export default Header;
