import React from "react";
import Carousel from "react-material-ui-carousel";
import Banner from "../Banner";
import styles from "./styles";

const rows = [
  {
    Items: [
      {
        Name: "LIMO",
        Image: "https://images.unsplash.com/photo-1605329674253-c7680c5e44cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    ],
  },
  {
    Items: [
      {
        Name: "SUV",
        Image: "https://images.unsplash.com/photo-1574729418856-5a0804729a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    ],
  },
  {
    Items: [
      {
        Name: "CAR",
        Image: "https://images.unsplash.com/photo-1618277841432-02359de77eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
      },
    ],
  },
];

function main() {
  const classes = styles();

  return (
    <div style={{ color: "#494949" }}>
      <Carousel
        className={classes.Root}
        autoPlay={true}
        animation="fade"
        indicators={false}
        timeout={100}
        cycleNavigation={true}
        navButtonsAlwaysVisible={true}
        navButtonsAlwaysInvisible={false}
      >
        {rows.map((item, index) => {
          return (
            <Banner
              item={item}
              key={index}
              contentPosition={item.contentPosition}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default main;
