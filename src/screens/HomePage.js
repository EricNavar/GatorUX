import React, { useEffect } from "react";
import AboutUs from "../Components/AboutUs Section/AboutUs.js";
import HomeBanner from "../Components/HomeBanner.js";
import OfficersBanner from "../Components/OfficersBanner Section/OfficersBanner.js";
import ContactBanner from "../Components/Contact/ContactBanner.js";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  homePage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background.default
  }
}))

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
      <HomeBanner />
      <AboutUs />
      <OfficersBanner />
      <ContactBanner />
    </main>
  );
}
