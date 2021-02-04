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
    alignItems: "start",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "100vh",
    margin: "auto 0px",
    color: "white",
    zIndex: 10
  },
  textWrapper: {
    background: "black",
    maxWidth: "100vw",
    zIndex: 1,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 14,
    paddingBottom: 14,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },
  meetingInfo: {
    fontSize: "1.2rem",
    zIndex: 2,
    textAlign: "center",
  },
  semesterLine: {
    paddingLeft: 24,
    paddingRight: 24,
    fontSize: 24,
    fontWeight: 400,
    zIndex: 2,
    textAlign: "center",
  },
  bannerTitle: {
    lineHeight: 1.1,
    textAlign: "center",
    fontSize: "4rem",
    margin:0
  },
  divider: {
    backgroundColor: '#5264f8',
    height: 5,
    marginBottom: 14
  },
});

export default function HomeBanner() {
  const classes = useStyles();
  return (
    <section id="image-container" className={classes.homeBannerContainer}>
      <Suspense fallback={<div/>}>
        <SplashImageComponent />
      </Suspense>
      <div className={classes.homeBanner}>
        <div className={classes.textWrapper}>
          <div style={{margin:"0 1.5rem"}}>
            <Typography variant='h1' component='h1' className={classes.bannerTitle}>
              GATOR UX
            </Typography>
            <div className={classes.divider}></div>
          </div>
          <Typography className={classes.semesterLine}>General body Meetings</Typography>
          <Typography className={classes.meetingInfo}>Mondays, 7:30pm over Zoom</Typography>
        </div>
        <ScrollDownIcon />
      </div>
    </section>
  );
}
