import React from "react";
import { Box, makeStyles, List, Typography } from "@material-ui/core";

const statsList = [
  { stats: "2k", subContent: "Web Installed" },
  { stats: "20M+", subContent: "Active Users on Hostingan Web" },
  { stats: "1k", subContent: "New User Sign up everyday" },
  { stats: "20K", subContent: "Happy User" },
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
                  <Typography variant="h5" className={classes.statsText}>
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

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "220px",
    justifyContent: "center",
    margin: "0px 150px 0px 150px",
    background: "#666E78",
    borderRadius: "16px",
  },
  statsSection: {
    flex: 4,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  stats: {
    margin: "auto",
  },
  statsBox: {
    width: "78px",
    height: " 88px",
    textAlign: "center",
    color: "#FFFFFF",
  },
  statsText: {
    textAlign: "center",
    color: "#FFFFFF",
  },
});

export default Stats;
