import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import HomePage from "./screens/HomePage";
import Error404Page from "./screens/Error404Page";

//https://reacttraining.com/react-router/web/guides/quick-start

export default function Root() {
  const myTheme = createMuiTheme({
    palette: {
      type: 'dark'
    },
    typography: {
      fontFamily: [
        '"Segoe UI"',
        '-apple-system',
        'BlinkMacSystemFont',
        'Roboto',
        'Oxyegn',
        'Ubuntu',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h1: {
        fontSize: "2.5rem",
        margin: "0 1.5rem",
        maxWidth: "100vw",
        fontWeight: "bold",
        letterSpacing: 1,
        lineHeight: 1.3
      },
      h2: {
        fontSize: "2.5rem",
        marginBottom: ".35em",
        marginTop: 0,
        fontWeight: 600
      }
    }
  });
  /*
  function RouterHelper(props) {
    const path = props.location.pathname;
    if (!path.indexOf("/static/") == 0){
      return <Redirect to="/"/>
    }
  }
  */

  return (
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={Error404Page} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}
