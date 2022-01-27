import React from "react";
import classes from './HomeBody.module.css'
import ExploreTab from "./ExploreTabs/ExploreTab";


const HomeBody = () => {
  return (
    <div className={classes.container}>
      <ExploreTab/>
    </div>
  );
};

export default HomeBody;
