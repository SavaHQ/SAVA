import { ListItemText, Box, List, ListItem, makeStyles, Typography } from "@material-ui/core";
import { Drawer } from "@mui/material";
import * as ROUTES from "../../Constants/routesEndpoints";
import React from "react";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

function DrawerComponent({ state, anchor, onClose, onClick }) {
  const classes = useStyles();

  const navItemsLists = [
    { title: "Home", link: "/home" },
    { title: "For Startups", link: ROUTES.FORSTARTUP },
    { title: "Community", link: ROUTES.COMMUNITY },
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
      </Box>
    </Drawer>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#ffffff",
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
}));

export default DrawerComponent;
