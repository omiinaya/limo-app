import React from "react";
import styles from "./styles";
import Carousel from "../Carousel";
import BannerMenu from "../BannerMenu";
import Service from "../Service";

function Home() {
  const classes = styles();
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.carousel}>
          <Carousel />
        </div>
        <div className={classes.bannerMenu}>
          <BannerMenu />
        </div>
      </div>
      <div className={classes.service}>
        <Service />
      </div>
    </div>
  );
}

export default Home;
