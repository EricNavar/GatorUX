import React, { useEffect, lazy, Suspense } from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import HomeBanner from "../Components/HomeBanner";
const AboutUs = lazy(() => import("../Components/AboutUs Section/AboutUs"));
const OfficersBanner = lazy(() => import("../Components/OfficersBanner Section/OfficersBanner"));
const ContactBanner = lazy(() => import("../Components/Contact/ContactBanner"));

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    homePage: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: theme.palette.background.default
    }
  })
);

export default function HomePage() {
  useEffect(() => {
    document.title = "Gator UX";
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const renderLoader = () => <CircularProgress/>;

  const classes = useStyles();
  return (
    <main className={classes.homePage}>
      <HomeBanner />
      <Suspense fallback={renderLoader()}>
        <AboutUs />
        <OfficersBanner />
        <ContactBanner />
      </Suspense>
    </main>
  );
}
