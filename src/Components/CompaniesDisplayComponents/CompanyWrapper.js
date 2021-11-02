import React from "react";
import { Box, makeStyles, List, Typography } from "@material-ui/core";

const companiesList = [
  { imageSrc: "assests/images/ai.png", companyName: "AICrowd" },
  { imageSrc: "assests/images/angel.png", companyName: "AngelOne" },
  { imageSrc: "assests/images/tyke.png", companyName: "Tyke" },
  { imageSrc: "assests/images/rippl.png", companyName: "Rippl" },
];

function CompanyWrapper() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography variant="h5" className={classes.title}>
          Some of our users…
        </Typography>
        <Box className={classes.company}>
          <Box className={classes.companiesSection}>
            {companiesList.map((item, index) => {
              return (
                <List key={index}>
                  <img
                    src={item.imageSrc}
                    alt={item.companyName}
                    className={classes.companyImage}
                  />
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
    background: " #F7FAFE",
    width: "100%",
    height: "220px",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      height: "420px",
    },
  },
  companiesSection: {
    flex: 4,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  companyImage: {
    width: "140px",
    margin: 10,
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      wdith: "120px",
    },
  },
  company: {
    width: "80%",
    margin: "auto",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },
  title: {
    height: "42px",
    fontStyle: " normal",
    fontWeight: " bold",
    fontSize: " 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: " #4B4B4B",
    padding: "35px",
    opacity: 0.6,
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

export default CompanyWrapper;
