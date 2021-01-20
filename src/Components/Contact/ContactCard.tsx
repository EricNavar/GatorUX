import React from "react";
import copy from "clipboard-copy";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import CopyIcon from '@material-ui/icons/FileCopy';

const useStyles = makeStyles((theme:Theme) => 
  createStyles({
    contactCardWrapper: {
      display: 'flex',
      width:'100%',
    },
    contactCard: {
      maxWidth: 380,
      width:'100%',
      margin: '8px auto'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      padding: 8
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    emailContainer: {
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center'
    },
    avatarContainer: {
      display: "flex",
      alignItems: 'center',
      justifyContent: 'left',
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft:16,
      paddingRight:16,
    }
  })
);

function ContactCard( name:string, description:string, imgSrc:string, email:string ) {
  const classes = useStyles();
  const copyEmail = () => {
    // copies the email prop into the user's clipboard
    copy(email);

    // makes sure the ::after pseudo element's text is 'Copied!' while the user still hovers over it
    // event.target.classList.add(classes.clickHover);
  };

  return (
    <Grid item xs={12} sm={6} className={classes.contactCardWrapper}>
      <Card className={classes.contactCard}>
        <div className={classes.avatarContainer}>
          <Avatar src={imgSrc} />
          <Typography color="textPrimary" style={{marginLeft: 12, fontSize:'1.5rem'}}>
            {name}
          </Typography>
        </div>
        <Divider/>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div className={classes.emailContainer}>
              <Tooltip disableFocusListener title="Copy">
                <IconButton onClick={copyEmail}>
                  <CopyIcon/>
                </IconButton>
              </Tooltip>
              <Typography component="span" variant="h5">
                {email}
              </Typography>
            </div>
            <Typography variant="subtitle1" color="textSecondary">
              {description}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}

export default ContactCard;
