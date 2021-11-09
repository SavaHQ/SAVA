import React from "react";
import { Box, makeStyles, List, Typography } from "@material-ui/core";

const statsList = [
  { stats: "2900+", subContent: "Community Members" },
  { stats: "520+", subContent: "Vetted Sava Creators" },
  { stats: "75+", subContent: "Startups Served" },
];

function Stats() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {statsList.map((item, index) => {
        return (
          <List key={index} className={classes.container}>
            <Typography variant="h1" className={classes.statsBox}>
              {item.stats}
            </Typography>
            <Typography variant="subtitle2" className={classes.statsText}>
              {item.subContent}
            </Typography>
          </List>
        );
      })}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#666E78",
    display: "flex",
    justifyContent: "center",
    color: "#ffffff",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  container: {
    padding: "50px",
  },
}));

export default Stats;
