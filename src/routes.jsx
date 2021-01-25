import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import MapPage from "pages/Map";
import HomePage from "pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={MapPage} path="/map" />
        <Route render={() => <Redirect to="/"/>} path="*" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
