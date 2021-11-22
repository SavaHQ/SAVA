import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

function Commingsoon() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.heading}>Comming Soon</Typography>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  heading: {
    paddingTop: "80px",
    fontSize: "80px",
    paddingBottom: "140px",
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
      padding: "80px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "40px",
      padding: "80px",
    },
  },
}));
export default Commingsoon;
