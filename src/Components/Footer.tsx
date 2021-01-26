import React from "react";
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles";
import Discord from "../assets/Discord.svg";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";
import Zoom from "../assets/Zoom.svg";

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

const useStyles = makeStyles({
  FooterContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5967b0",
    position: 'relative'
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
  }
});

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.FooterContainer}>
      <Grid container style={{maxWidth:450}}>
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
      </Grid>
    </footer>
  );
}
