import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Iframe from "react-iframe";
import Loader from "react-loader-spinner";
function OpeningsPage() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.iframe}>
        <Loader type="Puff" color="#222222" height={600} width={100} timeout={1000} />
        <Iframe
          url="https://airtable.com/embed/shr8up3EecypZWnat?backgroundColor=teal&viewControls=on"
          width="100%"
          frameBorder="0"
          height="733"
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
