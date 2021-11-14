import React from "react";

import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Link,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  // OutlinedInput,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

function LoginSectionComponent() {
  const dispatch = useDispatch();

  const [role, setrole] = React.useState("Startup");

  const handleChange = (event) => {
    setrole(event.target.value);
  };

  const handleLoginAction = () => {
    try {
      dispatch();
    } catch (err) {
      console.log(err);
    }
  };

  const roles = ["Student", "Startup"];

  const classes = useStyles();

  return (
    <>
      <Box my={12}>
        <Typography variant="subtitle2" color="textPrimary" className={classes.subtitle}>
          Start Learning
        </Typography>
        <Typography color="textPrimary" className={classes.title}>
          Create an account
        </Typography>
        <Grid>
          <TextField
            fullWidth
            margin="normal"
            label="Student / Company name"
            variant="outlined"
            size="small"
          />

          <FormControl fullWidth size="small">
            <InputLabel>
              <Box pl={2}>Roles</Box>
            </InputLabel>
            <Select value={role} onChange={handleChange} variant="outlined">
              {roles.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <TextField fullWidth margin="normal" label="Email" variant="outlined" size="small" />
        <TextField fullWidth margin="normal" label="Password" variant="outlined" size="small" />
        <TextField fullWidth margin="normal" label="Phone Number" variant="outlined" size="small" />
        <Button fullWidth className={classes.signupButton} onClick={() => handleLoginAction()}>
          <Typography variant="body2">Sign up</Typography>
        </Button>
        {/* <Button fullWidth className={classes.googleSignup} onClick={() => handleLoginAction()}>
          <img className={classes.googleIcon} src="assets/icon/social icons/google_icon.svg" />
          <Typography variant="body2"> Sign up with google</Typography>
        </Button> */}
        <Box my={6}>
          <Grid container justify="center">
            <Grid item>
              <Link href="#" variant="body2">
                {"Already have an account? Log In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1.8rem",
    fontWeight: 800,
    cursor: "pointer",
  },
  subtitle: {
    textTransform: "uppercase",
  },
  signupButton: {
    background: "#666E78",
    color: "#fff",
    textTransform: "none",
    "&:hover": {
      background: "#666E78",
    },
    padding: theme.spacing(2, 0),
    marginTop: theme.spacing(3),
  },
  // googleSignup: {
  //   color: theme.palette.primary.main,
  //   textTransform: "none",
  //   padding: theme.spacing(1.5, 0),
  //   marginTop: theme.spacing(2),
  //   boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
  // },
  // googleIcon: {
  //   marginRight: theme.spacing(1),
  // },
}));

export default LoginSectionComponent;
