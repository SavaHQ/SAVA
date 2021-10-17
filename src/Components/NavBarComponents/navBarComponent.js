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
    <div>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <Typography className={classes.logo} onClick={() => history.push("/home")}>
            <img src="/logo.svg" alt="logo" />
          </Typography>
          <Box className={classes.listContainer}>
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
          <Box className={classes.buttonContainer}>
            <Button className={classes.buttonOne}>SignIn</Button>
            <Button className={classes.button2}>LogIn</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#ffff",
    justifyContent: "space-between",
  },

  logo: {
    width: "150px",
    color: "#4751F1",
    cursor: "pointer",
  },
  listContainer: {},
  textStyle: {
    textDecoration: "none",
  },
  listTitle: {
    color: "#4751F1",
    justifyContent: "space-between",
  },
  buttonOne: {
    background: "#4751F1",
    borderRadius: "5px",
    color: "#FFFFFF",
  },
  button2: {
    background: "#FFFFFF",
    border: "1px solid #4751F1",
    boxSizing: "border-box",
    borderRadius: "5px",
    color: "#4751F1",
  },
  buttonContainer: {
    width: "200px",
    justifyContent: "space-between",
  },
});

export default NavBarComponent;
