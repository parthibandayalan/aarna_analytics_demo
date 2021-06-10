import { makeStyles, Typography, Link } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  lowerBar: {
    height: "180px",
    alignItems: "center",
    backgroundColor: "#323f54",
  },
  typoClass: {
    color: "white",
  },
  imageClass: {
    height: "90px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function LowerBar() {
  const classes = useStyles();

  return (
    <div className={classes.lowerBar}>
      <div className={classes.imageClass}>
        <Link href="https://www.linkedin.com/company/aarna-analytics">
          <img
            src={process.env.PUBLIC_URL + "/assets/linkedin.webp"}
            alt="logo"
          />
        </Link>
      </div>
      <div className={classes.imageClass}>
        <Typography className={classes.typoClass}>
          ©2020 Aarna Analytics
        </Typography>
      </div>
    </div>
  );
}
