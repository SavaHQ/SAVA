import {
  AppBar,
  Box,
  makeStyles,
  List,
  Toolbar,
  Typography,
  Hidden,
  // IconButton,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../Constants/routesEndpoints";
import CustomButton from "../CustomButtonComponents/CustomButton";
// import MenuIcon from "@mui/icons-material/Menu";

function NavBarComponent() {
  const classes = useStyles();

  const pathname = window.location.pathname;

  console.log(pathname);

  const navItemsLists = [
    { title: "Home", link: "/home" },
    { title: "For Startups", link: ROUTES.FORSTARTUP },
    { title: "Community", link: ROUTES.COMMUNITY },
    { title: "Contact us", link: ROUTES.CONTACTUS },
  ];

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Toolbar className={classes.appBar}>
          <Typography className={classes.logo}>
            <Link to="/home">
              <img src="assests/images/logo.svg" alt="logo" />
            </Link>
          </Typography>
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
          <Hidden mdDown>
            <Box className={classes.button}>
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
          </Hidden>

          <Hidden mdDown>
            <Box className={classes.menue}>
              {/* <IconButton>
              <MenuIcon />
            </IconButton> */}
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    backgroundColor: "#ffff",
    paddingLeft: "120px",
    paddingRight: "120px",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  logo: {
    paddingTop: "15px",
    color: "#4751F1",
    cursor: "pointer",
  },
  midSection: {
    flex: 0.6,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  textStyle: {
    textDecoration: "none",
  },
  button: {
    display: "flex",
    flexDirection: "row",
  },
  offset: theme.mixins.denseToolbar,
}));

export default NavBarComponent;
