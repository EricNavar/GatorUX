import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import SplashImage from './../assets/SplashScreen.jpg';

const useStyles = makeStyles({
  splashImage: {
    width: "100%",
    minHeight: "100vh",
    backgroundImage: "url(" + SplashImage + ")",
    textAlign: 'center',
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 0,
    position: "absolute"
  }
});

export default function SplashImageComponent() {
  const classes = useStyles();
  return (
    <div className={classes.splashImage} />
  );
}
