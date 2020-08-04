import React from "react";
import "./css/App.css";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
