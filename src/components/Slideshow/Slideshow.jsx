import React from "react";
import { Slide } from "react-slideshow-image";
import classes from "./Slideshow.module.css";
import {} from "../../assets/biryani.jpg";
import "react-slideshow-image/dist/styles.css";
import biryani from "./Images/biryani.jpg";

const slideImages = [
  {
    url: { biryani },
    caption: "Slide 1",
  },
  {
    url: { biryani },
    caption: "Slide 2",
  },
  {
    url: { biryani },
    caption: "Slide 3",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className={classes.eachslide} key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              <img src={slideImage.url} alt="Hiii"></img>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
