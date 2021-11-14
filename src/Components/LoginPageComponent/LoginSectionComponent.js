import React from "react";

import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { firebaseAuth, generateUserDocument } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AlertWarning from "material-ui/svg-icons/alert/warning";

function LoginSectionComponent() {
  const [role, setRole] = React.useState("");

  const [login, setLogin] = React.useState(false);

  const [name, setName] = React.useState("");

  const [email, setEmail] = React.useState("");

  const [password, setPassword] = React.useState("");

  const [phone, setPhone] = React.useState("");

  const handleChange = (event) => {
    setRole(event.value);
  };

  const handleLoginAction = () => {
    createUserWithEmailAndPasswordHandler();
  };

  const option = ["Student", "Startup"];

  const classes = useStyles();

  const createUserWithEmailAndPasswordHandler = async () => {
    try {
      // const resumeURL = await upload(file.path);
      const { user } = await firebaseAuth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, role, { name, email, phone, role });
      setLogin(!login);
    } catch (error) {
      toast(error.message);
    }

    setEmail("");
    setPassword("");
    setName("");
    setRole("");
    setPhone("");
  };

  return (
    <>
      <Box my={16}>
        <Typography variant="subtitle2" color="textPrimary" className={classes.subtitle}>
          Start your journy
        </Typography>
        <Typography color="textPrimary" className={classes.title}>
          {!login ? "Login to SAVA" : "Create an account"}
        </Typography>

        <Box className={classes.signUpContainer} pt={4}>
          <Grid container spacing={2}>
            {login ? (
              <>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    variant="outlined"
                    label="Student / Company"
                    autoFocus
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Dropdown
                    className={classes.dropDown}
                    options={option}
                    onChange={(e) => handleChange(e)}
                    value={role}
                    placeholder="Select Role"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="phoneNumber"
                    label="PhoneNumber"
                    variant="outlined"
                    type="number"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    id="phoneNumber"
                  />
                </Grid>
              </>
            ) : (
              <Box />
            )}

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                variant="outlined"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Grid>
          </Grid>
          {/* 
          
       */}
        </Box>

        <Button fullWidth className={classes.signupButton} onClick={() => handleLoginAction()}>
          <Typography variant="body2">{login ? "Sign up " : "Login"}</Typography>
        </Button>
        {/* <Button fullWidth className={classes.googleSignup} onClick={() => handleLoginAction()}>
          <img className={classes.googleIcon} src="assets/icon/social icons/google_icon.svg" />
          <Typography variant="body2"> Sign up with google</Typography>
        </Button> */}
        <Box my={6} style={{ cursor: "pointer" }}>
          <Grid container justify="center" onClick={() => setLogin(!login)}>
            <Grid item>
              {!login ? "Dont't have an account ? Signup" : "Already have an account ?   Login"}
            </Grid>
          </Grid>
        </Box>
        <ToastContainer type={AlertWarning} theme="dark" />
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
  dropDown: {},
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
