import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useStyles from "./material-styles/styles";
import { theme } from "./material-styles/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ProductScreen from "./pages/ProductScreen";
function App() {
  const classes = useStyles();
  return (
    <>
      <Router>
        <Switch>
          <ThemeProvider theme={theme}>
            <Header></Header>
            <Container>
              <Route exact path="/" component={Home}></Route>
              <Route
                exact
                path="/product/:id"
                component={ProductScreen}
              ></Route>
              <Footer></Footer>
            </Container>
          </ThemeProvider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
