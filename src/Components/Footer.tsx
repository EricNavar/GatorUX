import React from "react";
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CopyIcon from './../assets/FileCopy';
import Discord from "../assets/Discord.svg";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";
import Zoom from "../assets/Zoom.svg";
import copy from "clipboard-copy";

const social_links = [
  {
    name: "Discord",
    logo: Discord,
    href: "https://discord.gg/ap28gH2gHx",
  },
  {
    name: "Facebook",
    logo: Facebook,
    href: "https://www.facebook.com/groups/gatorux",
  },
  {
    name: "Instagram",
    logo: Instagram,
    href: "https://www.instagram.com/gator.ux/",
  },
  {
    name: "Zoom Room",
    logo: Zoom,
    href: "https://ufl.zoom.us/j/96513674593?fbclid=IwAR3pVwMPRuTgdyPQOk5qf1eIifYhiyxhKhBJaaGIB4E69G00-zmSo4jsKKs",
  },
];

const useStyles = makeStyles((theme) => ({
  FooterContainer: {
    [theme.breakpoints.up('sm')]: {
      width: "80vw",
      maxWidth: 1200
    },
    [theme.breakpoints.down('xs')]: {
      width: "95vw"
    },
  },
  FooterContainerInner: {
    position: 'relative',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  FooterSocialContainer: {
    padding: "8px 30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  FooterSocialLogo: {
    height: 50,
    width: "auto"
  },
  FooterSocialDescription: {
    margin: 0,
    color: "white",
    width: "max-content"
  },
  emailContainer: {
    display: "flex",
    alignItems: "center",
    color:'white',
    borderRadius: 24,
    background: 'rgba(255,255,255,.2)',
    paddingRight: 12,
    marginTop: 12
  },
  buttonWrapper: {
    maxWidth: 450,
    paddingBottom: 16,
    paddingTop: 8
  },
  divider: {
    backgroundColor: '#5264f8',
    height: 5,
    marginBottom: 10,
    margin: "auto"
  }
}));

export default function Footer() {
  const copyEmail = () => {
    // copies the email prop into the user's clipboard
    copy("email@ufl.edu");

    // makes sure the ::after pseudo element's text is 'Copied!' while the user still hovers over it
    // e.target.classList.add(classes.clickHover);
  };
  const classes = useStyles();
  return (
    <footer className={classes.FooterContainer}>
      <div style={{marginLeft: 20, marginRight: 20}}>
        <div style={{width:"max-content"}}>
          <Typography color="textPrimary" component='h2' variant='h2' style={{width:"max-content"}}>Contact</Typography>
          <div className={classes.divider}></div>
        </div>
      </div>
      <div className={classes.FooterContainerInner}>
        <Grid container justify="center" className={classes.buttonWrapper}>
          {social_links.map((elem, index) => (
            <Grid item  xs={6} sm={3} key={`${elem.name}-${index}-footer-container`}>
              <ButtonBase
                className={classes.FooterSocialContainer}
                href={elem.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${elem.name} link`}
              >
                <img
                  src={elem.logo}
                  alt={elem.name + "logo"}
                  className={classes.FooterSocialLogo}
                />
                <Typography color="textPrimary" component ='h3' className={classes.FooterSocialDescription}>
                  {elem.name}
                </Typography>
              </ButtonBase>
            </Grid>
          ))}
          <div className={classes.emailContainer}>
            <Tooltip disableFocusListener title="Copy">
              <IconButton aria-label="copy email" onClick={copyEmail}>
                <CopyIcon/>
              </IconButton>
            </Tooltip>
            <Typography color="textPrimary" component="span" variant="h5">
              email@ufl.edu
            </Typography>
          </div>
        </Grid>
      </div>
    </footer>
  );
}
