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
      maxWidth: 500,
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
          <Paper elevation={3} className={classes.aboutUsDescriptionCard}>
            <Typography color="textPrimary" component='h3' variant='body1' className={classes.aboutUsDescription}>
              Gator UX is established for the purpose of promoting and teaching the user experience research and design process to anyone who is interested in the field, as well as to help aspiring designers develop professionally.
            </Typography>
          </Paper>
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
