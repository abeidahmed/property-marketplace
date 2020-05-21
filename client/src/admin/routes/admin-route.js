import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "admin/views/dashboard";
import UserList from "admin/views/user/user-list";

const AdminRouter = () => {
  return (
    <Switch>
      <Route path="/admin/dashboard" component={Dashboard} />
      <Route path="/admin/users" component={UserList} />
    </Switch>
  );
};

export default AdminRouter;
