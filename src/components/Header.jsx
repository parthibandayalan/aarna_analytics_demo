import React, { useState, useEffect } from "react";
import {
  AppBar,
  Collapse,
  IconButton,
  makeStyles,
  Toolbar,
  MenuItem,
  Menu,
  Typography,
  Link,
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { animateScroll as scroll, Link as SmoothLink } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
  },
  icons: {
    color: "#fff",
    fontSize: "2rem",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  welcome: {
    fontSize: "4rem",
    color: "#f8c058",
  },
  subtext: {
    color: "#fff",
    fontSize: "1.5rem",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    minHeight: "100vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/trading_chart.jpg"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  container: {
    textAlign: "center",
  },
  goDown: {
    color: "#fff",
    fontSize: "4rem",
  },
  image: {
    width: "10",
    height: "10",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <img
            src={process.env.PUBLIC_URL + "/assets/aarna_logo_notext.png"}
            alt=""
            className={classes.image}
          />
          <Typography
            variant="h4"
            className={classes.appbarTitle}
            onClick={() => scroll.scrollToTop()}
          >
            Aarna Analytics
          </Typography>

          <IconButton onClick={handleClick}>
            <SortIcon className={classes.icons} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => scroll.scrollToTop()}>Home</MenuItem>
            <MenuItem>
              <SmoothLink to="business" smooth={true} duration={1000}>
                About Us
              </SmoothLink>
            </MenuItem>
            <MenuItem>
              <SmoothLink to="technology" smooth={true} duration={1000}>
                Our Technology
              </SmoothLink>
            </MenuItem>
            <MenuItem>
              <SmoothLink to="vision" smooth={true} duration={1000}>
                Vision
              </SmoothLink>
            </MenuItem>
            <MenuItem>
              <Link href="https://angel.co/company/aarna-analytics/jobs">
                Careers
              </Link>
            </MenuItem>
            <MenuItem>
              <SmoothLink to="contactus" smooth={true} duration={1000}>
                Contact
              </SmoothLink>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1>
            <span className={classes.welcome}>
              Welcome to Aarna
              <br />
              Analytics
            </span>
            <br />
            <span className={classes.subtext}>See the future today</span>
          </h1>
          <SmoothLink to="business" smooth={true} duration={1000}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown}></ExpandMoreIcon>
            </IconButton>
          </SmoothLink>
        </div>
      </Collapse>
    </div>
  );
}
