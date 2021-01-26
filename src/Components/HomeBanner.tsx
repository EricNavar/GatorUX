import React, { lazy, Suspense } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ScrollDownIcon from "./ScrollDownIcon";
const SplashImageComponent = lazy(() => import('./SplashImage'));

const useStyles = makeStyles({
  homeBannerContainer: {
    width: "100%",
    minHeight: "100vh",
  },
  homeBanner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "100vh",
    margin: "auto 0px",
    color: "white",
    zIndex: 10
  },
  darkBackgroundWrapper: {
    background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.50) 12%, rgba(0,0,0,0.50) 88%, rgba(0,0,0,0) 100%)",
    maxWidth: "100vw",
    marginBottom: "3rem",
    zIndex: 1,
    paddingLeft: 12,
    paddingRight: 12
  },
  meetingInfo: {
    fontSize: "1.2rem",
    marginTop: "1.2rem",
    zIndex: 2
  },
  semesterLine: {
    paddingLeft: 24,
    paddingRight: 24,
    fontSize: 24,
    fontWeight: 400,
    zIndex: 2
  },
  bannerTitle: {
    lineHeight: 1.1,
    textAlign:"center"
  }
});

export default function HomeBanner() {
  const classes = useStyles();
  return (
    <section id="image-container" className={classes.homeBannerContainer}>
      <Suspense fallback={<div/>}>
        <SplashImageComponent />
      </Suspense>
      <div className={classes.homeBanner}>
        <div className={classes.darkBackgroundWrapper}>
          <Typography variant='h1' component='h1' className={classes.bannerTitle}>
            All Things User Experience
          </Typography>
        </div>
        <div className={classes.darkBackgroundWrapper}>
          <Typography className={classes.semesterLine}>Spring 2021 Meetings</Typography>
          <Typography className={classes.meetingInfo}>Mondays, 7:30pm over Zoom</Typography>
        </div>
        <ScrollDownIcon />
      </div>
    </section>
  );
}
