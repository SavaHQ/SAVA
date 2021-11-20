import { AppBar, Box, Button, Container, Hidden, makeStyles, Toolbar } from "@material-ui/core";

import React from "react";
import LoginPageRightBanner from "../../Components/LoginPageComponent/LoginPageRightBanner";
import LoginSectionComponent from "../../Components/LoginPageComponent/LoginSectionComponent";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
function LoginPage() {
  const classes = useStyles();

  const history = useHistory();

  return (
    <>
      <Container className={classes.container} disableGutters>
        <Box className={classes.boxContainer}>
          <AppBar className={classes.appBar} elevation={0}>
            <Toolbar className={classes.toolbar}>
              <Container className={classes.wrapper} disableGutters>
                <Link to="/home">
                  <img src="assests/images/SAVA.svg" alt="sava logo" />
                </Link>
                <Box flexGrow={1} />
                <Button
                  outline
                  className={classes.authbutton}
                  onClick={() => history.push("/home")}
                >
                  Explore
                </Button>
              </Container>
            </Toolbar>
          </AppBar>
          <Box className={classes.loginContainer}>
            <Container maxWidth="xs">
              <LoginSectionComponent />
            </Container>
          </Box>
          <Hidden mdDown>
            <Box className={classes.onboarding}>
              <LoginPageRightBanner />
            </Box>
          </Hidden>
        </Box>
      </Container>
    </>
  );
}
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "100%",
    backgroundColor: "#fff",
    width: "100vw",
    height: "100vh",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    maxWidth: "80%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  appBar: {
    backgroundColor: "rgba(255,255,255,0)",
  },

  boxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    content: "center",
    height: "100%",
    width: "auto",
  },
  loginContainer: {
    flex: 5,
    backgroundColor: "#fff",
    height: "100%",
    [theme.breakpoints.down("lg")]: {
      flex: 7,
    },
  },
  onboarding: {
    flex: 8,
    height: "100%",
    backgroundImage: `url("assests/images/mahdi-bafande-wLvyqqwXXpQ-unsplash.jpg")`,
    [theme.breakpoints.down("lg")]: {
      clipPath: "none",
    },
  },

  authbutton: {
    border: `1px solid #ffffff`,
    color: "#ffffff",
    textTransform: "none",
    margin: theme.spacing(0, 1),
    padding: theme.spacing(1, 3),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0, 1),
      padding: theme.spacing(0.5, 1),
    },
  },
}));

export default LoginPage;
