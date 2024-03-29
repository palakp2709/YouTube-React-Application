import "./App.css";
import Head from "./Components/Head";
import { useSelector } from "react-redux";
import { Outlet} from "react-router-dom";


function App() {
  const chgtheme = useSelector((store) => store.theme.isDarkTheme);
  return (
    <div className={chgtheme ? "bg-black" : "bg-white"}>
      <Head />
      <Outlet/>
    </div>
  );
}

export default App;
