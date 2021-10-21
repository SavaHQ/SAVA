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
          height="450"
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
          <CustomButton
            name={buttonTitle}
            color="#ffffff"
            left="110px"
            width="188px"
            top="100px"
            background="#666E78"
            onButtonClick={() => console.log("Join Us")}
            borderRadius={5}
            isRadius={true}
          />
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
    width: "475px",
  },
  overlay: {
    position: "absolute",
    top: "90px",
    left: "10px",
    color: "black",
    textAlign: "left",
    backgroundColor: "transparent",
  },
  cardImage: {},
  titleText: {
    height: "44px",
    fontWeight: "bold",
    fontSize: "24px",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  contentText: {
    color: "#ffffff",
  },
}));

export default CardComponent;
