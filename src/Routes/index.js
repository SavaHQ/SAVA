import React from "react";
import { Redirect, Switch } from "react-router-dom";
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
import StartUpDashboardPage from "../Pages/StartUpDashboardPage";

function Routes() {
  return (
    <Switch>
      <AuthRoute path="/" exact>
        <Redirect to={ROUTES.HOME} />
      </AuthRoute>

      <AuthRoute path={ROUTES.HOME} exact>
        <MainLayout>
          <HomePage />
        </MainLayout>
      </AuthRoute>

      <AuthRoute path={ROUTES.FORSTARTUP} exact>
        <MainLayout>
          <ForStartupPage />
        </MainLayout>
      </AuthRoute>
      <AuthRoute path={ROUTES.COMMUNITY} exact>
        <MainLayout>
          <CommunityPage />
        </MainLayout>
      </AuthRoute>
      <AuthRoute exact path={ROUTES.OPENINGS} type="private">
        <MainLayout>
          <OpeningsPage />
        </MainLayout>
      </AuthRoute>

      <AuthRoute path={ROUTES.CONTACTUS} exact>
        <MainLayout>
          <ContactUs />
        </MainLayout>
      </AuthRoute>

      <AuthRoute exact path={ROUTES.DASHBOARD} type="private">
        <MainLayout>
          <DashboardPage />
        </MainLayout>
      </AuthRoute>

      <AuthRoute exact path={ROUTES.STARTUPDASHBOARD} type="private">
        <MainLayout>
          <StartUpDashboardPage />
        </MainLayout>
      </AuthRoute>

      <AuthRoute path={ROUTES.CRYPTO} exact>
        <MainLayout>
          <CryptoPage />
        </MainLayout>
      </AuthRoute>

      <AuthRoute exact path={ROUTES.LOGIN} type="guest">
        <LoginPage />
      </AuthRoute>

      {/* <Route component={PageNotFound} /> */}
    </Switch>
  );
}

export default Routes;
