import React from "react";
import { makeStyles, Card, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 680,
    backgroundColor: "#f8c058",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "black",
    maxWidth: 1200,
    minWidth: 1020,
    height: 400,
  },
  imageTxtContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    height: 400,
    width: 550,
  },
  innerText: {
    textAlign: "center",
    color: "white",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
}));

export default function Vision() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="vision">
      <Card className={classes.card}>
        <div className={classes.imageTxtContainer}>
          <div className={classes.innerText}>
            <Typography variant="h3">Our Vision</Typography>
            <br />
            <Typography variant="body1">
              We are building an investment advisor portal powered by Artificial
              Intelligence for personal users. Thereafter, we will offer API
              licenses to our proprietary model for commercial customers.
              Providing predictive analytics services for other domains will be
              part of the subsequent phase. If you are interested in our
              product, please contact us. Stay tuned for the latest updates!
            </Typography>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/assets/mountain_flag_2.jpg"}
            className={classes.image}
          />
        </div>
      </Card>
    </div>
  );
}
