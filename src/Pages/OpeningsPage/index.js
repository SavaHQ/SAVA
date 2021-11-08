import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Iframe from "react-iframe";

function OpeningsPage() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.iframe}>
        <Iframe
          url="https://airtable.com/embed/shr8up3EecypZWnat?backgroundColor=teal&viewControls=on"
          width="100%"
          frameBorder="0"
          height="533"
          className="airtable-embed"
          styles={{ background: "transparent", border: "1px solid #ccc" }}
        ></Iframe>
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  iframe: {},
}));

export default OpeningsPage;
