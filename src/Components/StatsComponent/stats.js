import React from "react";
import { Box, makeStyles, List, Typography } from "@material-ui/core";

const statsList = [{ stats: "3235+" }, { stats: "43456+" }, { stats: "26757+" }];

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
                  <Typography variant="h5" className={classes.statsBox}>
                    {item.stats}
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
    background: " #F7FAFE",
    width: "100%",
    height: "220px",
    left: " 0px",
    top: "808px",
  },
  statsSection: {
    flex: 4,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  stats: {
    width: "1080px",
    margin: "auto",
  },
  statsBox: {
    fontStyle: " normal",
    fontWeight: " 800",
    fontSize: " 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: " #222222",
    padding: "35px",
    opacity: 0.6,
    width: "200px",
    height: "20px",
    background: "#FFFFFF",
    borderRadius: "20px",
  },
});

export default Stats;
