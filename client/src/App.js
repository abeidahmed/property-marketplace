import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicRoute from "routes/public-route";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={PublicRoute} />
      </Switch>
    </Router>
  );
};

export default App;
