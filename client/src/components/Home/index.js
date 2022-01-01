import React from "react";
import styles from "./styles";
import Carousel from "../Carousel";
import BannerMenu from "../BannerMenu";

function Home() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Carousel />
      <BannerMenu />
    </div>
  );
}

export default Home;
