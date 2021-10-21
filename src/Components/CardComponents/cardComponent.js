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
          className={classes.cardImage}
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
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "black",
    backgroundColor: "transparent",
  },
  cardImage: {
    background: "linear-gradient(0deg, #222222 1.34%, rgba(7, 7, 7, 0.58) 100%)",
  },
  titleText: {
    width: "341px",
    height: "44px",
    left: "252px",
    top: "400px",
    fontWeight: "bold",
    fontSize: "24px",
    textAlign: "center",
    color: "#FFFFFF",
  },
}));

export default CardComponent;
