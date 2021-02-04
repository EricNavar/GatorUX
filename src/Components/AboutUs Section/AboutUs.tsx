import React, { lazy, Suspense } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const AboutUsCarousel = lazy(() => import('./AboutUsCarousel'));

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    aboutUsRoot: {
      [theme.breakpoints.up('sm')]: {
        width: "80vw",
        maxWidth: 1200
      },
      [theme.breakpoints.down('xs')]: {
        width: "95vw"
      }
    },
    aboutUsArticle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      textAlign: 'left',
      margin: 8
    },
    aboutUsDescription: {
      maxWidth: 450,
      fontWeight: 600,
      fontSize: 24,
      lineHeight: "2.2rem"      
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
      height: 5,
      marginBottom: 10,
      margin: "auto"
    },
    titleContainer: {
      textAlign: 'left',
      marginTop: 8,
      width: "90vw"
    },
    dividerContainer: {
      marginBottom: 16,
      justifyContent: 'center',
      display: 'grid'
    },
    carouselWrapper: {
      display: "flex",
      justifyContent: "center",
      margin: 8
    },
    highlighted: {
      background: "#5866af"
    }
  })
);

export default function AboutUs() {
  const classes = useStyles();
  return (
    <section className={classes.aboutUsRoot}>
      <div style={{marginLeft: 20, marginRight: 20}}>
        <div style={{width:"max-content"}}>
          <Typography color="textPrimary" component='h2' variant='h2' style={{width:"max-content"}}>What We Do</Typography>
          <div className={classes.divider}></div>
        </div>
      </div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="stretch"
        spacing={0}
      >
        <Grid item className={classes.aboutUsArticle}>
          <Typography color="textPrimary" component='h3' variant='body1' className={classes.aboutUsDescription}>
            GatorUX is a collective of aspiring<span className={classes.highlighted}> UX or UI designers</span> who come together to socialize, <span className={classes.highlighted}>discuss industry topics</span>, and learn.
          </Typography>
        </Grid>
        <Grid item className={classes.carouselWrapper}>
          <Suspense fallback={<div/>}>
            <AboutUsCarousel/>
          </Suspense>
        </Grid>
      </Grid>
    </section>
  );
}
