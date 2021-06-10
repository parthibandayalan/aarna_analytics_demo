import React from "react";
import { makeStyles, Card, Typography, Link } from "@material-ui/core";
import ContactUsForm from "./ContactUsForm";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 500,
    display: "flex",
  },
  contactLeft: {
    backgroudColor: "white",
    width: "400",
    color: "black",
  },
  contactRight: {
    backgroundColor: "#f8c058",
    width: "300",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    textAlign: "center",
    paddingTop: "20px",
    paddingRight: "40px",
    paddingBottom: "20px",
    paddingLeft: "40px",
  },
}));

export default function ContactUs() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.contactLeft}>
        <ContactUsForm />
      </div>
      <div className={classes.contactRight}>
        <div className={classes.textContainer}>
          <Typography variant="h2">Get in Touch</Typography>
          <br />
          <Typography variant="body2">McKinney, TX, USA</Typography>
          <br />
          <Typography variant="body2">
            <Link href="mailto:contact@aarnaanalytics.com">
              contact@aarnaanalytics.com
            </Link>
          </Typography>
          <br />
          <Typography variant="body2">(214)-856-0385</Typography>
          <br />
          <br />
          <Link href="https://www.linkedin.com/company/aarna-analytics">
            <img
              src={process.env.PUBLIC_URL + "/assets/linkedin.webp"}
              alt="logo"
            />
          </Link>
        </div>
      </div>
    </Card>
    // <form className="contactForm" onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="name" />
    //   <label>Email</label>
    //   <input type="email" name="email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
  );
}
