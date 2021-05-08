import { ThemeProvider, CssBaseline } from "@material-ui/core";
import SideMenu from "./SideMenu";
import Header from "./Header";
import Employees from "./Employees";
import { useStyles } from "../styles/App";
import theme from "../theme";

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
    </ThemeProvider>
  );
}

export default App;
