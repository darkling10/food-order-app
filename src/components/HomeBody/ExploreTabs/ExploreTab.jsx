import React from "react";
import ExploreItem from "./ExploreItem";
import biryani from "../../../assets/biryani.jpg";
import classes from "./ExploreTab.module.css";
import sushi from "../../../assets/sushi.jpg";
import burger from "../../../assets/burger.jpg";

const ExploreTab = (props) => {
  return (
    <div className={classes.imgContainer}>
      <div className={classes.imgItems}>
        <ExploreItem toSpan="Want to Order" imgSrc={biryani} />
      </div>
      <div className={classes.imgItems}>
        <ExploreItem toSpan="Want to Order" imgSrc={biryani} />
      </div>
      <div className={classes.imgItems}>
        <ExploreItem toSpan="Want to Order" imgSrc={biryani} />
      </div>
    </div>
  );
};

export default ExploreTab;
