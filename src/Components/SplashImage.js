import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import SplashImage from './../assets/SplashScreen.jpg';

const useStyles = makeStyles({
  splashImage: {
    height: "100vh",
    width: "inherit",
    position: "absolute",
    zIndex: 0
  }
});

export default function SplashImageComponent() {
  const classes = useStyles();
  return (
    <img src={SplashImage} alt="Splash" className={classes.splashImage}/>
  );
}
