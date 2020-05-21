import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminRoute from "admin/routes/admin-route";
import PublicRoute from "routes/public-route";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={AdminRoute} />
        <Route path="/" component={PublicRoute} />
      </Switch>
    </Router>
  );
};

export default App;
