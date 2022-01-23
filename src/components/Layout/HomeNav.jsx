import React from "react";
import { Link } from "react-router-dom";
import TargetLink from "../Links/TargetLink";
import classes from "./HomeNav.module.css";

const HomeNav = (props) => {
  return (
    <div className={classes.headtag}>
      {!props.inMenu && <TargetLink toPath='/products' name='Products'></TargetLink>}
      {!props.inAbout && <TargetLink toPath='/about' name="About"></TargetLink>}
    </div>
  );
};

export default HomeNav;
