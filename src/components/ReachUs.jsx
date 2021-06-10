import { Typography, makeStyles, Link, Grid } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  lowerBar: {
    height: "500",
    alignItems: "center",
    display: "inline-block",
    backgroudColor: "#f8c058",
  },
  gridClass: {
    height: "420px",
    position: "static",
    display: "grid",
    height: "auto",
    width: "100%",
    minHeight: "420px",
    gridTemplateRows: "min-content min-content min-content min-content 1fr",
    gridTemplateColumns: "100%",
    gridRowGap: "20px",
  },
  titleTypoClass: {
    textAlign: "center",
    lineHeight: "1.34em",
  },
  gridItems: {
    height: "100%",
    paddingTop: 5,
  },
}));

export default function ReachUs() {
  const classes = useStyles();
  return (
    <div className={classes.lowerBar}>
      <div className={classes.gridClass}>
        <div>
          <Typography className={classes.titleTypoClass} variant="h2">
            Get in Touch
          </Typography>
        </div>
        <div>
          <Typography variant="body2">McKinney, TX, USA</Typography>
        </div>
        <div>
          <Typography variant="body2">
            <Link href="mailto:email@example.com">
              contact@aarnaanalytics.com
            </Link>
          </Typography>
        </div>
        <div>
          <Typography variant="body2">(214)856-0385</Typography>
        </div>
        {/* <div>
          <Link href="https://www.linkedin.com/company/aarna-analytics">
            <img
              src={process.env.PUBLIC_URL + "/assets/Aarna_logo.webp"}
              alt="logo"
            />
          </Link>
        </div> */}
      </div>
    </div>
  );
}
