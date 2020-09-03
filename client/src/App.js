/* eslint-disable react/prefer-stateless-function */
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/noMatch";

import Header from "./components/Header";
import Footer from "./components/Footer";

// import {useStoreContext} from "./store";
// import { useAuthTokenStore } from "./utils/auth";
// import Login from "./pages/login";
// import Register from "./pages/register";

function App (){
  // useAuthTokenStore();
    return (
      <div className="App">
      <Router>
      <Header/>
          <Switch>
          <Route exact path="/" component={Profile}/>
          <Route exact path="/Portfolio" component={Portfolio}/>
          {/* <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/> */}
          <Route component={NoMatch} />
          </Switch>
      <Footer/>
      </Router>
    </div>
    );
  }

export default App;
