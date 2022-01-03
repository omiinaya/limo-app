import React, { useRef } from "react";
import styles from "./styles";
import Carousel from "../Carousel";
import BannerMenu from "../BannerMenu";
import Services from "../Services";
import HomeMenu from "../HomeMenu";
import MoreInfo from "../MoreInfo";
import Fleet from "../Fleet";

function Home() {
  const classes = styles();
  const myRef = useRef(null)
  const executeScroll = () => {
    const el = myRef.current
    const yOffset = -130; 
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
  
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
      <div className={classes.moreInfo} onClick={()=> {
          console.log('test')
          executeScroll()
        }}>
        <MoreInfo />
      </div>
      <div ref={myRef} className={classes.services}>
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
