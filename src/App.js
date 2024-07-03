import React from "react";
import ReactDOM from "react-dom/client";
import IconBar from "./icon_bar";
import DropDown from "./components/DropDown";
import TipTap from "./components/TipTap";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import TabBar from "./components/TabBar";

const App = () => {
  return <TipTap />;
};
ReactDOM.createRoot(document.getElementsByTagName("body")[0]).render(<App />);
export default App;
