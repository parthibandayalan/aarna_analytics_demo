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
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/business.jpeg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    maxWidth: 1200,
    minWidth: 1020,
    height: 576,
  },
  textSection: {
    color: "white",
    textAlign: "center",
    paddingTop: "40px",
    paddingRight: "70px",
    paddingBottom: "70px",
    paddingLeft: "70px",
  },
}));

export default function Business() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="business">
      <Card className={classes.card}>
        <div className={classes.textSection}>
          <Typography variant="h2">Our Business</Typography>
          <br />
          <Typography variant="h6">How We Got Here</Typography>
          <br />
          <Typography variant="body1">
            We're a talented group of engineers coming from various industries
            and academia. We all have advanced degrees and numerous years of
            experience in the field of Artificial Intelligence. Our work has
            been published at numerous conferences and journals around the
            globe.
          </Typography>
          <br />
          <Typography variant="body1">
            What unites us and acted as the catalyst to form Aarna Analytics is
            our passion for this subject and our desire to use our expertise to
            create something that will help people make better decisions. We
            will strive to bring solutions to customers in various industries to
            help them make tactical and strategic decisions to overcome the
            challenges they face.
          </Typography>
          <br />
          <Typography variant="body1">
            At Aarna Analytics, we believe that our technological edge and
            expertise can lead our customers towards a successful future. We
            will work to keep our technology ahead of the curve and accessible
            to everyone.
          </Typography>
        </div>
      </Card>
    </div>
  );
}
