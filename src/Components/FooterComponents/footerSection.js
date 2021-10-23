import {
  Box,
  Container,
  Grid,
  // Hidden,
  IconButton,
  makeStyles,
  Switch,
  Typography,
} from "@material-ui/core";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import React, { useState } from "react";

function Copyright() {
  return (
    <Typography variant="body1" align="center">
      Copyright &#169; {new Date().getFullYear()} SAVA
    </Typography>
  );
}

function FooterSection() {
  const classes = useStyles();

  const [state, setState] = useState(false);

  const handleChange = (event) => {
    setState(!state);
  };

  return (
    <Box className={classes.root}>
      <Container className={classes.footerContainer}>
        <Box pt={5} className={classes.darkModeSwitcher}>
          <Switch onChange={handleChange} />
          <Brightness5Icon className={classes.darkModeIcon} />
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={12} lg={4} md={12}>
            <Box>
              <Typography variant="h4">
                <img src="assests/images/logo.svg" />{" "}
              </Typography>
              <Typography variant="h5" className={classes.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book.
              </Typography>
              <Box className={classes.buttonContainer}>
                <IconButton className={classes.socialButtons}>
                  <TwitterIcon />
                </IconButton>
                <IconButton className={classes.socialButtons}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton className={classes.socialButtons}>
                  <GitHubIcon />
                </IconButton>
                <IconButton className={classes.socialButtons}>
                  <YouTubeIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box>
              <Typography variant="h4">Explore</Typography>
              <Box mt={3} className={classes.exploreLinks}>
                <Typography gutterBottom variant="h5">
                  Home
                </Typography>
                <Typography gutterBottom variant="h5">
                  Courses
                </Typography>
                <Typography gutterBottom variant="h5">
                  Special Offers
                </Typography>
                <Typography variant="h5">Events & Hackathons</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box>
              <Typography variant="h4">About</Typography>
              <Box mt={3} className={classes.AboutLinks}>
                <Typography gutterBottom variant="h5">
                  Privacy & Policy
                </Typography>
                <Typography gutterBottom variant="h5">
                  Terms & Conditions
                </Typography>
                <Typography gutterBottom variant="h5">
                  Support
                </Typography>
                <Typography variant="h5">Career</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box>
              <Typography variant="h4">Community</Typography>
              <Box mt={3} className={classes.communityLinks}>
                <Typography gutterBottom variant="h5">
                  Refer a Friend{" "}
                </Typography>
                <Typography variant="h5">Scholarship</Typography>
              </Box>
            </Box>
          </Grid>
          {/* <Hidden smDown>
            <Grid item xs={12} md={2}>
              <Box>
                <Typography variant="h4">Download App</Typography>
                <Box mt={3}>
                  <Typography variant="h5">
                    <img
                      src="/assets/icon/social icons/google_play.svg"
                      className={classes.googlePlay}
                    />
                    <img
                      src="/assets/icon/social icons/appleStore.svg"
                      className={classes.appleStore}
                    />
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Hidden> */}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 550,
    background: theme.palette.primary.footer.background,
    [theme.breakpoints.down("md")]: {
      "& .MuiGrid-grid-md-2": {
        maxWidth: "none",
      },
      "& .MuiBox-root-207": {
        width: "max-content",
      },
    },
    paddingBottom: theme.spacing(12),
  },
  footerContainer: {
    maxWidth: "85%",
  },
  description: {
    marginTop: theme.spacing(3),
    lineHeight: "25px",
    textAlign: "left",
  },
  buttonContainer: {
    marginTop: theme.spacing(6),
  },
  socialButtons: {
    marginTop: theme.spacing(1),
    background: theme.palette.primary.main,
    marginRight: theme.spacing(2),
    color: "white",
    maxHeight: 40,
    maxWidth: 40,
    boxShadow: "0px 4px 15px rgba(55, 64, 161, 0.25)",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  googlePlay: {
    cursor: "pointer",
  },
  appleStore: {
    cursor: "pointer",
  },
  darkModeSwitcher: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row-reverse",
    marginBottom: theme.spacing(10),
  },
  darkModeIcon: {
    maxHeight: 35,
    maxWidth: 35,
  },
}));

export default FooterSection;
