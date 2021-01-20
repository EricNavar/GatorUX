import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AboutUsCarousel from './AboutUsCarousel';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    aboutUsArticle: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      textAlign: 'left'
    },
    aboutUsDescription: {
      maxWidth: '100vw',
      width: 500,
      textAlign: "center",
      paddingLeft: 12,
      paddingRight: 12,
      marginBottom: 20,
      fontSize: 20,
      [theme.breakpoints.down('xs')]: {
        maxWidth: 'calc(100vw - 24px)'
      }
    },
    divider: {
      backgroundColor: '#5967b0',
      width: 80,
      height: 5,
      marginBottom: 10
    },
    titleContainer: {
      textAlign: 'center',
      marginTop: 16
    },
    dividerContainer: {
      marginBottom: 16,
      justifyContent: 'center',
      display: 'grid'
    }
  })
);

export default function AboutUs() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      component='section'
      spacing={0}
    >
      <Grid item xs={12} className={classes.titleContainer}>
        <Typography color="textPrimary" component='h2' variant='h2'>What We Do</Typography>
      </Grid>
      <Grid item xs={12} className={classes.dividerContainer}>
        <div className={classes.divider}></div>
      </Grid>
      <Grid item xs={12} sm={6} component='article' className={classes.aboutUsArticle}>
        <Typography color="textPrimary" component='h3' variant='body1' className={classes.aboutUsDescription}>
          Gator UX is established for the purpose of promoting and teaching the user experience research and design process to anyone who is interested in the field, as well as to help aspiring designers develop professionally.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} style={{textAlign: 'center', display: 'contents'}}>
        <AboutUsCarousel/>
      </Grid>
    </Grid>
  );
}
