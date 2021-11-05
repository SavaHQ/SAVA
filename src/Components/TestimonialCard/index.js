import {
  Avatar,
  Box,
  Card,
  CardContent,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

function ReviewCard({ name, description, designation }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Card className={classes.cardContainer}>
        <CardContent>
          <ListItem>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h5">{name}</Typography>
              <Typography variant="body1">{designation}</Typography>
            </ListItemText>
          </ListItem>
          <Typography className={classes.description}>{description}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: 520,
    flex: "0 0 auto",
    [theme.breakpoints.down("md")]: {
      maxWidth: 390,
    },
  },
  cardContainer: {
    maxWidth: 500,
    boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.25)",
    cursor: "pointer",
    transition: "0.5s",
    "&:hover": {
      boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.1)",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 350,
    },
  },
  description: {
    marginTop: theme.spacing(2),
  },
  rating: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

export default ReviewCard;
