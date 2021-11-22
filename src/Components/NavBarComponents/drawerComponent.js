import { ListItemText, Box, List, ListItem, makeStyles, Typography } from "@material-ui/core";
import { Drawer } from "@mui/material";
import * as ROUTES from "../../Constants/routesEndpoints";
import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButtonComponents/CustomButton";
// import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
function DrawerComponent({ state, anchor, onClose, onClick }) {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector((state) => state.firebase.user);
  const navItemsLists = [
    { title: "Home", link: "/home" },
    { title: "For Startups", link: ROUTES.FORSTARTUP },
    { title: "Community", link: ROUTES.COMMUNITY },
    { title: "Openings", link: ROUTES.OPENINGS },
    { title: "Contact us", link: ROUTES.CONTACTUS },
  ];

  return (
    <Drawer anchor={anchor} open={state} onClose={onClick}>
      <Box
        sx={{ width: "50vw", height: "100vh" }}
        role="presentation"
        onClick={onClose}
        className={classes.container}
      >
        <List className={classes.list}>
          {navItemsLists.map((item, index) => (
            <Link smooth key={item} to={item.link}>
              <ListItem buttonclassName={classes.listItem}>
                <ListItemText
                  primary={<Typography variant="h6">{item.title}</Typography>}
                  className={classes.title}
                />
              </ListItem>
            </Link>
          ))}
        </List>
        <Box>
          <Box className={classes.button}>
            <CustomButton
              name="Crypto"
              className="dasboard"
              color="#ffffff"
              background="#666E78"
              onButtonClick={() => history.push(ROUTES.CRYPTO)}
              borderRadius={5}
              isRadius={true}
              marginBottom="15px"
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
        </Box>
      </Box>
    </Drawer>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#ffffff",
  },
  contain: {
    marginLeft: 5,
  },
  listItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    textDecoration: "none",

    "&:hover": {
      color: "black",
    },
  },
  title: {
    color: "black",
  },
  link: {
    textDecoration: "none",
  },
  textStyle: {
    textDecoration: "none",
  },
  button: {
    display: "flex",
    flexWrap: "nowrap",
    margin: "10px",
    paddinBottom: "10px",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  dasboard: {
    marginBottom: "20px",
  },
  offset: theme.mixins.denseToolbar,
}));

export default DrawerComponent;
