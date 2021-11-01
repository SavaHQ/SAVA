import React from "react";
import { Box, makeStyles, Typography, Paper, Divider, InputBase } from "@material-ui/core";
import CustomButton from "../CustomButtonComponents/CustomButton";

function CommunityComponent() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Box className={classes.textWrapper}>
          <Typography variant="h1" className={classes.title}>
            Join our discord Commnunity
          </Typography>
          <Typography variant="h7" className={classes.subtitle2}>
            We are not just a crazy fast end-to-end hiring service, we are also a community. We are
            a pro-labour movement and believe that stipends must start at ₹10k/month.
          </Typography>

          <Paper
            className={classes.TextField}
            component="form"
            sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter Your Discord Id"
              inputProps={{ "aria-label": "Enter Your Discord Id" }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <CustomButton
              name="join us"
              color="#ffffff"
              width="188px"
              background="#666E78"
              onButtonClick={() => console.log("join us")}
              borderRadius={5}
              isRadius={true}
            />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "400px",
    justifyContent: "center",
    alignItems: "center",
    margin: "70px 150px 70px 150px",
    background: "#666E78",
    borderRadius: "16px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "2.3565rem",
    textAlign: " center",
    color: "#FFFFFF",
  },
  subtitle2: {
    color: "#E6E6E6",
    inlineSize: "100px",
    overflowWrap: "break-word",
    fontSize: "16px",
    lineHeight: "32px",
  },

  TextField: {
    background: "#FFFFFF",
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #CCCCCC",
    boxSizing: "border-box",
    boxShadow: "0px 64px 120px rgba(102, 110, 120, 0.64)",
    borderRadius: " 8px",
    padding: "15px",
    margin: "20px",
  },
});

export default CommunityComponent;
