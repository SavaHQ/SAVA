import * as React from "react";
import Typography from "@mui/material/Typography";
import { FiChevronDown } from "react-icons/fi";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Container, makeStyles } from "@material-ui/core";

function TabSection() {
  const classes = useStyle();

  return (
    <Container className={classes.root}>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <Accordion key={index} className={classes.tileContainer}>
          <AccordionSummary expandIcon={<FiChevronDown />}>
            <Typography variant="body1" className={classes.title}>
              How long is the active period of a domain?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.detailsSection}>
            <Typography variant="body2" className={classes.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur dui eu sit
              interdum. Ut pellentesque tincidunt justo eu quam nisl etiam. Integer eget enim,
              pulvinar sit turpis in. Tortor morbi tempus amet in volutpat amet convallis.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}

const useStyle = makeStyles((theme) => ({
  root: {
    padding: "100px",
  },
  tileContainer: {
    padding: 0,
    margin: 10,
    border: "1px solid #808080",
    boxSizing: "border-box",
  },
  detailsSection: {
    background: "#F7FAFE",
  },
  title: {
    fontWeight: 800,
    padding: "40px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#2E2E2E",
    textAlign: "left",
    padding: "50px",
  },
}));

export default TabSection;
