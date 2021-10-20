import React from "react";
import { Box, makeStyles, List, Typography, Container } from "@material-ui/core";

const companiesList = [
  { imageSrc: "assests/images/google.png", companyName: "google" },
  { imageSrc: "assests/images/tiket.png", companyName: "tickt" },
  { imageSrc: "assests/images/toko.png", companyName: "toko" },
  { imageSrc: "assests/images/microsoft.png", companyName: "microsoft" },
];

function CompanyWrapper() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography variant="h5" className={classes.title}>
          Some of our trusted company
        </Typography>
        <Container>
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
        </Container>
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
  companiesSection: {
    flex: 4,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  companyImage: {
    width: "140px",
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
  },
});

export default CompanyWrapper;
