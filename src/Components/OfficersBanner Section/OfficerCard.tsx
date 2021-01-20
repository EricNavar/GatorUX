import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => 
  createStyles({
    officerCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px 0px",
      textAlign: 'center',
      lineHeight: 1.2
    },
    officerImgContainer: {
      width: "10rem",
      height: "10rem",
      borderRadius: "50% !important",
      overflow: "hidden",
      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      [theme.breakpoints.down('xs')]: {
        width: "6rem",
        height: "6rem",
      }
    },
    officerImg: {
      width: "100%",
      height: "100%"
    },
    officerName: {
      marginTop: 8,
      fontSize: "1.5rem"
    },
    officerPosition: {
      margin: 0,
      fontSize: ".85rem",
      lineHeight: 1.3,
      marginTop: 6
    }
  })
);

interface Props {
  officerName:string;
  officerPosition:string;
  imgSrc:string;
}
export default function OfficerCard(props: Props) {
  const {officerName, officerPosition, imgSrc} = props;
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={4} className={classes.officerCard}>
      <div className={classes.officerImgContainer}>
        <img src={imgSrc} alt={officerName + " picture"} className={classes.officerImg} />
      </div>
      <Typography color="textPrimary" component='h3' variant='h5' className={classes.officerName}>{officerName}</Typography>
      <Typography color="textSecondary" component='h5' variant='overline' className={classes.officerPosition}>{officerPosition}</Typography>
    </Grid>
  );
}
