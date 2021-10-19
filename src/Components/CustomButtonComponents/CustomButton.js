/* eslint-disable prettier/prettier */
import { Button, makeStyles } from "@material-ui/core";
import React from "react";

function CustomButton({ name, onButtonClick, borderRadius, isRadius, background, color, border }) {
  const classes = useStyles();

  return (
    <Button
      onClick={onButtonClick}
      style={{
        borderRadius: isRadius ? borderRadius : 0,
        background: background,
        color: color,
        border: border,
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
  },
});

export default CustomButton;
