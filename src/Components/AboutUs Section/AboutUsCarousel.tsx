import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from "@material-ui/core/styles";
import Slide1 from './../../assets/Slide1.webp';
import Slide2 from './../../assets/Slide2.webp';

const useStyles = makeStyles({
  carouselContainer: {
    textAlign: 'center',
    maxWidth: "100vw",
    width: 450,
    borderRadius: 6
  },
  description: {
    margin: 0,
    color: 'white'
  },
  descriptionContainer: {
    background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.60) 15%, rgba(0,0,0,0.60) 85%, rgba(0,0,0,0) 100%)',
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%"
  },
  item: {
    maxWidth: "100vw",
    width: 450
  },
  aspectRatioBoxOuter: {
    width: "inherit",
    height: 0,
    overflow: "hidden",
    paddingTop: "56.25%",
    position: "relative"
  },
  aspectRatioBoxInner: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  photo: {
    width: "inherit",
    borderRadius: 6
  }
});

export default function AboutUsCarousel() {
  const items = [
    {
      photo: Slide1
    },
    {
      photo: Slide2
    }
  ]
  return (
    <div className={useStyles().carouselContainer}>
      <Carousel
        autoPlay={true}
        animation='slide'
        timeout={300}
        interval={5000}
      >
        {items.map((item, i) => <Item key={i} photo={item.photo} />)}
      </Carousel>
    </div>
  );
}

interface Props {
  photo: string;
}
function Item(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.aspectRatioBoxOuter}>
      <div className={classes.aspectRatioBoxInner}>
        <img alt="" src={props.photo} className={classes.photo} />
      </div>
    </div>
  );
}