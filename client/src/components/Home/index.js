import React from "react";
import styles from "./styles";
import Carousel from "../Carousel";
import BannerMenu from "../BannerMenu";
import Services from "../Services";

function Home() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <div className={classes.mainContainer}>
        <div className={classes.carousel}>
          <Carousel />
        </div>
        <div className={classes.bannerMenu}>
          <BannerMenu />
        </div>
      </div>
      <div className={classes.serviceCotnainer}>
        <div className={classes.services}>
          <Services />
        </div>
      </div>
    </div>
  );
}

export default Home;
