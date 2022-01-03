import React from "react";
import styles from "./styles";
import Carousel from "../Carousel";
import BannerMenu from "../BannerMenu";
import Services from "../Services";
import HomeMenu from "../HomeMenu";
import MoreInfo from "../MoreInfo";
import Fleet from "../Fleet";

function Home() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <div className={classes.main}>
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
      <div className={classes.moreInfo}>
        <MoreInfo />
      </div>
      <div className={classes.services}>
        <Services />
      </div>
      <div className={classes.fleet}>
        <Fleet />
      </div>
      <div> 

      </div>
    </div>
  );
}

export default Home;
