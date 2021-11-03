import React from "react";
import { Box, makeStyles, List, Typography } from "@material-ui/core";

const statsList = [
  { stats: "2800+", subContent: "Community Members" },
  // { stats: "20M+", subContent: "Active Users on Hostingan Web" },
  { stats: "520+", subContent: "Vetted Sava Creators" },
  { stats: "75+", subContent: "Startups Served" },
];

function Stats() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Box className={classes.stats}>
          <Box className={classes.statsSection}>
            {statsList.map((item, index) => {
              return (
                <List key={index}>
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
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "220px",
    margin: "0px 150px 0px 150px",
    background: "#666E78",
    borderRadius: "16px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      height: "100%",
      margin: "0",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      height: "100%",
      margin: "0",
    },
  },
  statsSection: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  stats: {
    margin: "auto",
  },
  statsBox: {
    textAlign: "center",
    color: "#FFFFFF",
    flex: 4,
    display: "flex",
    fontSize: "64px",
    paddingRight: "50px",
    paddingLeft: "50px",
    [theme.breakpoints.down("lg")]: {
      display: "block",
      height: "100%",
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
      height: "100%",
      paddingRight: "0px",
      paddingLeft: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(4),
      marginBottom: "22px",
      marginTop: theme.spacing(6),
    },
  },
  statsText: {
    textAlign: "center",
    color: "#FFFFFF",
    flex: 1,
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      display: "block",
      height: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "22px",
      fontSize: "18px",
    },
  },
}));

export default Stats;
