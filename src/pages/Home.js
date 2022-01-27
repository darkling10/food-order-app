import React, { Fragment } from "react";
import Header from "../components/Layout/Header";
import HomeBody from "../components/HomeBody/HomeBody";

const Home = () => {
  return (
    <Fragment>
      <Header showButton={false} showBanner={true}/>
      <section>
        <HomeBody/>
      </section>
    </Fragment>
  );
};

export default Home;
