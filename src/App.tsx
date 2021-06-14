import { ThemeProvider } from "@material-ui/core";
import React, { lazy } from "react";
import Navbar from "./Navbar";
import theme from "./theme";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const Profile = lazy(() => import("./Profile"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
