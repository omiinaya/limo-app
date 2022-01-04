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
import Footer from "../Footer"
import MottoMenu from "../MottoMenu"
import ReserveModal from '../ReserveModal';

function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [openReserve, setOpenReserve] = useState(false);
  const [openQuote, setOpenQuote] = useState(false);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset)

  }
  const toggleReserve = () => {
    setOpenReserve(!openReserve)
    console.log(openReserve)
  }

  const toggleQuote = () => {
    setOpenQuote(!openQuote)
    console.log(openQuote)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  const classes = styles();

  return (
    <div name='main'>
      <div className={classes.main} style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
        <div className={classes.carousel}>
          <Carousel />
        </div>
        <div className={classes.bannerMenu}>
          <BannerMenu
            stateReserve={openReserve}
            stateQuote={openQuote}
            toggleReserve={toggleReserve}
            toggleQuote={toggleQuote}
          />
        </div>
      </div>
      <div className={classes.sub}>
        <div className={classes.homeMenu}>
          <HomeMenu />
        </div>
        <div className={classes.moreInfo}>
          <MoreInfo />
        </div>
        <div className={classes.mottoMenu}>
          <MottoMenu />
        </div>
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
      <div className={classes.footer}>
        <Footer />
      </div>
      <div>
        <ReserveModal
          stateReserve={openReserve}
          toggleReserve={toggleReserve}
        />
      </div>
    </div>
  );
}

export default Home;
