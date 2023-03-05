import "./App.css";
import Header from "./component/header";

import { BrowserRouter } from "react-router-dom";
import Router from "component/router";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Router></Router>
      </BrowserRouter>
    </>
  );
}

export default App;
