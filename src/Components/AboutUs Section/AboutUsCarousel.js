import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from "@material-ui/core/styles";
import Slide1 from './../../assets/Slide1.jpg';
import Slide2 from './../../assets/Slide2.jpg';

const useStyles = makeStyles((theme) => ({
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
}));

export default function AboutUsCarousel() {
  var items = [
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
        {items.map((item, i) => <Item key={i} item={item} />)}
      </Carousel>
    </div>
  )
}

function Item(props) {
  const classes = useStyles();
  return (
    <div className={classes.aspectRatioBoxOuter}>
      <div className={classes.aspectRatioBoxInner}>
        <img alt="" src={props.item.photo} className={classes.photo} />
      </div>
    </div>
  )
}