import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box, makeStyles } from "@material-ui/core";
import CustomButton from "../CustomButtonComponents/CustomButton";

function CardComponent({ title, content, image, buttonTitle }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Card
        className={classes.cardStyles}
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no - repeat",
          backgroundSize: "cover",
        }}
      >
        <CardContent>
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
    padding: "40px",
  },
  cardStyles: {
    height: "100%",
  },
  titleText: {
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {},
  },
  contentText: {
    [theme.breakpoints.down("sm")]: {},
  },
  Button: {
    flexDirection: " column",
    alignItems: "center",
    display: "flex",
  },
}));

export default CardComponent;
