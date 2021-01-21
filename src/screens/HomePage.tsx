import React, { useEffect, lazy, Suspense } from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import HomeBanner from "../Components/HomeBanner";
import NoSsr from '@material-ui/core/NoSsr';
import Header from "./../Components/Header";
const AboutUs = lazy(() => import("../Components/AboutUs Section/AboutUs"));
const OfficersBanner = lazy(() => import("../Components/OfficersBanner Section/OfficersBanner"));
const ContactBanner = lazy(() => import("../Components/Contact/ContactBanner"));
const Footer = lazy(() => import("../Components/Footer"));

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

  const classes = useStyles();
  return (
    <main className={classes.homePage}>
      <Header/>
      <HomeBanner />
      <NoSsr defer>
        <Suspense fallback={<div/>}>
          <AboutUs />
          <OfficersBanner />
          <ContactBanner />
          <Footer/>
        </Suspense>
      </NoSsr>
    </main>
  );
}
