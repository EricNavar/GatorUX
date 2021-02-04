import React, { lazy, Suspense }  from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import HomePage from "./screens/HomePage";
const Error404Page = lazy(() => import("./screens/Error404Page"));

//https://reacttraining.com/react-router/web/guides/quick-start

export default function Root() {
  const myTheme = createMuiTheme({
    palette: {
      type: 'dark'
    },
    typography: {
      fontFamily: [
        '"Poppins"',
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
        marginBottom: ".25em",
        marginTop: ".5em",
        fontWeight: 600
      }
    }
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <NoSsr defer>
            <Suspense fallback={<div/>}>
              <Route component={Error404Page} />
            </Suspense>
          </NoSsr>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}
