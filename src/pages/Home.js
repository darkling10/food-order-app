import React, { Fragment } from "react";
import Header from "../components/Layout/Header";
import Slideshow from "../components/Slideshow/Slideshow";

const Home = () => {
  return (
    <Fragment>
      <Header showButton={false} />
      <main>
        <Slideshow></Slideshow>
      </main>
    </Fragment>
  );
};

export default Home;
