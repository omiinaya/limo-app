import React from "react";
import styles from "./styles";
import Carousel from "../Carousel";
import BannerMenu from "../BannerMenu";
import HomeMenu from "../HomeMenu";

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
      <div className={classes.homeMenu}>
        <HomeMenu />
      </div>
    </div>
  );
}

export default Home;
