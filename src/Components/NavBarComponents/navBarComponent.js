import { AppBar, Box, makeStyles, List, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../Constants/routesEndpoints";
import CustomButton from "../CustomButtonComponents/CustomButton";

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
            <Typography className={classes.logo}>
              <Link to="/home">
                <img src="assests/images/logo.svg" alt="logo" />
              </Link>
            </Typography>
          </Box>
          <Box className={classes.midSection}>
            {navItemsLists.map((item, index) => {
              return (
                <List key={index}>
                  <Link smooth to={item.link} className={classes.textStyle}>
                    <Typography className={classes.listTitle}>{item.title}</Typography>
                  </Link>
                </List>
              );
            })}
          </Box>
          <Box className={classes.rightSection}>
            <CustomButton
              name="Sign In"
              color="#ffffff"
              background="#666E78"
              onButtonClick={() => console.log("Sign In")}
              borderRadius={5}
              isRadius={true}
            />
            <CustomButton
              name="Login"
              color="#666E78"
              background="#FFFFFF"
              onButtonClick={() => console.log("Login")}
              border=" 1px solid #666E78"
              borderRadius={5}
              isRadius={true}
            />
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
    justifyContent: "flex-start",
  },
  logo: {
    paddingTop: "15px",
    color: "#4751F1",
    cursor: "pointer",
  },
  midSection: {
    flex: 4,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  listTitle: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "15px",
    lineHeight: "35px",
    letterSpacing: "3.6px",
    color: "#666E78",
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
