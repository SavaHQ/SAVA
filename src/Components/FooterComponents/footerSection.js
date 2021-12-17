import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as ROUTES from "../../Constants/routesEndpoints";

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body1" className={classes.copyrightText}>
      Copyright &#169; {new Date().getFullYear()} SAVA
    </Typography>
  );
}

function FooterSection() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container className={classes.footerContainer}>
        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} lg={4} md={12}>
            <Box mt={12} align="left">
              <Typography>
                <img src="assests/images/SAVA.png" />
              </Typography>
              <Typography variant="h5" className={classes.description}>
                We source Content Creators as Interns to Startups. Sava is a platform that allows
                startups to hire Interns Fast. Crazy Fast. We have recently helped companies like
                Angel Broking, GoMechanic and D2C in hiring Interns
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box className={classes.reduseSpace} align="left" sx={{ mt: { xs: 8, lg: 12 } }}>
              <Typography variant="h4">Explore</Typography>
              <Box mt={3}>
                <Typography gutterBottom>
                  <Link to={ROUTES.HOME} className={classes.TextLinks}>
                    Home
                  </Link>
                </Typography>
                <Typography gutterBottom>
                  <Link to={ROUTES.FORSTARTUP} className={classes.TextLinks}>
                    For Startups
                  </Link>
                </Typography>
                <Typography gutterBottom>
                  <Link to={ROUTES.COMMUNITY} className={classes.TextLinks}>
                    Community
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box className={classes.reduseSpace} align="left" sx={{ mt: { xs: 8, lg: 12 } }}>
              <Typography variant="h4">About</Typography>
              <Box mt={3}>
                <Typography gutterBottom>
                  <Link to="/#" className={classes.TextLinks}>
                    Career
                  </Link>
                </Typography>
                <Typography gutterBottom>
                  <Link to="/#" className={classes.TextLinks}>
                    Privacy & Policy
                  </Link>
                </Typography>
                <Typography gutterBottom>
                  <Link to="/#" className={classes.TextLinks}>
                    Terms & Conditions
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box className={classes.reduseSpace} align="left" sx={{ mt: { xs: 8, lg: 12 } }}>
              <Typography variant="h4">Community</Typography>
              <Box mt={3}>
                <Typography gutterBottom>
                  <Link to="/#" className={classes.TextLinks}>
                    Join Us
                  </Link>
                </Typography>
                <Typography gutterBottom>
                  <Link to="/#" className={classes.TextLinks}>
                    Refer a Friend
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box className={classes.reduseSpace} align="left" sx={{ mt: { xs: 8, lg: 12 } }}>
              <Typography variant="h4">Help</Typography>
              <Box mt={3}>
                <Typography gutterBottom>
                  <Link to="/#" className={classes.TextLinks}>
                    FAQ
                  </Link>
                </Typography>
                <Typography gutterBottom>
                  <Link to="/#" className={classes.TextLinks}>
                    Support
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box mt={15}>
          <Copyright className={classes.Copyright} />
        </Box>
      </Container>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 450,
    background: theme.palette.primary.footer.background,
    [theme.breakpoints.down("md")]: {
      "& .MuiGrid-grid-md-2": {
        maxWidth: "none",
      },
      "& .MuiBox-root-207": {
        width: "100%",
      },
    },
    paddingBottom: theme.spacing(2),
  },
  footerContainer: {
    maxWidth: "85%",
    color: "#E6E6E6",
  },
  description: {
    marginTop: theme.spacing(3),
    lineHeight: "34px",
    textAlign: "left",
    fontFamily: "Inter",
    fontSize: "14px",
    color: "#E6E6E6",
  },
  reduseSpace: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "0",
    },
  },
  TextLinks: {
    textAlign: "left",
    color: "#E6E6E6",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
  copyrightText: {
    color: "#768390",
  },
}));

export default FooterSection;
