import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ButtonBase from "@material-ui/core/ButtonBase";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
//local files
import GatorUXLogo from "../assets/GatorUXLogo.svg";
import Typography from '@material-ui/core/Typography';

//citation: https://material-ui.com/components/app-bar/#hide-app-bar

const useStyles = makeStyles((theme:Theme) => 
  createStyles({
    "*": {
      "--header-height": 60
    },
    navbar: {
      '& .MuiButton-root:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 12,
        paddingRight: 12
      },
      [theme.breakpoints.down('xs')]: {
        borderRadius: 8,
        margin: 8,
        width: "calc(100% - 16px)",
      }
    },
    scrolled: {
      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      backgroundColor: "#111",
      color: "#fff"
    },
    //when the navbar is at the top of the screen and is white
    top: {
      background: "rgba(0,0,0,0)",
      color: "#000000"
    },
    HeaderLogo: {
      width: 'calc(var(--header-height) - 20px)',
      height: 'auto',
      margin: '0px 10px',
    },
    HeaderTitle: {
      fontSize: '1.3rem !important',
      fontWeight: 600
    },
    buttonBase: {
      width: 'calc(var(--header-height) - 10px)',
      height: 'calc(var(--header-height) - 10px)',
      marginLeft: 12,
      marginRight: 12,
    },
    toolbar: {
      [theme.breakpoints.down('xs')]: {
        justifyContent: "center"
      }
    }
  })
);

interface ElevationScrollProps {
  children: React.ReactElement;
  window: Function;
};
function ElevationScroll(props: ElevationScrollProps) {
  const classes = useStyles();

  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    className: `${classes.navbar} ${trigger ? classes.scrolled : classes.top}`,
    elevation: trigger ? 2 : 0
  });
}

export default function NavBar(props: any) {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  }

  const classes = useStyles();
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar id="AppBar" className={classes.navbar} position="fixed">
          <Toolbar className={classes.toolbar}>
            <ButtonBase
              aria-label="scroll to top"
              onClick={scrollToTop}
              className={classes.buttonBase}
            >
              <img
                src={GatorUXLogo}
                alt="Gator UX Logo"
                className={classes.HeaderLogo}
              />
            </ButtonBase>
            <Typography component='h3' className={classes.HeaderTitle}>
              Gator UX
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
