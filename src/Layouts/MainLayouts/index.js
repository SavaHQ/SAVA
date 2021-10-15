import { makeStyles } from "@material-ui/core";
import NavBarComponent from "../../Components/NavBarComponents/navBarComponent";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  mixins: {
    denseToolbar: {
      minHeight: 48,
    },
  },
});

function MainLayout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <NavBarComponent />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>{children}</div>
          </div>
        </div>
        {/* footer component */}
      </ThemeProvider>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

export default MainLayout;
