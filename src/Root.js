import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import HomePage from "./screens/HomePage";
import Header from "./Components/Header";
const Footer = lazy(() => import("./Components/Footer"));

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

  return (
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
        <Suspense defer fallback={<CircularProgress/>}>
          <Footer defer/>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}
