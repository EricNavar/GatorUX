import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Link as RouteLink } from 'react-router-dom';
import ErrorIcon from './../assets/ErrorBubble.svg';

export default function Error404Page() {
  React.useEffect(() => {
    document.title = 'Page not found | DC Rock Fitness';
  },[]);
  return (
    <main style={{textAlign:'center', marginTop: 32}}>
      <img alt="" src={ErrorIcon} style={{width:150}}></img>
      <Typography variant='h5' gutterBottom>
        <b>
          Error 404
          <br/>
          Page does not exist
        </b>   
      </Typography>
      <Link variant='body1' component={RouteLink} to='/'>
        Return to Home
      </Link>
    </main>
  );
}