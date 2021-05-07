import SideMenu from "./SideMenu";
import { useStyles } from "../styles/App";

function App() {
  const classes = useStyles();

  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>Here we go!</div>
    </>
  );
}

export default App;
