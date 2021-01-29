import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import OfficerCard from "./OfficerCard";
import officersData from "./officers.js";

const useStyles = makeStyles((theme: Theme) => createStyles({
  officerBannerRoot: {
    marginBottom: 15,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up('sm')]: {
      width: "80vw",
      maxWidth: 1200
    },
    [theme.breakpoints.down('xs')]: {
      width: "95vw"
    }
  },
  divider: {
    backgroundColor: '#5264f8',
    height: 5,
    marginBottom: 10
  },
  officerCardContainer: {
    justifyContent: "center"
  }
}));

export default function OfficersBanner() {
  const classes = useStyles();
  //for later: use hooks to update number of rows depending on screen size

  return (
    <section id="officers-section" className={classes.officerBannerRoot}>
      <div style={{width:"max-content"}}>
        <Typography color="textPrimary" component='h2' variant='h2'>Officers</Typography>
        <div className={classes.divider}></div>
      </div>
      <Grid container className={classes.officerCardContainer}>
        {[...Array(officersData.length).keys()].map((card_index) => {
          const officerInfo = officersData[card_index];
          return (
            <OfficerCard
              officerName={officerInfo.name}
              officerPosition={officerInfo.position}
              imgSrc={officerInfo.imgSrc}
              key={`card-${card_index}`}
            />
          );
        })}
      </Grid>
    </section>
  );
}
