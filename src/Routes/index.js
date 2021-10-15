import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import * as ROUTES from "../Constants/routesEndpoints";
import MainLayout from "../Layouts/MainLayouts";
import HomePage from "../Pages/HomePage";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to={ROUTES.HOME} />
      </Route>
      {/* 
      <AuthRoute exact path={ROUTES.HOME}> */}
      <MainLayout>
        <HomePage />
      </MainLayout>
      {/* </AuthRoute> */}

      {/* <Route component={PageNotFound} /> */}
    </Switch>
  );
}

export default Routes;
