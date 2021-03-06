/* eslint-disable prettier/prettier */
import { Button, makeStyles } from "@material-ui/core";
import React from "react";

function CustomButton({
  name,
  onButtonClick,
  borderRadius,
  isRadius,
  background,
  color,
  border,
  width,
  top,
  height,
  left,
  marginBottom
}) {
  const classes = useStyles();

  return (
    <Button
      onClick={onButtonClick}
      style={{
        borderRadius: isRadius ? borderRadius : 0,
        background: background,
        color: color,
        border: border,
        width: width,
        top: top,
        height: height,
        left: left,
        marginBottom: marginBottom,
      }}
      className={classes.button}
    >
      {name}
    </Button>
  );
}

const useStyles = makeStyles({
  button: {
    marginRight: 11,
    width: 146,
    height: 39,
    top: 3,
    textDecoration: "none",
  },
});

export default CustomButton;
