import SideMenu from "./SideMenu";
import { useStyles } from "../styles/App";
import Header from "./Header";

function App() {
  const classes = useStyles();

  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
    </>
  );
}

export default App;
