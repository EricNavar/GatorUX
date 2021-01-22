import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import SplashImage from './../assets/SplashScreen.webp';
import SplashImageMobile from './../assets/SplashScreenMobile.webp';

const useStyles = makeStyles({
  splashImage: {
    width: "100%",
    minHeight: "100vh",
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
    <React.Fragment>
      <Hidden xsDown>
        <div id='desktop-splash-image' className={classes.splashImage} style={{backgroundImage: "url(" + SplashImage + ")"}}/>
      </Hidden>
      <Hidden smUp>
        <div id='mobile-splash-image' className={classes.splashImage} style={{backgroundImage: "url(" + SplashImageMobile + ")"}}/>
      </Hidden>
    </React.Fragment>
  );
}
