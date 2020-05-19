import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "views/login";
import Home from "views/home";

const PublicRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default PublicRoute;
