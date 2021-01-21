import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  officerImg: {
    width: "100%",
    height: "100%"
  }
});

export default function OfficerCard(props) {
  const classes = useStyles();
  console.log(props)
  return (
    <img src={props.imgSrc} alt={props.officerName + " picture"} className={classes.officerImg} />
  );
}
