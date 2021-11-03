import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box, makeStyles } from "@material-ui/core";
import CustomButton from "../CustomButtonComponents/CustomButton";

function CardComponent({ title, content, image, buttonTitle }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Card className={classes.cardStyles}>
        <CardMedia
          component="img"
          height="525"
          image={image}
          alt="green iguana"
          background="#ffffff"
        />
        <CardContent className={classes.overlay}>
          <Typography className={classes.titleText} color="textSecondary" gutterBottom>
            {title}
          </Typography>
          <Typography className={classes.contentText} color="textSecondary">
            {content}
          </Typography>
          <Box className={classes.Button}>
            <CustomButton
              name={buttonTitle}
              color="#ffffff"
              width="188px"
              background="#666E78"
              onButtonClick={() => console.log({ buttonTitle })}
              borderRadius={5}
              isRadius={true}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#ffffff",
  },
  cardStyles: {
    position: "relative",
    width: "425px",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  overlay: {
    position: "absolute",
    top: "90px",
    left: "10px",
    color: "black",
    textAlign: "left",
    backgroundColor: "transparent",
  },
  cardImage: {
    background: "linear-gradient(0deg, rgba(34, 34, 34, 0.96) 1.34%, rgba(7, 7, 7, 0.11) 100%)",
  },
  titleText: {
    height: "44px",
    fontWeight: "bold",
    fontSize: "20px",
    color: "#FFFFFF",
    padding: "15px 15px 0px 15px;",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      height: "44px",
      fontWeight: "bold",
      fontSize: "15px",
      color: "#FFFFFF",
      padding: "0",
    },
  },
  contentText: {
    color: "#ffffff",
    inlineSize: "350px",
    overflowWrap: "break-word",
    display: "flex",
    padding: "0px 15px 15px 15px;",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: " 22px",
    letterSpacing: "0.2px",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      color: "#ffffff",
      inlineSize: "250px",
      overflowWrap: "break-word",
      display: "flex",
      padding: "0",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: " 22px",
      letterSpacing: "0.2px",
    },
  },
  Button: {
    flexDirection: " column",
    alignItems: "center",
    display: "flex",
    marginTop: "40%",
  },
}));

export default CardComponent;
