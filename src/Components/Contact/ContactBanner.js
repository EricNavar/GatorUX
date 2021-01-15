import React from "react";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CopyIcon from '@material-ui/icons/FileCopy';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import copy from "clipboard-copy";

const useStyles = makeStyles({
  contactBanner: {
    width:"100%",
    textAlign: 'center',
    marginBottom: 20,
    maxWidth: "100vw"
  },
  ContactBannerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: 'center',
    maxWidth: 1000,
    margin: 'auto'
  },
  divider: {
    backgroundColor: '#5967b0',
    width: 80,
    height: 5,
    marginBottom: 10
  }
});

function ContactBanner() {
  const copyEmail = (e) => {
    // copies the email prop into the user's clipboard
    copy("email@ufl.edu");

    // makes sure the ::after pseudo element's text is 'Copied!' while the user still hovers over it
    e.target.classList.add(classes.clickHover);
  };
  
  const classes = useStyles();
  return (
    <section className={classes.contactBanner}>
      <Typography color="textPrimary" component='h2' variant='h2'>Contact</Typography>
      <center>
        <div className={classes.divider}></div>
      </center>
      <Grid
        id='contact-card-grid-container'
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.ContactBannerContainer}
      >
        <div className={classes.emailContainer}>
          <Tooltip disableFocusListener title="Copy">
            <IconButton onClick={copyEmail}>
              <CopyIcon/>
            </IconButton>
          </Tooltip>
          <Typography color="textPrimary" component="span" variant="h5">
            email@ufl.edu
          </Typography>
        </div>
      </Grid>
    </section>
  );
}

export default ContactBanner;
