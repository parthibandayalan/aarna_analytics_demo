import React from "react";
import { makeStyles, Card, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 680,
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#f8c058",
    maxWidth: 1200,
    minWidth: 1020,
    height: 500,
  },
  imageTxtContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    height: 500,
    width: 550,
  },
  innerText: {
    textAlign: "center",
  },
}));

export default function Technology() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="technology">
      <Card className={classes.card}>
        <div className={classes.imageTxtContainer}>
          <img
            src={process.env.PUBLIC_URL + "/assets/engine.jpg"}
            className={classes.image}
          />
          <div className={classes.innerText}>
            <Typography variant="h2">Our Technology</Typography>
            <br />
            <Typography variant="h6">Profitis Prediction Engine</Typography>
            <br />
            <Typography variant="body1">
              At Aarna Analytics, we have undertaken the greatest challenge
              there is. Predicting the future is a tough task, even with today's
              technology. The Profitis Prediction Engine will use state of the
              art methodologies to hyper-tune our models using AI to give the
              best insights possible for a given problem. Our engine will
              analyze vast amounts of data and output usable and measurable
              insights that will enable our customers to reach new heights.
              Profitis will be a game changer!
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  );
}
