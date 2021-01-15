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
    href: "ufl.zoom.us/j/99137120169",
  },
];

const useStyles = makeStyles({
  FooterContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4d5dee",
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

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.FooterContainer}>
      <Grid container style={{maxWidth:450}}>
        {social_links.map((elem, index) => (
          <ButtonBase
            className={classes.FooterSocialContainer}
            key={`${elem.name}-${index}-footer-container`}
            href={elem.href}
            target="_blank"
            rel="noopener noreferrer"
            component={Grid}
            item
            xs={6}
            sm={3}
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
        ))}
      </Grid>
    </footer>
  );
}

export default Footer;
