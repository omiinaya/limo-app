import React, { useEffect, useState } from "react";
import styles from "./styles";
import Carousel from "../Carousel";
import BannerMenu from "../BannerMenu";
import Services from "../Services";
import HomeMenu from "../HomeMenu";
import MoreInfo from "../MoreInfo";
import Fleet from "../Fleet";
import Reservations from "../Reservations";
import AboutUs from "../AboutUs";
import ContactUs from "../ContactUs";
import Test from "../Test"

function Home() {
  const classes = styles();
  const handleScroll = () => { setOffsetY(window.pageYOffset) }

  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <div className={classes.root} name='Main'>
      <div className={classes.main} style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
        <div className={classes.carousel}>
          <Carousel />
        </div>
        <div className={classes.bannerMenu} >
          <BannerMenu />
        </div>
      </div>
      <div className={classes.mid}>
        <div className={classes.homeMenu}>
          <HomeMenu />
        </div>
        <div className={classes.moreInfo}>
          <MoreInfo />
        </div>
        <div className={classes.sub} id='sub'>
          <div className={classes.sections} name='Services'>
            <Services />
          </div>
          <div className={classes.sections} name='Fleet'>
            <Fleet />
          </div>
          <div className={classes.sections} name='Reservations'>
            <Reservations />
          </div>
          <div className={classes.sections} name='AboutUs'>
            <AboutUs />
          </div>
          <div className={classes.sections} name='ContactUs'>
            <ContactUs />
          </div>
        </div>
        <div>
          <Test />
        </div>
      </div>
    </div>
  );
}

export default Home;
