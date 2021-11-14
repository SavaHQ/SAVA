import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import * as ROUTES from "../Constants/routesEndpoints";
import MainLayout from "../Layouts/MainLayouts";
import CommunityPage from "../Pages/CommunityPage/index";
import ContactUs from "../Pages/ContactUs";
import CryptoPage from "../Pages/Cryptopage";
import ForStartupPage from "../Pages/ForStartupPage";
import HomePage from "../Pages/HomePage";
import OpeningsPage from "../Pages/OpeningsPage";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to={ROUTES.HOME} />
      </Route>
      {/* 
      <AuthRoute exact path={ROUTES.HOME}> */}
      <Route path={ROUTES.HOME} exact>
        <MainLayout>
          <HomePage />
        </MainLayout>
      </Route>
      {/* </AuthRoute> */}
      <Route path={ROUTES.FORSTARTUP} exact>
        <MainLayout>
          <ForStartupPage />
        </MainLayout>
      </Route>
      <Route path={ROUTES.COMMUNITY} exact>
        <MainLayout>
          <CommunityPage />
        </MainLayout>
      </Route>
      <Route path={ROUTES.OPENINGS} exact>
        <MainLayout>
          <OpeningsPage />
        </MainLayout>
      </Route>

      <Route path={ROUTES.CONTACTUS} exact>
        <MainLayout>
          <ContactUs />
        </MainLayout>
      </Route>
      <Route path={ROUTES.CRYPTO} exact>
        <MainLayout>
          <CryptoPage />
        </MainLayout>
      </Route>
      {/* <Route component={PageNotFound} /> */}
    </Switch>
  );
}

export default Routes;
