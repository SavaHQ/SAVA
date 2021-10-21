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
    width: 128,
    height: 44,
    top: 3,
  },
});

export default CustomButton;
