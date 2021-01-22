import React, { useEffect } from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import HomeBanner from "../Components/HomeBanner";
import Header from "./../Components/Header";
import AboutUs from "../Components/AboutUs Section/AboutUs";
import OfficersBanner from "../Components/OfficersBanner Section/OfficersBanner";
import ContactBanner from "../Components/Contact/ContactBanner";
import Footer from "../Components/Footer";

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
      <AboutUs />
      <OfficersBanner />
      <ContactBanner />
      <Footer/>
    </main>
  );
}
