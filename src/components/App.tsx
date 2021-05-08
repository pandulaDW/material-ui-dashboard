import { ThemeProvider, CssBaseline } from "@material-ui/core";
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined";
import SideMenu from "./SideMenu";
import Header from "./Header";
import PageHeader from "./PageHeader";
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
        <PageHeader
          title="Page Header"
          subtitle="Page Description"
          icon={<PeopleOutlinedIcon fontSize="large" />}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
