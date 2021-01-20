import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SplashImage from './../assets/SplashScreen.webp';
import ScrollDownIcon from "./ScrollDownIcon";

const useStyles = makeStyles({
  homeBannerContainer: {
    width: "100%",
    minHeight: "100vh",
    backgroundImage: "url(" + SplashImage + ")",
    textAlign: 'center',
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  homeBanner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "100vh",
    margin: "auto 0px",
    color: "white"
  },
  darkBackgroundWrapper: {
    background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.50) 12%, rgba(0,0,0,0.50) 88%, rgba(0,0,0,0) 100%)",
    maxWidth: "100vw",
    marginBottom: "1rem"
  },
  meetingInfo: {
    fontSize: "1.2rem",
    marginTop: "1.2rem"
  },
  semesterLine: {
    paddingLeft: 24,
    paddingRight: 24,
    fontSize: 24,
    fontWeight: 400
  }
});

export default function HomeBanner() {
  const classes = useStyles();
  return (
    <section id="image-container" className={classes.homeBannerContainer}>
      <div className={classes.homeBanner}>
        <div className={classes.darkBackgroundWrapper}>
          <Typography variant='h1' component='h1' style={{lineHeight: 1.1}}>
            All Things User Experience
          </Typography>
        </div>
        <div className={classes.darkBackgroundWrapper}>
          <Typography className={classes.semesterLine}>Spring 2021 Meetings</Typography>
          <Typography className={classes.meetingInfo}>Fridays, 7:00pm over Zoom</Typography>
        </div>
        <ScrollDownIcon />
      </div>
    </section>
  );
}
