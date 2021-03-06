import {
  AppBar,
  Box,
  makeStyles,
  List,
  Toolbar,
  Typography,
  Hidden,
  IconButton,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../Constants/routesEndpoints";
import CustomButton from "../CustomButtonComponents/CustomButton";
import { FiAlignJustify } from "react-icons/fi";
import DrawerComponent from "./drawerComponent";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
function NavBarComponent() {
  const classes = useStyles();
  const history = useHistory();

  const user = useSelector((state) => state.firebase.user);

  const pathname = window.location.pathname;

  const navItemsLists = [
    { title: "Home", link: "/home" },
    { title: "For Startups", link: ROUTES.FORSTARTUP },
    { title: "Community", link: ROUTES.COMMUNITY },
    { title: "Openings", link: ROUTES.OPENINGS },
    { title: "Contact us", link: ROUTES.CONTACTUS },
  ];

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Toolbar className={classes.appBar}>
          <Typography className={classes.logo}>
            <Link to="/home">
              <img src="assests/images/logo.svg" alt="logo" />
            </Link>
          </Typography>
          <Box flexGrow={1} />
          <Hidden mdDown>
            <Box className={classes.midSection}>
              {navItemsLists.map((item, index) => {
                return (
                  <List key={index}>
                    <Link smooth to={item.link} className={classes.textStyle}>
                      <Typography
                        variant="body1"
                        style={{
                          color: "#222222",
                          fontWeight: pathname === navItemsLists[index].link ? "bold" : "400",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Link>
                  </List>
                );
              })}
            </Box>
          </Hidden>
          <Box flexGrow={1} />
          <Hidden mdDown>
            <Box className={classes.button}>
              <CustomButton
                name="Crypto"
                color="#ffffff"
                background="#666E78"
                onButtonClick={() => history.push(ROUTES.CRYPTO)}
                borderRadius={5}
                isRadius={true}
              />

              {user ? (
                <Link
                  className={classes.link}
                  to={user.role === ROUTES.STUDENT ? "/dashboard" : "/startupDashboard"}
                >
                  <CustomButton
                    name="Dashboard"
                    color="#666E78"
                    background="#FFFFFF"
                    border=" 1px solid #666E78"
                    borderRadius={5}
                    isRadius={true}
                  />
                </Link>
              ) : (
                <Link className={classes.link} to={"/login"}>
                  <CustomButton
                    name="Login"
                    color="#666E78"
                    background="#FFFFFF"
                    border=" 1px solid #666E78"
                    borderRadius={5}
                    isRadius={true}
                  />
                </Link>
              )}
            </Box>
          </Hidden>
          <Hidden xlUp>
            <Box className={classes.menue}>
              <IconButton onClick={toggleDrawer("right", true)}>
                <FiAlignJustify />
              </IconButton>
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <DrawerComponent
        onClick={toggleDrawer("right", false)}
        anchor="right"
        state={state.right}
        onClose={toggleDrawer("right", false)}
      />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    backgroundColor: "#ffffff",
    paddingLeft: "120px",
    paddingRight: "50px",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",

    [theme.breakpoints.down("md")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  link: {
    textDecoration: "none",
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
    flexWrap: "nowrap",
    flexDirection: "row",
  },
  textStyle: {
    textDecoration: "none",
  },
  button: {
    display: "flex",
    flexWrap: "nowrap",

    flexDirection: "row",
  },
  offset: theme.mixins.denseToolbar,
}));

export default NavBarComponent;
