import React from "react";
import classes from "./ExploreItem.module.css";

const ExploreItem = (props) => {
  return (
    <div className={classes.itemContainer}>
      <div className={classes.imgHolder}>
        <img src={props.imgSrc} alt="order" />
      </div>
      <div>
        <p>{props.toSpan}</p>
      </div>
    </div>
  );
};

export default ExploreItem;
