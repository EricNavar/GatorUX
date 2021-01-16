import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  scrolldownWrapper: {
    left: "50%",
    position: "absolute",
    textAlign: "center",
    bottom: 0,
    animationDuration: "4s",
    animationName: "$appear",
    animationTimingFunction: "ease-in"
  },
  scrolldown: {
    border: "2px solid #FFFFFF",
    borderRadius: "30px",
    height: "32px",
    margin: "0 auto 8px",
    textAlign: "center",
    width: "20px"
  },
  scrolldownDot: {
    animationDuration: "3s",
    animationName: "$scrolldown",
    animationIterationCount: "infinite",
    fill: "#FFFFFF",
    animationDelay: "3s",
  },
  scrolldownDot2: {
    animationDelay: "3.75s",
  },
  "@keyframes scrolldown": {
    "0%": {
      opacity: 0,
      transform: "translate(0, -6px)"
    },
    "25%": {
      opacity: 1,
      transform: "translate(0, 0)"
    },
    "50%": {
      opacity: 0,
      transform: "translate(0, 6px)"
    },
    "100%": {
      opacity: 0,
      transform: "translate(0, 6px)"
    }
  },
  "@keyframes appear": {
    "0%": {
      opacity: 0,
    },
    "85%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    }
  }
});

function Footer() {
  const classes = useStyles();
  return (
      <div id="scroll-down-icon" class={classes.scrolldownWrapper}>
        <div class={classes.scrolldown}>
          <svg height="30" width="10">
            <circle class={classes.scrolldownDot} cx="5" cy="10" r="1.5" />
            <circle class={`${classes.scrolldownDot} ${classes.scrolldownDot2}`} cx="5" cy="10" r="1.5" />
          </svg>
        </div>
      </div>
  );
}

export default Footer;
