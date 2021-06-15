import { ThemeProvider } from "@material-ui/core";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import theme from "./theme";

const Profile = lazy(() => import("./Profile"));
const QRScanner = lazy(() => import("./QRScanner"));
const Favorites = lazy(() => import("./Favorites"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback="loading...">
          <Navbar />
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/search" component={QRScanner} />
            <Route path="/favorites" component={Favorites} />
            <Redirect to="/search" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
