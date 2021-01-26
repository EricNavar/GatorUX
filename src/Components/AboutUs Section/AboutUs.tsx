import React, { lazy, Suspense } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const AboutUsCarousel = lazy(() => import('./AboutUsCarousel'));

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    aboutUsArticle: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      textAlign: 'left',
      padding: 8
    },
    aboutUsDescription: {
      maxWidth: '100%',
      width: 500,
      fontWeight: 600,
      fontSize: 20,      
    },
    aboutUsDescriptionCard: {
      color: "white",
      background: "#5967b0",
      padding: 16,
      maxWidth: 400,
      fontWeight: 600,
      [theme.breakpoints.down('xs')]: {
        maxWidth: 'calc(100vw - 48px)'
      }
    },
    divider: {
      backgroundColor: '#5264f8',
      width: 80,
      height: 5,
      marginBottom: 10
    },
    titleContainer: {
      textAlign: 'center',
      marginTop: 8
    },
    dividerContainer: {
      marginBottom: 16,
      justifyContent: 'center',
      display: 'grid'
    },
    carouselWrapper: {
      textAlign: 'center',
      display: 'contents',
      minHeight: 280
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
      alignItems="stretch"
      component='section'
      spacing={0}
    >
      <Grid item xs={12} className={classes.titleContainer}>
        <Typography color="textPrimary" component='h2' variant='h2'>What We Do</Typography>
      </Grid>
      <Grid item xs={12} className={classes.dividerContainer}>
        <div className={classes.divider}></div>
      </Grid>
      <Grid item xs={12} sm={6}  className={classes.aboutUsArticle}>
        <Paper elevation={3} className={classes.aboutUsDescriptionCard}>
          <Typography color="textPrimary" component='h3' variant='body1' className={classes.aboutUsDescription}>
            Gator UX is established for the purpose of promoting and teaching the user experience research and design process to anyone who is interested in the field, as well as to help aspiring designers develop professionally.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} className={classes.carouselWrapper} sm={6}>
        <Suspense fallback={<div/>}>
          <AboutUsCarousel/>
        </Suspense>
      </Grid>
    </Grid>
  );
}
