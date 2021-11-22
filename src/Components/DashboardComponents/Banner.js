import React from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { removeSession, firebaseAuth } from "../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../Store/reduxSlice/firebaseSlice";
import { useHistory } from "react-router";

function HeroBanner({ user }) {
  const classes = useStyles();
  const { name } = user;

  const dispatch = useDispatch();

  const history = useHistory();

  const loggedOut = () => {
    firebaseAuth.signOut();
    removeSession();
    dispatch(setUser(null));
    history.push("/home");
  };

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.textWrapper}>
          <Typography variant="h1" className={classes.title}>
            Hi {name}
          </Typography>
          {/* <Typography variant="h7" className={classes.subtitle2}>
            {email} ({role})
          </Typography> */}
          <Button
            style={{ color: "white", background: "#676E78", marginTop: "20px" }}
            onClick={() => loggedOut()}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#000",
    color: "#ffffff",
    padding: "100px",
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  subtitle2: {
    textAlign: "left",
  },
}));

export default HeroBanner;
