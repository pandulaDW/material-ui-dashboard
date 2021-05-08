import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined";
import SideMenu from "./SideMenu";
import { useStyles } from "../styles/App";
import Header from "./Header";
import PageHeader from "./PageHeader";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <PageHeader
          title="Page Header"
          subtitle="Page Description"
          icon={<PeopleOutlinedIcon />}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
