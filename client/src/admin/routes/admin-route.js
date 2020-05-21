import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "admin/views/dashboard";
import Sidebar from "admin/views/sidebar";
import UserList from "admin/views/user/user-list";

const AdminRouter = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Switch>
        <Route path="/admin/dashboard" component={Dashboard} />
        <Route path="/admin/users" component={UserList} />
      </Switch>
    </div>
  );
};

export default AdminRouter;
