import React from "react";
import { makeStyles } from "@material-ui/core";
import ContactUs from "./ContactUs";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 840,
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="contactus">
      <ContactUs />
    </div>
  );
}
