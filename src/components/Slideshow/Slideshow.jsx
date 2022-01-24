import React from "react";

import {} from "../../assets/biryani.jpg";
import "react-slideshow-image/dist/styles.css";
import classes from "./Slideshow.module.css";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "images/slide_2.jpg",
  "images/slide_3.jpg",
  "images/slide_4.jpg",
];

const Slideshow = () => {
  return (
    <div>
      <Slide easing="ease">
        <div className={classes.eachslide}>
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className={classes.eachslide}>
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div cclassName={classes.eachslide}>
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
