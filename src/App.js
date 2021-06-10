import "./App.css";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import Business from "./components/Business";
import Technology from "./components/Technology";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import LowerBar from "./components/LowerBar";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline>
        <Header />
        <Business />
        <Technology />
        <Vision />
        <Footer />
        <LowerBar />
      </CssBaseline>
    </div>
  );
}

export default App;
