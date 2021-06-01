import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useStyles from "./material-styles/styles";
import { theme } from "./material-styles/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Home from "./pages/Home";
function App() {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Container>
          <Grid container className={classes.main}>
            <Home></Home>
          </Grid>
        </Container>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
