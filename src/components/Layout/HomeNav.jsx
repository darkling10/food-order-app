import React from "react";
import { Link } from "react-router-dom";
import TargetLink from "../Links/TargetLink";
import classes from "./HomeNav.module.css";

const HomeNav = () => {
  return (
    <div className={classes.headtag}>
      <TargetLink toPath='/products' name='Products'></TargetLink>
      <TargetLink toPath='/about' name="About"></TargetLink>
    </div>
  );
};

export default HomeNav;
