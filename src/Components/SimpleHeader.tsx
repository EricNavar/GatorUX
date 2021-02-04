import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
//local files
import GatorUXLogo from "../assets/GatorUXLogo.svg";

//citation: https://material-ui.com/components/app-bar/#hide-app-bar

const useStyles = makeStyles({
  button: {
    position: "fixed",
    top: 8,
    left: 32,
    zIndex: 10,
    borderRadius: "50%"
  },
  logo: {
    width: 60,
    height: 60
  }
});

export default function SimpleHeader(props: any) {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  }

  const classes = useStyles();
  return (
    <ButtonBase
      aria-label="scroll to top"
      onClick={scrollToTop}
      className={classes.button}
    >
      <img
        className={classes.logo}
        src={GatorUXLogo}
        alt="Gator UX Logo"
      />
    </ButtonBase>
  );
}
