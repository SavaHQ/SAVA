import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import * as ROUTES from "../Constants/routesEndpoints";
import MainLayout from "../Layouts/MainLayouts";
import CommunityPage from "../Pages/CommunityPage/index";
import ContactUs from "../Pages/ContactUs";
import CryptoPage from "../Pages/Cryptopage";
import DashboardPage from "../Pages/DashboardPage";
import ForStartupPage from "../Pages/ForStartupPage";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import OpeningsPage from "../Pages/OpeningsPage";
import AuthRoute from "../Auth/index";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to={ROUTES.HOME} />
      </Route>

      <Route path={ROUTES.HOME} exact>
        <MainLayout>
          <HomePage />
        </MainLayout>
      </Route>

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
      <AuthRoute exact path={ROUTES.OPENINGS} type="private">
        <MainLayout>
          <OpeningsPage />
        </MainLayout>
      </AuthRoute>

      <Route path={ROUTES.CONTACTUS} exact>
        <MainLayout>
          <ContactUs />
        </MainLayout>
      </Route>
      <Route path={ROUTES.DASHBOARD} exact>
        <MainLayout>
          <DashboardPage />
        </MainLayout>
      </Route>
      <Route path={ROUTES.CRYPTO} exact>
        <MainLayout>
          <CryptoPage />
        </MainLayout>
      </Route>

      <AuthRoute exact path={ROUTES.LOGIN} type="guest">
        <LoginPage />
      </AuthRoute>

      {/* <Route component={PageNotFound} /> */}
    </Switch>
  );
}

export default Routes;
