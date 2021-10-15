import { makeStyles } from "@material-ui/core";

function MainLayout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Navigation component */}
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
      {/* footer component */}
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
