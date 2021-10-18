import { AppBar, Box, Button, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../Constants/routesEndpoints";

function NavBarComponent() {
  const classes = useStyles();
  const navItemsLists = [
    { title: "Home", link: "/" },
    { title: "For Startups", link: ROUTES.FORSTARTUP },
    { title: "Community", link: ROUTES.COMMUNITY },
    { title: "Openings", link: ROUTES.OPENINGS },
  ];

  return (
    <AppBar position="static">
      <Toolbar className={classes.appBar}>
        <Box className={classes.wrapper}>
          <Box className={classes.leftSection}>
            <Typography className={classes.logo} onClick={() => history.push("/home")}>
              <img src="assests/images/logo.svg" alt="logo" />
            </Typography>
          </Box>
          <Box className={classes.midSection}>
            {navItemsLists.map((item, index) => {
              return (
                <Button key={index}>
                  <Link smooth to={item.link} className={classes.textStyle}>
                    <Typography className={classes.listTitle}>{item.title}</Typography>
                  </Link>
                </Button>
              );
            })}
          </Box>
          <Box className={classes.rightSection}>
            <Button className={classes.buttonOne}>SignIn</Button>
            <Button className={classes.button2}>LogIn</Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#ffff",
  },
  wrapper: {
    display: "flex",
    width: "100%",
  },
  leftSection: {
    flex: 3,
  },
  logo: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "25px",
    lineHeight: "50px",
    color: "#4751F1",
    cursor: "pointer",
  },
  midSection: {
    flex: 6,
    justifyContent: "space-between",
  },
  listTitle: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "15px",
    lineHeight: "35px",
    letterSpacing: "3.6px",
    color: "#666E78",
    paddingRight: "30px",
  },
  rightSection: {
    flex: 3,
    justifyContent: "space-between",
  },
  textStyle: {
    textDecoration: "none",
  },
});

export default NavBarComponent;
