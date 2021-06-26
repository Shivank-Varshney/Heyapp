import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Jobs from "./pages/jobs";
import Work from "./pages/Work";
import Newsroom from "./pages/Newsroom";
import JoinTheMovement from "./pages/JoinTheMovement";
import Donate from "./pages/Donate";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/our-work" component={Work} />
        <Route exact path="/newsroom" component={Newsroom} />
        <Route exact path="/join-the-movement" component={JoinTheMovement} />
        <Route exact path="/donate" component={Donate} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;